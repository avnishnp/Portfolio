"use client"

import React, { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { Reveal, Rich, SectionHeader } from '@/components/common/Section';
import { experiences, type Experience } from '@/data/profile';

const VISIBLE_GROUPS = 2;

const ExperienceCard: React.FC<{ exp: Experience }> = ({ exp }) => {
  const [expanded, setExpanded] = useState(false);
  const total = exp.groups.reduce((n, g) => n + g.bullets.length, 0);
  const groups = expanded ? exp.groups : exp.groups.slice(0, VISIBLE_GROUPS);
  const hidden = exp.groups.length - VISIBLE_GROUPS;

  return (
    <div className="relative pl-8 md:pl-12">
      {/* Timeline node */}
      <span
        className={`absolute left-0 top-2 flex h-4 w-4 -translate-x-[8.5px] items-center justify-center rounded-full border-2 bg-void ${
          exp.current ? 'border-signal' : 'border-edge'
        }`}
      >
        {exp.current && <span className="h-1.5 w-1.5 rounded-full bg-signal" />}
      </span>

      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <div>
          <h3 className="font-display text-xl md:text-2xl font-semibold">{exp.role}</h3>
          <p className="mt-0.5 text-signal font-medium">{exp.company}</p>
        </div>
        <div className="font-mono text-xs text-subtle md:text-right">
          <p className={exp.current ? 'text-signal' : ''}>{exp.period}</p>
          <p className="mt-1 inline-flex items-center gap-1">
            <MapPin className="h-3 w-3" /> {exp.location}
          </p>
        </div>
      </div>

      <p className="mt-3 max-w-3xl text-subtle">{exp.summary}</p>

      {exp.metrics && (
        <div className="mt-5 flex flex-wrap gap-3">
          {exp.metrics.map(m => (
            <div key={m.label} className="panel px-4 py-2">
              <span className="font-display text-lg font-semibold text-ink">{m.value}</span>
              <span className="ml-2 text-xs text-subtle">{m.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {groups.map(group => (
          <div key={group.title} className="panel p-5">
            <h4 className="font-mono text-xs uppercase tracking-wider text-signal">{group.title}</h4>
            <ul className="mt-3 space-y-2.5">
              {group.bullets.map(bullet => (
                <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-subtle">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-subtle/60" />
                  <span>
                    <Rich text={bullet} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {hidden > 0 && (
        <button
          onClick={() => setExpanded(e => !e)}
          className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-subtle hover:text-signal transition-colors"
          aria-expanded={expanded}
        >
          {expanded ? 'Show less' : `Show all ${total} contributions (+${hidden} areas)`}
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
      )}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {exp.stack.map(s => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section border-t border-edge">
      <div className="container-custom">
        <SectionHeader
          index="02"
          label="Experience"
          title="Where I've shipped robotics."
          intro="Surgical robotics in industry, field robotics in research, and 3D vision on the factory floor."
        />
        <div className="relative space-y-16 border-l border-edge">
          {experiences.map(exp => (
            <Reveal key={exp.company}>
              <ExperienceCard exp={exp} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
