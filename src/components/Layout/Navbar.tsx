"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { profile } from '@/data/profile';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#publications', label: 'Research' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Stack' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight the link for the section currently in view.
  useEffect(() => {
    const sections = links
      .map(l => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen ? 'border-b border-edge bg-void/80 backdrop-blur-lg' : 'border-b border-transparent'
      }`}
    >
      <div className="container-custom flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-mono text-sm font-medium">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-signal/60 text-signal text-xs">
            AP
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                  active === link.href ? 'text-signal' : 'text-subtle hover:text-ink'
                }`}
              >
                <span className="mr-1 font-mono text-[10px] opacity-60">0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-primary hidden sm:inline-flex py-2">
            Resume
          </a>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-edge text-subtle lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <ul className="container-custom pb-4 lg:hidden">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 border-b border-edge py-3 text-ink"
              >
                <span className="font-mono text-xs text-signal">0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4 sm:hidden">
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
