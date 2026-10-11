"use client"

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, FileText, Github, Linkedin } from 'lucide-react';
import SlamCanvas from './SlamCanvas';
import { profile, stats } from '@/data/profile';

const RotatingRole = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % profile.roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-flex items-center font-mono text-signal">
      <span key={index} className="reveal is-visible">{profile.roles[index]}</span>
      <span className="ml-1 inline-block h-5 w-2 bg-signal animate-blink" />
    </span>
  );
};

const HeroSection = () => {
  const pointsRef = useRef<HTMLSpanElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);

  // Write HUD readouts straight to the DOM to avoid re-rendering every frame.
  const onStats = useCallback((points: number, t: number) => {
    if (pointsRef.current) pointsRef.current.textContent = points.toString().padStart(4, '0');
    if (timeRef.current) timeRef.current.textContent = t.toFixed(1);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="bg-grid absolute inset-0 -z-10" />
      <div className="absolute -top-40 right-0 -z-10 h-[480px] w-[480px] rounded-full bg-signal/10 blur-3xl" />

      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="eyebrow mb-6 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              {profile.role} · {profile.location}
            </p>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02]">
              {profile.name}
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-subtle">
              Building robots that see, localize &amp; act.
              <br />
              <RotatingRole />
            </p>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-subtle">{profile.tagline}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#experience" className="btn-primary">
                Explore my work <ArrowRight className="h-4 w-4" />
              </a>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <FileText className="h-4 w-4" /> Resume
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost px-3" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost px-3" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="panel hud-box relative aspect-[4/3] w-full overflow-hidden shadow-2xl shadow-signal/5">
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-edge bg-panel/80 px-4 py-2 font-mono text-[11px] text-subtle backdrop-blur">
              <span>/slam/map · tunnel_run</span>
              <span className="flex items-center gap-1.5 text-warn">
                <span className="h-1.5 w-1.5 rounded-full bg-warn animate-blink" /> REC
              </span>
            </div>
            <SlamCanvas onStats={onStats} />
            <div className="absolute inset-x-0 bottom-0 z-10 flex flex-wrap gap-x-5 gap-y-1 border-t border-edge bg-panel/80 px-4 py-2 font-mono text-[11px] text-subtle backdrop-blur">
              <span>
                map_pts <span ref={pointsRef} className="text-signal">0000</span>
              </span>
              <span>
                t <span ref={timeRef} className="text-ink">0.0</span>s
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-0.5 w-3 bg-warn" /> trajectory
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 bg-signal" /> features
              </span>
            </div>
          </div>
        </div>

        <dl className="mt-16 md:mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-edge bg-edge lg:grid-cols-4">
          {stats.map(stat => (
            <div key={stat.label} className="bg-panel p-5 md:p-6">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl md:text-4xl font-semibold text-ink">{stat.value}</dd>
              <dd className="mt-1 text-sm text-subtle">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default HeroSection;
