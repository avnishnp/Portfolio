"use client"

import React from 'react';
import ViewCounter from '@/components/ViewCounter';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              © {currentYear} Avnish Patel. All rights reserved.
            </p>
          </div>
          <div className="flex items-center">
            <ViewCounter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
