"use client";

import React from "react";
import Image from "next/image";
import { Reveal, SectionHeader } from "@/components/common/Section";
import { focusAreas, profile } from "@/data/profile";

const AboutSection = () => {
  return (
    <section id="about" className="section border-t border-edge">
      <div className="container-custom">
        <SectionHeader index="01" label="About" title="From pixels to poses to policies." />

        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          <Reveal>
            <div className="panel hud-box relative mx-auto aspect-square w-56 overflow-hidden lg:w-full">
              <Image src="/docs/profile.jpg" alt={profile.name} fill sizes="280px" className="object-cover" priority />
            </div>
            <div className="mt-4 space-y-1 text-center font-mono text-xs text-subtle lg:text-left">
              <p>
                <span className="text-signal">loc</span> {profile.location}
              </p>
              <p>
                <span className="text-signal">now</span> Medtronic · Surgical Robotics
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal className="space-y-4 text-base md:text-lg leading-relaxed text-subtle">
              <p>
                I&apos;m a <span className="text-ink">Robotics Software Engineer at Medtronic</span>, where I build
                perception and state estimation for the Hugo surgical robot — dense SLAM on endoscopic video,
                kinematics-aware instrument tracking, digital twins for collision avoidance, and VLA and RL policies
                trained in NVIDIA Isaac Lab.
              </p>
              <p>
                As a <span className="text-ink">Visiting Researcher at CMU&apos;s AirLab</span>, I worked on
                multi-spectral odometry for aerial robots that stays accurate through smoke and darkness, and LiDAR-inertial SLAM on the
                Unitree G1 humanoid. I hold an M.S. in Robotics (Computer Vision) from Northeastern and have published
                at CVPR.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {focusAreas.map((area, i) => (
                <Reveal key={area.title} delay={i * 80}>
                  <div className="panel panel-hover h-full p-5">
                    <p className="font-mono text-[11px] text-subtle">0{i + 1}</p>
                    <h3 className="mt-1 font-display text-lg font-semibold">{area.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-subtle">{area.body}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {area.tools.map(tool => (
                        <span key={tool} className="chip">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
