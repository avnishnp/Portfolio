"use client"

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal, SectionHeader } from '@/components/common/Section';
import { profile, publications } from '@/data/profile';

// Bold my own name in the author list.
const Authors: React.FC<{ authors: string }> = ({ authors }) => {
  const me = `${profile.name.split(' ')[0][0]}. ${profile.name.split(' ').slice(-1)[0]}`;
  return (
    <>
      {authors.split(me).map((part, i, arr) => (
        <React.Fragment key={i}>
          {part}
          {i < arr.length - 1 && <span className="text-ink font-medium">{me}</span>}
        </React.Fragment>
      ))}
    </>
  );
};

const PublicationsSection = () => {
  return (
    <section id="publications" className="section border-t border-edge">
      <div className="container-custom">
        <SectionHeader index="03" label="Research" title="Publications" />

        <div className="grid gap-6 md:grid-cols-2">
          {publications.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 100}>
              <article className="panel panel-hover flex h-full flex-col p-6">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="rounded bg-signal/10 px-2 py-0.5 text-signal">{pub.venue}</span>
                  <span className="text-subtle">{pub.year}</span>
                </div>
                <h3 className="mt-4 font-display text-lg md:text-xl font-semibold leading-snug">{pub.title}</h3>
                <p className="mt-2 text-sm text-subtle">
                  <Authors authors={pub.authors} />
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-subtle">{pub.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {pub.links.map(link => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost px-3 py-1.5 text-xs"
                    >
                      {link.label} <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
