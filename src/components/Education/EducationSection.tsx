"use client"

import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Reveal, SectionHeader } from '@/components/common/Section';
import { education } from '@/data/profile';

const EducationSection = () => {
  return (
    <section id="education" className="section border-t border-edge">
      <div className="container-custom">
        <SectionHeader index="06" label="Education" title="Trained in robotics." />

        <Reveal>
          <div className="panel flex flex-col gap-6 p-6 md:flex-row md:items-start md:p-8">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-signal/10 text-signal">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-display text-xl md:text-2xl font-semibold">{education.school}</h3>
                <p className="font-mono text-xs text-subtle">{education.period}</p>
              </div>
              <p className="mt-1 text-signal font-medium">
                {education.degree} · {education.specialization}
              </p>
              <p className="mt-1 font-mono text-xs text-subtle">
                {education.location} · GPA {education.gpa}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {education.coursework.map(c => (
                  <span key={c} className="chip">
                    {c}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-subtle">{education.research}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default EducationSection;
