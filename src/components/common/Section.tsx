"use client"

import React, { useEffect, useRef } from 'react';

// Fades children in once they scroll into view.
export const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export const SectionHeader: React.FC<{ index: string; label: string; title: string; intro?: string }> = ({
  index,
  label,
  title,
  intro,
}) => (
  <Reveal className="mb-12 md:mb-16 max-w-2xl">
    <p className="eyebrow mb-3">
      <span className="text-subtle">{index} //</span> {label}
    </p>
    <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
    {intro && <p className="mt-4 text-subtle text-base md:text-lg leading-relaxed">{intro}</p>}
  </Reveal>
);

// Renders **term** as a highlighted span.
export const Rich: React.FC<{ text: string }> = ({ text }) => (
  <>
    {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
      part.startsWith('**') ? (
        <span key={i} className="text-ink font-medium">
          {part.slice(2, -2)}
        </span>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    )}
  </>
);
