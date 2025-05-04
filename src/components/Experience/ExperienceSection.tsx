"use client"

import React from 'react';

type TimelineItemProps = {
  company: string;
  location: string;
  position: string;
  period: string;
  achievements: string[];
  isLast?: boolean;
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  company,
  location,
  position,
  period,
  achievements,
  isLast = false,
}) => {
  return (
    <div className="relative pl-8 sm:pl-12 py-6">
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-7 sm:top-8 h-4 w-4 rounded-full bg-blue-500 dark:bg-blue-400 z-10"></div>
      {!isLast && (
        <div className="absolute left-[7px] sm:left-[7px] top-10 h-full w-0.5 bg-blue-200 dark:bg-blue-700"></div>
      )}
      
      {/* Content */}
      <div className="card">
        <div className="flex flex-col sm:flex-row justify-between mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{position}</h3>
            <p className="text-md sm:text-lg font-medium text-blue-600 dark:text-blue-400">{company}</p>
          </div>
          <div className="mt-2 sm:mt-0 text-left sm:text-right">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
              {period}
            </span>
            <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">{location}</p>
          </div>
        </div>
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 dark:text-blue-400 mr-2 flex-shrink-0">•</span>
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Medtronic",
      location: "Boston, MA",
      position: "Surgical R&T Machine Learning Engineer",
      period: "Jan 2024 – Apr 2025",
      achievements: [
        "Built an end-to-end SLAM pipeline with DROID-SLAM for dense depth estimation in surgical videos, optimizing camera trajectory using GTSAM and refining 3D reconstruction with Bundle Adjustment and LightGlue feature matching",
        "Developed a real-time Ground Truth pose estimation pipeline using OptiTrack camera capture and robot kinematics with PnP and ROMA feature detection for training deep learning models on instrument articulation",
        "Performed Semantic Segmentation for, Robot-Assisted Surgery, on 10,000 medical images from S3 bucket, containing both mask and line annotations, to segment hernia using the Swin Base Transformer",
        "Developed a YOLOv8-based pipeline for precise detection of surgical instrument tips from medical images in real-time",
        "Applied Monocular Depth Estimation to get metric distance between two instruments from an image by Depth Anything",
        "Implemented a PyTorch wrapper with Optical Flow on FAST API using Unimatch, converting models to ONNX and TensorRT for 10x reduction in real time annotation of medical image frames with 1-second latency"
      ]
    },
    {
      company: "Northeastern University",
      location: "Boston, MA",
      position: "Research Student - Computer Vision",
      period: "May 2023 – Dec 2023",
      achievements: [
        "Researched raw log RGB data's impact on deep networks like ResNet-18, improving classification performance and robustness to intensity and color variations",
        "Codeveloped the novel RAW10 dataset (10k DNG & JPG images each, 10 categories) to advance LOG RGB research in Computer Vision community",
        "Published CVPR 2024 paper on this research",
      
      ]
    },
    {
      company: "Kisan Drip Irrigation Pvt Ltd",
      location: "India",
      position: "Artificial Intelligence Engineer",
      period: "Aug 2020 – Aug 2022",
      achievements: [
        "Designed a 3D defect detection system using Intel RealSense D455 cameras and Open3D, combining voxel downsampling, RANSAC plane segmentation, DBSCAN clustering, and surface curvature analysis to detect missing holes, dents, and deformations in pipe-extruder and sprinkler products",
        "Experimented with PointNet-based deep learning models for point cloud classification to enhance complex defect identification, achieving a 30% improvement over traditional 2D vision methods",
        "Deployed the 3D vision pipeline as a containerized FastAPI service integrated into on-premises manufacturing workflows"
      ]
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title">Professional Experience</h2>
        <div className="mt-6 sm:mt-8">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              company={exp.company}
              location={exp.location}
              position={exp.position}
              period={exp.period}
              achievements={exp.achievements}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
