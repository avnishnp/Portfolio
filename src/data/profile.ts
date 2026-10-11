// Single source of truth for portfolio content (mirrors public/docs/CV.pdf).
// Wrap a term in **double asterisks** to highlight it in experience bullets.

export const profile = {
  name: "Avnish Patel",
  role: "Robotics Software Engineer",
  location: "Boston, MA",
  email: "avnishnp@outlook.com",
  linkedin: "https://www.linkedin.com/in/avnish-patel07/",
  github: "https://github.com/avnishnp",
  resume: "/docs/CV.pdf",
  tagline:
    "I build perception, state estimation and robot learning systems that let robots see, localize and act — from surgical robots in the OR to aerial robots and humanoids in the field.",
  roles: [
    "SLAM & State Estimation",
    "3D Computer Vision",
    "Robot Learning",
    "Surgical Robotics",
  ],
};

export const stats = [
  { value: "4+", label: "years shipping vision & robotics in industry" },
  { value: "CVPR", label: "2024 publication · IROS 2026 workshop" },
  { value: "3", label: "robot platforms: Hugo surgical robot, Unitree G1 humanoid, UR3 arm" },
  { value: "VLA + RL", label: "policies trained in NVIDIA Isaac Lab" },
];

export const focusAreas = [
  {
    title: "SLAM & State Estimation",
    body: "Factor graphs, bundle adjustment and sensor fusion across stereo, LiDAR, thermal and IMU — built to hold up in smoke, darkness and the OR.",
    tools: ["GTSAM", "Ceres", "ORB-SLAM3", "DROID-SLAM"],
  },
  {
    title: "3D Perception",
    body: "Dense depth, 6D pose, multi-view reconstruction and digital twins from real sensor data.",
    tools: ["MASt3R", "LightGlue", "Depth Anything", "Open3D"],
  },
  {
    title: "Robot Learning",
    body: "Teleoperation data collection, VLA policies and reinforcement learning in simulation for surgical manipulation.",
    tools: ["Isaac Sim", "Isaac Lab", "π0.5 VLA", "PPO"],
  },
  {
    title: "Real-time Deployment",
    body: "C++ pipelines, custom CUDA kernels and TensorRT engines that run on the robot, not just in a notebook.",
    tools: ["C++", "CUDA", "TensorRT", "Holoscan"],
  },
];

export type BulletGroup = { title: string; bullets: string[] };

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  metrics?: { value: string; label: string }[];
  groups: BulletGroup[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "Medtronic",
    role: "Robotics Software Engineer",
    location: "Boston, MA",
    period: "Jan 2024 – Present",
    current: true,
    summary:
      "Perception, state estimation and robot learning for the Hugo™ robotic-assisted surgery platform.",
    metrics: [
      { value: "10×", label: "faster annotation" },
      { value: "1 s", label: "inference latency" },
      { value: "10k", label: "images segmented" },
    ],
    groups: [
      {
        title: "SLAM & 3D Reconstruction",
        bullets: [
          "Built an end-to-end **SLAM** pipeline using stereo-rectified, semantically segmented images in deep-learning based **DROID-SLAM** for dense depth estimation in surgical videos and scene understanding of anatomy and surgical tools",
          "Optimized camera trajectory using **GTSAM factor graph** non-linear optimization and refined 3D reconstruction with **Bundle Adjustment** and multi-view geometry, using **LightGlue** feature matching and an Open3D offline rendering pipeline",
          "Programmed a stereo-vision and stereo-inertial localization system using **ORB-SLAM3** and calibrated RealSense D455 cameras, enabling accurate ego-motion tracking and mapping of surgical cart trajectories",
        ],
      },
      {
        title: "Robot Learning & Simulation",
        bullets: [
          "Developed an **Oculus Quest** teleoperation pipeline in **NVIDIA Isaac Sim / Isaac Lab** for the Hugo surgical robot and trained a **π0.5 Vision-Language-Action (VLA)** model for autonomous tumor point-touching",
          "Trained a **PPO** reinforcement learning policy in Isaac Lab for automated surgical tumor point placement, leveraging differential **inverse kinematics** for precise and safe motion control",
        ],
      },
      {
        title: "State Estimation & Instrument Tracking",
        bullets: [
          "Designed a **pose graph** pipeline in GTSAM fusing robot kinematics with TensorRT **YOLOv8** keypoints to reduce drift and improve instrument tracking in out-of-view scenarios",
          "Engineered an **M3T** instrument tracking and articulation framework in **C++** for real-time **6D pose estimation**",
          "Developed a real-time ground-truth pose pipeline using **OptiTrack** motion capture and robot kinematics to reconstruct and validate surgical robot digital twins",
          "Automated endoscope **stereo camera calibration** using Zhang's method on a ChArUco board driven by a **UR3** robot arm",
        ],
      },
      {
        title: "Digital Twin & Safety",
        bullets: [
          "Engineered an arm **collision avoidance** system using Trimesh and PyTorch volumetric **Signed Distance Fields** from the robot URDF and kinematics, streamed over **RTI DDS** publish-subscribe to render a live digital twin",
          "Built a **MASt3R SfM** registration pipeline to create a 3D digital twin of surgical robot carts, using GTSAM for multi-camera scale correction and pose optimization, and SDFs for collision avoidance",
        ],
      },
      {
        title: "GPU Perception & Deployment",
        bullets: [
          "Deployed a **C++** 3D registration pipeline on **NVIDIA Holoscan** using Fast Foundation Stereo and UniMatch, with custom **CUDA** kernels for GPU acceleration",
          "Developed a monocular depth pipeline with **Depth Anything** to estimate real-time distances between surgical instrument tips for spatial awareness",
          "Segmented hernias in 10,000 medical images using a **Swin Transformer** with **PyTorch DDP** multi-GPU training, tracked with MLflow and optimized with ONNX / TensorRT",
          "Wrapped UniMatch **optical flow** as a FastAPI service and deployed to **ONNX / TensorRT**, cutting medical frame annotation time **10×** at 1-second latency",
        ],
      },
    ],
    stack: ["C++", "Python", "CUDA", "GTSAM", "Isaac Lab", "TensorRT", "Holoscan", "RTI DDS", "PyTorch"],
  },
  {
    company: "Carnegie Mellon University · AirLab",
    role: "Visiting Researcher",
    location: "Remote",
    period: "Jul 2025 – Aug 2026",
    summary:
      "Robust multi-modal odometry and SLAM for aerial robots operating in degraded visual environments.",
    metrics: [
      { value: "27%", label: "lower mean fused error" },
      { value: "4", label: "benchmark datasets" },
    ],
    groups: [
      {
        title: "Multi-Spectral Odometry (MSO)",
        bullets: [
          "Built a **Multi-Spectral Odometry** system with RGB / thermal feature tracking and a sliding-window **Bundle Adjustment** backend in **Ceres**, adapting sensor influence across smoke, darkness and low-texture scenes",
          "Developed an **Active Bundle Adjustment** framework that jointly optimizes sensor reliability amplitudes and the visual-inertial state for RGB, thermal and IMU measurements",
          "Evaluated MSO on **SubT-MRS, CART, EuRoC and Wildfire** datasets, achieving a **27% reduction** in mean fused error under challenging visual conditions",
        ],
      },
      {
        title: "LiDAR-Inertial SLAM on a Humanoid",
        bullets: [
          "Ran **LiDAR-inertial SLAM** and state estimation with Livox LiDAR and IMU on the **Unitree G1** humanoid, applying a low-pass filter to mitigate IMU bias",
          "Integrated relative **pose graph optimization** in **ROS2 / C++** using a GTSAM fixed-lag smoother in the IMU preintegration module to reduce long-term drift",
        ],
      },
    ],
    stack: ["C++", "ROS2", "GTSAM", "Ceres", "Livox", "Unitree G1", "Thermal"],
  },
  {
    company: "Kisan Drip Irrigation Ltd.",
    role: "Artificial Intelligence Engineer",
    location: "India",
    period: "Aug 2020 – Aug 2022",
    summary: "3D vision for automated inspection in pipe manufacturing.",
    metrics: [{ value: "30%", label: "better defect detection vs 2D" }],
    groups: [
      {
        title: "3D Inspection",
        bullets: [
          "Integrated **ElasticFusion** RGB-D SLAM in **C++** to align multi-view point clouds from Intel RealSense D455 cameras for 3D reconstruction in pipe inspection",
          "Experimented with **PointNet** point cloud classification, improving complex defect identification by **30%** over traditional 2D vision",
          "Deployed the **YOLO** pipeline as a Docker-containerized **FastAPI** service integrated into manufacturing workflows",
        ],
      },
    ],
    stack: ["C++", "Python", "ElasticFusion", "PointNet", "RealSense", "Docker"],
  },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  summary: string;
  links: { label: string; href: string }[];
};

export const publications: Publication[] = [
  {
    title: "MSO: Uncertainty-Aware Multi-Spectral Inertial Odometry for Extreme Environments",
    authors: "S. Zhao, A. Patel",
    venue: "IROS Workshop",
    year: "2026",
    summary:
      "RGB-thermal-inertial odometry that learns how much to trust each sensor, staying accurate through smoke, darkness and low texture.",
    links: [
      { label: "Workshop", href: "https://jonasfrey96.github.io/data_in_field_robotics/" },
      { label: "Website", href: "https://karanbalakumar.github.io/pro-vio/" },
    ],
  },
  {
    title: "Logarithmic Lenses: Exploring Log RGB Data for Image Classification",
    authors: "B. Maxwell, A. Patel",
    venue: "CVPR",
    year: "2024",
    summary:
      "Showed that raw log-RGB inputs make deep networks like ResNet-18 more robust to intensity and color variation; co-developed the RAW10 dataset (10k DNG + JPG pairs).",
    links: [
      {
        label: "Paper",
        href: "https://openaccess.thecvf.com/content/CVPR2024/papers/Maxwell_Logarithmic_Lenses_Exploring_Log_RGB_Data_for_Image_Classification_CVPR_2024_paper.pdf",
      },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  category: string;
  tags: string[];
  github: string;
};

export const projects: Project[] = [
  {
    title: "Structure from Motion with GTSAM",
    description:
      "SfM pipeline from scratch: triangulates 2D correspondences into 3D with classical geometry, then refines cameras and structure with GTSAM bundle adjustment.",
    category: "SLAM & 3D Vision",
    tags: ["Python", "SfM", "GTSAM", "Bundle Adjustment"],
    github: "https://github.com/avnishnp/Computer_Vision/tree/main/3D_Reconstruction",
  },
  {
    title: "Monocular Visual SLAM",
    description: "A visual SLAM system built on ORB features with Pangolin visualization of the map and trajectory.",
    category: "SLAM & 3D Vision",
    tags: ["Python", "ORB", "Monocular SLAM", "Pangolin"],
    github: "https://github.com/avnishnp/Computer_Vision/tree/main/monocular_slam",
  },
  {
    title: "Visual SLAM in CARLA",
    description: "Monocular visual SLAM running against the CARLA autonomous-driving simulator.",
    category: "SLAM & 3D Vision",
    tags: ["Python", "ORB", "CARLA"],
    github: "https://github.com/avnishnp/Computer_Vision/tree/main/CARLA_monocular_slam",
  },
  {
    title: "Underwater Image Registration & Odometry",
    description:
      "Registers underwater image sequences with SIFT features and RANSAC homographies, then estimates odometry with GTSAM.",
    category: "SLAM & 3D Vision",
    tags: ["Python", "SIFT", "RANSAC", "GTSAM"],
    github:
      "https://github.com/avnishnp/Robot-Sensing-Navigation/tree/main/Image%20Registration%20and%20Odometry%20in%20Underwater",
  },
  {
    title: "Neural Radiance Fields",
    description:
      "NeRF on the Lego scene: learns a volumetric scene representation with positional encoding and renders novel views.",
    category: "SLAM & 3D Vision",
    tags: ["PyTorch", "Volume Rendering", "Novel View Synthesis"],
    github: "https://github.com/avnishnp/Computer_Vision/tree/main/Neural%20Radiance%20Fields",
  },
  {
    title: "LiDAR–Camera Early Fusion",
    description:
      "Projects LiDAR point clouds into camera frames and fuses them with YOLOv8 detections for obstacle detection and distance estimation.",
    category: "Sensor Fusion",
    tags: ["PyTorch", "YOLOv8", "LiDAR", "Calibration"],
    github: "https://github.com/avnishnp/Computer_Vision/tree/main/Early_Sensor_Fusion",
  },
  {
    title: "Late Fusion with EKF Tracking",
    description:
      "3D vehicle detection on Waymo LiDAR + camera with FPN-ResNet, multi-object tracking with an Extended Kalman Filter, and a globally consistent LiDAR map.",
    category: "Sensor Fusion",
    tags: ["PyTorch", "EKF", "Waymo", "Tracking"],
    github: "https://github.com/avnishnp/Computer_Vision/tree/main/Late_Fusion_EKF",
  },
  {
    title: "CUDA Programming",
    description: "Hand-written CUDA kernels for core algorithms, from convolutions to Flash Attention.",
    category: "GPU / CUDA",
    tags: ["CUDA", "Flash Attention", "Optimization"],
    github: "https://github.com/avnishnp/Machine_learning/tree/main/CUDA",
  },
];

export const skillGroups = [
  { title: "Languages", skills: ["C++", "Python", "CUDA"] },
  {
    title: "SLAM & State Estimation",
    skills: ["GTSAM", "Ceres", "Factor Graphs", "Bundle Adjustment", "IMU Preintegration", "ORB-SLAM3", "DROID-SLAM", "LiDAR-Inertial SLAM"],
  },
  {
    title: "3D Vision & Perception",
    skills: ["MASt3R", "LightGlue", "Depth Anything", "Foundation Stereo", "UniMatch", "YOLOv8", "Swin Transformer", "6D Pose (M3T)", "Open3D", "OpenCV"],
  },
  {
    title: "Robot Learning & Simulation",
    skills: ["NVIDIA Isaac Sim", "Isaac Lab", "VLA (π0.5)", "PPO", "Teleoperation", "Inverse Kinematics", "URDF", "CARLA"],
  },
  {
    title: "Robots, Sensors & Middleware",
    skills: ["ROS2", "RTI DDS", "Unitree G1", "UR3", "Livox LiDAR", "RealSense D455", "Thermal Cameras", "OptiTrack"],
  },
  {
    title: "Deployment & MLOps",
    skills: ["TensorRT", "ONNX", "NVIDIA Holoscan", "PyTorch DDP", "MLflow", "FastAPI", "Docker", "AWS S3"],
  },
];

export const education = {
  school: "Northeastern University",
  degree: "M.S. in Robotics",
  specialization: "Specialization in Computer Vision",
  location: "Boston, MA",
  period: "Sep 2022 – Dec 2024",
  gpa: "3.6 / 4.0",
  coursework: ["Robotics Sensing & Navigation", "Advanced Computer Vision", "Autonomous Field Robotics"],
  research: "Log-RGB image classification research → CVPR 2024",
};
