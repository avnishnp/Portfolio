"use client"

import React, { useEffect, useRef } from 'react';

type Vec3 = [number, number, number];

// Seeded RNG so the "map" is identical on every load.
const mulberry32 = (seed: number) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

// Winding tunnel centreline, t in [0, 1].
const path = (t: number): Vec3 => [
  (t - 0.5) * 14,
  Math.sin(t * Math.PI * 1.6) * 0.5,
  Math.sin(t * Math.PI * 2.4) * 2.2,
];

const POINTS = 2600;
const CYCLE = 16; // seconds per mapping run
const SWEEP = 12; // seconds the robot spends driving

const buildMap = () => {
  const rand = mulberry32(7);
  const pts: { p: Vec3; t: number }[] = [];
  for (let i = 0; i < POINTS; i++) {
    const t = rand();
    const [cx, cy, cz] = path(t);
    const theta = rand() * Math.PI * 2;
    const r = 1.5 + (rand() - 0.5) * 0.35;
    let y = cy + Math.sin(theta) * r * 0.75;
    // Flatten the bottom into a floor.
    if (y < cy - 0.9) y = cy - 0.9 - rand() * 0.04;
    pts.push({ p: [cx + (rand() - 0.5) * 0.3, y, cz + Math.cos(theta) * r], t });
  }
  return pts.sort((a, b) => a.t - b.t);
};

const SlamCanvas: React.FC<{ onStats?: (points: number, t: number) => void }> = ({ onStats }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const map = buildMap();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let raf = 0;
    let visible = true;
    // Begin mid-run so the map is already partly built on first paint.
    const start = performance.now() - SWEEP * 0.4 * 1000;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const color = (name: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim().split(/\s+/).join(',');

    const draw = (now: number) => {
      const time = reduceMotion ? SWEEP * 0.8 : (now - start) / 1000;
      const cycle = time % CYCLE;
      const progress = Math.min(cycle / SWEEP, 1);
      const fade = cycle > CYCLE - 1 ? CYCLE - cycle : 1;

      const yaw = -0.6 + Math.sin(time * 0.12) * 0.45;
      const pitch = 0.42;
      const cosY = Math.cos(yaw), sinY = Math.sin(yaw);
      const cosP = Math.cos(pitch), sinP = Math.sin(pitch);
      const focal = Math.min(width, height) * 1.25;
      const dist = 13;

      const project = ([x, y, z]: Vec3): [number, number, number] | null => {
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;
        const y1 = y * cosP - z1 * sinP;
        const z2 = y * sinP + z1 * cosP + dist;
        if (z2 < 0.5) return null;
        return [width / 2 + (x1 * focal) / z2, height / 2 + (y1 * focal) / z2 * -1, z2];
      };

      const signal = color('--c-signal');
      const warn = color('--c-warn');
      const subtle = color('--c-subtle');

      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = fade;

      // Map points revealed behind the robot; fresh observations glow as "features".
      let mapped = 0;
      for (const { p, t } of map) {
        if (t > progress) break;
        mapped++;
        const s = project(p);
        if (!s) continue;
        const age = progress - t;
        const depth = Math.max(0.25, Math.min(1, 1.6 - s[2] / 14));
        const size = Math.max(0.6, 2.2 - s[2] / 10);
        if (age < 0.035) {
          ctx.fillStyle = `rgba(${signal},${0.95 * depth})`;
          ctx.fillRect(s[0] - size, s[1] - size, size * 2, size * 2);
        } else {
          ctx.fillStyle = `rgba(${subtle},${0.55 * depth})`;
          ctx.fillRect(s[0] - size / 2, s[1] - size / 2, size, size);
        }
      }

      // Estimated trajectory.
      ctx.beginPath();
      ctx.strokeStyle = `rgba(${warn},0.9)`;
      ctx.lineWidth = 1.6;
      const steps = Math.floor(progress * 240);
      for (let i = 0; i <= steps; i++) {
        const s = project(path(i / 240));
        if (!s) continue;
        if (i === 0) ctx.moveTo(s[0], s[1]);
        else ctx.lineTo(s[0], s[1]);
      }
      ctx.stroke();

      // Keyframe poses along the trajectory.
      ctx.fillStyle = `rgba(${warn},0.9)`;
      for (let k = 0; k <= progress; k += 0.08) {
        const s = project(path(k));
        if (s) ctx.fillRect(s[0] - 2, s[1] - 2, 4, 4);
      }

      // Camera frustum at the current pose, looking along the tangent.
      const head = path(progress);
      const ahead = path(Math.min(progress + 0.01, 1));
      const dir: Vec3 = [ahead[0] - head[0], ahead[1] - head[1], ahead[2] - head[2]];
      const len = Math.hypot(...dir) || 1;
      const f: Vec3 = [dir[0] / len, dir[1] / len, dir[2] / len];
      const side: Vec3 = [-f[2], 0, f[0]];
      const up: Vec3 = [0, 1, 0];
      const corner = (a: number, b: number): Vec3 => [
        head[0] + f[0] * 0.9 + side[0] * a * 0.55 + up[0] * b * 0.35,
        head[1] + f[1] * 0.9 + side[1] * a * 0.55 + up[1] * b * 0.35,
        head[2] + f[2] * 0.9 + side[2] * a * 0.55 + up[2] * b * 0.35,
      ];
      const apex = project(head);
      const corners = [corner(-1, -1), corner(1, -1), corner(1, 1), corner(-1, 1)].map(project);
      if (apex && corners.every(Boolean)) {
        ctx.strokeStyle = `rgba(${signal},1)`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        corners.forEach((c, i) => {
          const [x, y] = c as [number, number, number];
          ctx.moveTo(apex[0], apex[1]);
          ctx.lineTo(x, y);
          const [nx, ny] = corners[(i + 1) % 4] as [number, number, number];
          ctx.moveTo(x, y);
          ctx.lineTo(nx, ny);
        });
        ctx.stroke();
        ctx.fillStyle = `rgba(${signal},1)`;
        ctx.beginPath();
        ctx.arc(apex[0], apex[1], 3, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      onStats?.(mapped, time);
    };

    const loop = (now: number) => {
      if (visible) draw(now);
      if (!reduceMotion) raf = requestAnimationFrame(loop);
    };

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw(performance.now());
    });
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    io.observe(canvas);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [onStats]);

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />;
};

export default SlamCanvas;
