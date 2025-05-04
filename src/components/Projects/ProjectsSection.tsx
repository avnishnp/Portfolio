"use client"

import React, { useState } from "react";


type ProjectItemProps = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
};

type ProjectGroup = {
  category: string;
  projects: ProjectItemProps[];
};

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  technologies,
  github,
  demo,
}) => (
  <div className="card mb-6 sm:mb-8 hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">{title}</h3>
    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">{description}</p>

    <div className="mb-3 sm:mb-4">
      <h4 className="text-sm sm:text-md font-semibold text-gray-800 dark:text-gray-200 mb-1 sm:mb-2">Key Terms:</h4>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>


    <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline text-xs sm:text-sm py-1.5 px-3 sm:py-2 sm:px-4"
      >
        GitHub Repository
      </a>
      {/* {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-xs sm:text-sm py-1.5 px-3 sm:py-2 sm:px-4"
        >
          Live Demo
        </a>
      )} */}
    </div>
  </div>
);

const ProjectsSection = () => {
  const projectGroups: ProjectGroup[] = [
    {
      category: "Computer Vision",
      projects: [
        {
          title: "3D Reconstruction (SFM) with GTSAM Optimization",
          description:
            "This project implements a Structure from Motion (SfM) pipeline for 3D reconstruction from a series of 2D images from scratch. The pipeline includes an initial triangulation of 2D image points into 3D space using classical computer vision methods and optimization using the GTSAM library",
          technologies: ["Python", "Structure from Motion", "GTSAM", "Bundle Adjustment", "Pose Estimation"],
          github: "https://github.com/avnishnp/Computer_Vision/tree/main/3D_Reconstruction",
          demo: "https://dropout-prediction-demo.vercel.app",
        },
        {
          title: "LIDAR - Camera Early Fusion",
          description:
            "Implemented a robust pipeline integrating LiDAR point clouds and camera images using YOLOv8 for accurate obstacle detection. Enhanced perception through multi-modal data fusion and generated video outputs showcasing real-time object detection and distance estimation.",
          technologies: ["Python","PyTorch", "YOLO v8", "Early Fusion", "LIDAR"],
          github: "https://github.com/avnishnp/Computer_Vision/tree/main/Early_Sensor_Fusion",
          demo: "https://dropout-prediction-demo.vercel.app",
        },
        {
          title: "Monocular Visual SLAM",
          description:
            "This project implements a basic Visual SLAM (Simultaneous Localization and Mapping) system using ORB features in python",
          technologies: ["Python", "Monocular SLAM", "ORB", "Pangolin"],
          github: "https://github.com/avnishnp/Computer_Vision/tree/main/monocular_slam",
          demo: "https://dropout-prediction-demo.vercel.app",
        },
        {
          title: "Visual SLAM on CARLA Simulator",
          description:
            "A Monocular Visual SLAM (Simultaneous Localization and Mapping) implementation that works with the CARLA autonomous driving simulator.",
          technologies: ["Python", "Monocular SLAM", "ORB", "Pangolin", "CARLA Simulator"],
          github: "https://github.com/avnishnp/Computer_Vision/tree/main/CARLA_monocular_slam",
          demo: "https://dropout-prediction-demo.vercel.app",
        },
        {
          title: "Late Sensor Fusion with FPN ResNet & Extended Kalman Filter with 3D Scene Reconstruction",
          description:
            "Implements 3D object detection and tracking using the Waymo Open Dataset and process lidar point clouds and camera images to detect vehicles and track them across frames using Extended Kalman filtering and generates a 3D globally consistent map using vehicle pose and LIDAR",
          technologies: ["Python","PyTorch", "YOLO v8", "Extended Kalman Filter", "LIDAR", "Tracking", "FPN ResNet"],
          github: "https://github.com/avnishnp/Computer_Vision/tree/main/Late_Fusion_EKF",
          demo: "https://dropout-prediction-demo.vercel.app",
        },
        {
          title: "Underwater Image Registation and Odometry",
          description:
            "Implements 3D object detection and tracking using the Waymo Open Dataset and process lidar point clouds and camera images to detect vehicles and track them across frames using Extended Kalman filtering and generates a 3D globally consistent map using vehicle pose and LIDAR",
          technologies: ["Python", "SIFT", "GTSAM", "Homography", "RANSAC", "SIFT"],
          github: "https://github.com/avnishnp/Robot-Sensing-Navigation/tree/main/Image%20Registration%20and%20Odometry%20in%20Underwater",
          demo: "https://dropout-prediction-demo.vercel.app",
        },
        {
          title: "Neural Radiance fields (NERF)",
          description:
            "Implemented NERF for Lego dataset for novel view synthesis. The project uses a neural network to learn the volumetric scene representation and render novel views of the scene from arbitrary camera positions.",
          technologies: ["Python", "PyTorch", "Volume Rendering", "3D Reconstruction", "Position Encoding"],
          github: "https://github.com/avnishnp/Computer_Vision/tree/main/Neural%20Radiance%20Fields",
          demo: "https://dropout-prediction-demo.vercel.app",
        },
      ],
    },
    {
      category: "CUDA",
      projects: [
        {
          title: "CUDA Programming",
          description:
            "Programming different algorithms in CUDA",
          technologies: ["CUDA", "Optimization", "Flash Attention", "CNN"],
          github: "https://github.com/avnishnp/Machine_learning/tree/main/CUDA",
          demo: "https://incident-classifier-demo.vercel.app",
        },
      ],
    },
  ];

  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);

  const toggleGroup = (category: string) => {
    setExpandedGroups(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title">Featured Projects</h2>

        {projectGroups.map((group, idx) => {
          const isOpen = expandedGroups.includes(group.category);
          return (
            <div key={idx} className="mt-8">
              <button
                onClick={() => toggleGroup(group.category)}
                className="w-full text-left text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center justify-between"
              >
                {group.category}
                <span className="text-3xl font-bold text-blue-500 dark:text-blue-400">
                  {isOpen ? "−" : "+"}  
                </span>
              </button>
              {isOpen && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {group.projects.map((project, index) => (
                    <ProjectItem
                      key={index}
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      github={project.github}
                      demo={project.demo}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
