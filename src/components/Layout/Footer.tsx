"use client"

import React from 'react';
import ViewCounter from '@/components/ViewCounter';
import { profile } from '@/data/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-edge py-8">
      <div className="container-custom flex flex-col items-center justify-between gap-4 font-mono text-xs text-subtle md:flex-row">
        <p>
          © {currentYear} {profile.name} · Built with Next.js
        </p>
        <ViewCounter />
      </div>
    </footer>
  );
};

export default Footer;
