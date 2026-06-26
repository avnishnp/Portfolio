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
      position: "Robotics Software Engineer",
      period: "Jan 2024 – Apr 2025 | Sept 2025 – Present",
      achievements: [
        "Built an end-to-end SLAM pipeline using stereo-rectified, semantically segmented images in DROID-SLAM for dense depth estimation in surgical videos and scene understanding of anatomy and surgical tools",
        "Optimized camera trajectory using GTSAM Factor Graphs non-linear optimization and refining 3D reconstruction with Bundle Adjustment and Multi-View Geometry with LightGlue feature matching and Open3D offline rendering pipeline",
        "Designed a Pose Graph pipeline with GTSAM using Robot Kinematics and TensorRT based YOLOv8 vision keypoints to reduce the drift and track the instrument points accurately in Out-of-View scenarios",
        "Engineered an Arm Collision Avoidance System using Trimesh and Pytorch Volumetric Signed Distance Fields of the medical robot using URDF and Kinematics using RTI DDS publish-subscribe method for rendering a Digital Twin of the robot",
        "Deployed a C++ based 3D registration pipeline on NVIDIA Holoscan using Fast Foundation Stereo and UniMatch, with custom CUDA kernels for high-performance GPU acceleration",
        "Developed a monocular depth estimation pipeline using Depth Anything to estimate real-time distances between surgical instrument tips, enabling spatial awareness and precise instrument interaction analysis",
        "Built a MASt3R SLAM-based registration pipeline to create a 3D Digital Twin of surgical robot carts using GTSAM for multi-camera scale correction and pose optimization, and Signed Distance Fields (SDFs) for collision avoidance",
        "Programmed a stereo-vision-based localization system using ORB-SLAM3 and RealSense D455 cameras, enabling accurate mapping of surgical cart trajectories in a medical environment",
        "Developed a real-time Ground Truth pose estimation pipeline using OptiTrack camera capture and robot kinematics with PnP and ROMA feature detection for training deep learning models on instrument articulation",
        "Automated Endoscope Stereo Camera Calibration using Zhang's method on a Charuco board with a UR3 Robot Arm",
        "Segmented hernias in 10,000 medical images using Swin Base Transformer with PyTorch DDP for multi-GPU training, tracked experiments via MLflow, and optimized using ONNX/TensorRT",
        "Implemented a PyTorch wrapper with Optical Flow on FAST API using Unimatch, deploying models to ONNX/TensorRT for 10x reduction in real time annotation of medical image frames with 1-second latency"
      ]
    },
    {
      company: "Carnegie Mellon University",
      location: "Remote",
      position: "Visiting Researcher - AirLab",
      period: "July 2025 – May 2026",
      achievements: [
        "Integrated Relative Pose Graph Optimization in ROS2 in C++ using GTSAM Factor Graphs Fixed-Lag Smoother in the IMU Preintegration module of the multi-modal IMU-LiDAR sensor fusion to reduce long term drift in SLAM",
        "Executed trajectory mapping using Livox LiDAR and IMU sensors on the Unitree G1 Humanoid robot, applying a low-pass filter to mitigate IMU bias and enhance mapping accuracy",
        "Developed a multi-modal sensor fusion visual front-end for Visual-Inertial Odometry based on VINS Mono with learned keypoint detection and patch-based optical flow tracking across Monocular, Stereo, and Thermal camera configurations, providing uncertainty-aware measurements for downstream optimization",
        "Built a tightly-coupled VIO back-end with Ceres in C++ using Variance Component Analysis (VCA) to adaptively weight Camera and IMU residuals within a sliding-window Bundle Adjustment framework to dynamically balance sensor contributions under degraded conditions",
        "Evaluated the VIO pipeline on multiple datasets like Euroc, CART, SubT-MRS datasets on challenging and degrading conditions like smoke, dust and low texture environments"
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
        "Integrated ElasticFusion: RGB-D SLAM with C++ to align multi-view point clouds from Intel RealSense D455 cameras,enabling accurate 3D Reconstruction for pipe inspection and defect analysis",
        "Experimented with PointNet-based deep learning models in Python for point cloud classification to enhance complex defect identification, achieving a 30% improvement over traditional 2D vision methods",
        "Implemented YOLO-based object detection to localize drippers in pipe assemblies, enabling precise hole punching",
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
