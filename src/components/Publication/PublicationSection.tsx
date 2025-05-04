"use client"

import React from 'react';

type PublicationItemProps = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
};

const PublicationItem: React.FC<PublicationItemProps> = ({
  title,
  authors,
  venue,
  year,
  link,
}) => {
  return (
    <div className="card mb-6">
      <div className="flex flex-col sm:flex-row justify-between mb-2">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{authors}</p>
          <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400">{venue}, {year}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm text-blue-500 hover:underline"
            >
              View Publication
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const PublicationsSection = () => {
  const publications = [
    {
      title: "Logarithmic Lenses: Exploring Log RGB Data for Image Classification",
      authors: "B. Maxwell, A. Patel",
      venue: " Computer Vision and Pattern Recognition Conference (CVPR)",
      year: "2024",
      link: "https://openaccess.thecvf.com/content/CVPR2024/html/Maxwell_Logarithmic_Lenses_Exploring_Log_RGB_Data_for_Image_Classification_CVPR_2024_paper.html",
    },
  ];

  return (
    <section id="publications" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">Publications</h2>
        <div className="mt-6 sm:mt-8">
          {publications.map((pub, index) => (
            <PublicationItem
              key={index}
              title={pub.title}
              authors={pub.authors}
              venue={pub.venue}
              year={pub.year}
              link={pub.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
