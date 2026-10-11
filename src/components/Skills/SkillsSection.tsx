"use client"

import React from 'react';
import { Reveal, SectionHeader } from '@/components/common/Section';
import { skillGroups } from '@/data/profile';

const SkillsSection = () => {
  return (
    <section id="skills" className="section border-t border-edge">
      <div className="container-custom">
        <SectionHeader index="05" label="Stack" title="Tools of the trade." />

        <div className="grid gap-px overflow-hidden rounded-xl border border-edge bg-edge md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 60} className="bg-panel p-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-signal">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <li key={skill} className="rounded-md border border-edge px-2.5 py-1 text-sm text-ink">
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
