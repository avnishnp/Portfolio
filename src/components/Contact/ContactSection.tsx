"use client";

import React from "react";
import { FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/common/Section";
import { profile } from "@/data/profile";

const ContactSection = () => {
  const links = [
    { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
    { label: "GitHub", href: profile.github, icon: Github },
    { label: "Resume", href: profile.resume, icon: FileText },
  ];

  return (
    <section id="contact" className="section border-t border-edge">
      <div className="container-custom">
        <Reveal>
          <div className="panel hud-box relative overflow-hidden p-8 md:p-14">
            <div className="bg-grid absolute inset-0 opacity-60" />
            <div className="relative">
              <p className="eyebrow mb-3">
                <span className="text-subtle">07 //</span> Contact
              </p>
              <h2 className="max-w-2xl font-display text-3xl md:text-5xl font-semibold tracking-tight">
                Let&apos;s build robots that understand the world.
              </h2>
              <p className="mt-4 max-w-xl text-subtle md:text-lg">
                Open to conversations about perception, SLAM, robot learning and surgical robotics.
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="mt-8 inline-flex items-center gap-3 font-display text-xl md:text-2xl text-signal hover:underline underline-offset-4 break-all"
              >
                <Mail className="h-6 w-6 flex-shrink-0" /> {profile.email}
              </a>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {links.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                ))}
                <span className="ml-1 inline-flex items-center gap-1.5 font-mono text-xs text-subtle">
                  <MapPin className="h-3.5 w-3.5" /> {profile.location}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
