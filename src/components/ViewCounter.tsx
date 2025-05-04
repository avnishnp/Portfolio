"use client"

import React, { useState, useEffect } from 'react';

const ViewCounter = () => {
  const [views, setViews] = useState(0);
  
  useEffect(() => {
    // Check if there's a stored view count
    const storedViews = localStorage.getItem('pageViews');
    
    if (storedViews) {
      // If there are stored views, increment by 1
      const currentViews = parseInt(storedViews, 10) + 1;
      setViews(currentViews);
      localStorage.setItem('pageViews', currentViews.toString());
    } else {
      // If no stored views, initialize with 1
      setViews(1);
      localStorage.setItem('pageViews', '1');
    }
  }, []);
  
  return (
    <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-4 w-4 mr-1" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
      <span>{views} page views</span>
    </div>
  );
};

export default ViewCounter;
