"use client"

import React, { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/common/Section";
import { projects } from "@/data/profile";

const ProjectsSection = () => {
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="section border-t border-edge">
      <div className="container-custom">
        <SectionHeader
          index="04"
          label="Projects"
          title="Built from scratch."
          intro="Open-source implementations of the algorithms I use every day — SLAM, SfM, sensor fusion and GPU kernels."
        />

        <div className="mb-8 flex flex-wrap gap-2" role="tablist">
          {categories.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
                active === cat
                  ? "border-signal bg-signal/10 text-signal"
                  : "border-edge text-subtle hover:border-signal/50 hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map(project => (
            <a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="panel panel-hover group flex flex-col p-5"
            >
              <div className="flex items-center justify-between text-subtle">
                <span className="font-mono text-[11px] uppercase tracking-wider">{project.category}</span>
                <span className="flex items-center gap-1">
                  <Github className="h-4 w-4" />
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold group-hover:text-signal transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-subtle">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <Reveal className="mt-8">
          <a
            href="https://github.com/avnishnp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-subtle hover:text-signal transition-colors"
          >
            More on GitHub <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
