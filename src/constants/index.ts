// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  hiremind,
  prismiq,
  youtube,
  linkedin,
  twitter,
  github,
  instagram,
  python,
  opencv,
  tensorflow,
  powerbi,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "projects",
    title: "Projects",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "resume",
    title: "Resume",
    link: "/resume.pdf",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "AIML Engineer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
] as const;

const emptyPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

// Technologies
export const TECHNOLOGIES = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
  {
    name: "Empty 5",
    icon: emptyPlaceholder,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Empty 6",
    icon: emptyPlaceholder,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Hackathons & Certifications
export const HACKATHONS_CERTIFICATIONS = [
  {
    title: "State-Level 24-Hour Hackathon",
    organization: "State Technical Board",
    date: "September 2024",
    description:
      "Participated in a state-level hackathon focused on solving real-world problems using AI and software development. Collaborated with a team to build an innovative solution and present it before industry experts.",
    status: "Participant",
    certificate_link: "https://example.com/certificate",
    project_link: "https://github.com/Bhavesh1411/Hiremind-AI",
    icon_type: "hackathon",
  },
  {
    title: "Deep Learning Specialization",
    organization: "DeepLearning.AI",
    date: "December 2024",
    description:
      "Completed a comprehensive series of courses covering neural networks, deep learning, hyperparameter tuning, convolutional networks, and sequence models. Built and trained various models using TensorFlow.",
    status: "Certified",
    certificate_link: "https://example.com/certificate",
    project_link: "",
    icon_type: "certification",
  },
  {
    title: "Smart India Hackathon",
    organization: "Ministry of Education, Govt. of India",
    date: "November 2024",
    description:
      "Selected as a finalist to compete in a prestigious national-level hackathon. Developed a digital prototype for a government problem statement addressing critical issues in resource management.",
    status: "Finalist",
    certificate_link: "",
    project_link: "https://github.com/Bhavesh1411/PrismIQ",
    icon_type: "hackathon",
  },
  {
    title: "Python for Data Science",
    organization: "NPTEL (IIT Madras)",
    date: "April 2024",
    description:
      "Earned a certificate in Python for Data Science, covering scientific libraries (NumPy, Pandas, SciPy, Matplotlib), statistical analysis, and machine learning basics with Scikit-Learn.",
    status: "Certified",
    certificate_link: "https://example.com/certificate",
    project_link: "https://github.com/Bhavesh1411/Autism-Spectrum-Disorder-Mini-Project",
    icon_type: "certification",
  },
] as const;


// Projects
export const PROJECTS = [
  {
    name: "HireMind AI",
    description:
      "An AI-powered recruitment platform that helps organizations streamline hiring through intelligent resume screening, candidate ranking, skill assessment, interview analysis, and automated recruitment workflows. The platform enables recruiters to identify the best candidates efficiently using AI-driven insights and data analytics.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
      {
        name: "MachineLearning",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
    ],
    image: hiremind,
    source_code_link: "https://github.com/Bhavesh1411/Hiremind-AI",
    live_site_link: "",
  },
  {
    name: "PrismIQ",
    description:
      "PrismIQ is a next-generation data analytics and business intelligence platform that transforms complex datasets into actionable insights through AI-powered analytics, predictive modeling, interactive dashboards, and real-time data processing. The platform enables businesses to uncover trends, monitor KPIs, detect anomalies, and make faster data-driven decisions using advanced visualization and machine learning techniques.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Polars",
        color: "green-text-gradient",
      },
      {
        name: "DuckDB",
        color: "pink-text-gradient",
      },
      {
        name: "PySpark",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "ApacheAirflow",
        color: "pink-text-gradient",
      },
      {
        name: "Streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "Plotly",
        color: "green-text-gradient",
      },
      {
        name: "PowerBI",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
      {
        name: "MachineLearning",
        color: "green-text-gradient",
      },
    ],
    image: prismiq,
    source_code_link: "https://github.com/Bhavesh1411/PrismIQ",
    live_site_link: "",
  },
  {
    name: "ASD Insight",
    description:
      "ASD Insight is an AI-powered screening and assessment platform designed to support the early identification of Autism Spectrum Disorder (ASD) through behavioral pattern analysis, questionnaire-based evaluation, and machine learning-driven risk assessment. The platform assists parents, educators, and healthcare professionals by providing data-backed insights, visual reports, and preliminary screening results to enable timely intervention and support.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MachineLearning",
        color: "green-text-gradient",
      },
      {
        name: "ScikitLearn",
        color: "pink-text-gradient",
      },
      {
        name: "Pandas",
        color: "blue-text-gradient",
      },
      {
        name: "NumPy",
        color: "green-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/Bhavesh1411/Autism-Spectrum-Disorder-Mini-Project",
    live_site_link: "",
  },
  {
    name: "Coming Soon",
    description: "New project will be added here.",
    tags: [],
    image: "",
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Coming Soon",
    description: "New project will be added here.",
    tags: [],
    image: "",
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Coming Soon",
    description: "New project will be added here.",
    tags: [],
    image: "",
    source_code_link: "",
    live_site_link: "",
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/btwitsbhavesh_14/?__pwa=1#",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Bhavesh1411",
  },
] as const;
