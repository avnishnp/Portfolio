"use client"

import React from 'react';

type EducationItemProps = {
  institution: string;
  location: string;
  degree: string;
  period: string;
  gpa?: string;
  coursework?: string;
};

const EducationItem: React.FC<EducationItemProps> = ({
  institution,
  location,
  degree,
  period,
  gpa,
  coursework,
}) => {
  return (
    <div className="card mb-6">
      <div className="flex flex-col sm:flex-row justify-between mb-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{institution}</h3>
          <p className="text-md sm:text-lg font-medium text-blue-600 dark:text-blue-400">{degree}</p>
          {gpa && <p className="text-gray-700 dark:text-gray-300 mt-1 text-sm sm:text-base">GPA: {gpa}</p>}
        </div>
        <div className="mt-2 sm:mt-0 text-left sm:text-right">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
            {period}
          </span>
          <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">{location}</p>
        </div>
      </div>
      {coursework && (
        <div className="mt-4">
          <h4 className="text-sm sm:text-md font-semibold text-gray-800 dark:text-gray-200 mb-2">Relevant Coursework:</h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{coursework}</p>
        </div>
      )}
    </div>
  );
};

const EducationSection = () => {
  const educations = [
    {
      institution: "Northeastern University",
      location: "Boston, MA",
      degree: "Master of Science in Robotics ( specialization in Computer Vision)",
      gpa: "3.6/4.0",
      period: "September 2022 – December 2024",
      coursework: "Robotics Sensing & Navigation, Advanced Computer Vision, Autonomous Field Robotics"
    },
  ];

  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">Education</h2>
        <div className="mt-6 sm:mt-8">
          {educations.map((edu, index) => (
            <EducationItem
              key={index}
              institution={edu.institution}
              location={edu.location}
              degree={edu.degree}
              period={edu.period}
              gpa={edu.gpa}
              coursework={edu.coursework}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
