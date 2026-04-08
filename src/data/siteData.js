import bannerImage from "../assets/images/banner.jpg";
import profileImage from "../assets/images/profile.jpg";
import faviconImage from "../assets/images/favicon.png";
import easyAutoMainImage from "../assets/images/projects/Easy Auto/main-image.png";
import feedpulseMainImage from "../assets/images/projects/Feedpulse/main-image.png";
import flowerGardenMainImage from "../assets/images/projects/Flower Garden/main-image.png";
import greenbasketMainImage from "../assets/images/projects/Greenbasket/main-image.png";
import melodyMastersMainImage from "../assets/images/projects/melody-masters/main-image.png";
import restaurantManagementMainImage from "../assets/images/projects/Restaurant-Management System/main-image.png";
import sithaMithuruMainImage from "../assets/images/projects/SithaMithuru/main-image.png";
import sniperCarPosMainImage from "../assets/images/projects/Sniper car POS/sniper-car-pos-system.jpeg";
import talkGovMainImage from "../assets/images/projects/talkgov government portal/main-image.png";
import dataStructuresCertificateImage from "../assets/images/certificates/data structures & algorithm.jpg";
import frontendCertificateImage from "../assets/images/certificates/FrontEnd Develpment Using Javascript.png";
import introToMlCertificateImage from "../assets/images/certificates/intro to ml.jpg";
import machineLearningCertificateImage from "../assets/images/certificates/machine learning AI & Neural Network.jpeg";
import pythonBeginnersCertificateImage from "../assets/images/certificates/python for beginners.jpg";
import webDesignCertificateImage from "../assets/images/certificates/web design for beginners.jpg";

export const assets = {
  bannerImage,
  profileImage,
  faviconImage,
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Curriculum Vitae", href: "/curriculum-vitae" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" },
];

export const contactInfo = {
  email: "pasindusupun461@gmail.com",
  phone: "(+94) 77 133 8918",
  location: "Malabe, Sri Lanka",
  updatedAt: "Last updated on April 04, 2026",
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/dilminekanayaka", icon: "bi bi-github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dilmin-ekanayake/", icon: "bi bi-linkedin" },
  { label: "Facebook", href: "https://www.facebook.com/dilminekanayaka99/", icon: "bi bi-facebook" },
];

export const connectLinks = [
  { label: "Facebook", href: "https://www.facebook.com/dilminekanayaka99/", icon: "bi bi-facebook" },
  { label: "Instagram", href: "https://www.instagram.com/", icon: "bi bi-instagram" },
  { label: "GitHub", href: "https://github.com/dilminekanayaka", icon: "bi bi-github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dilmin-ekanayake/", icon: "bi bi-linkedin" },
  { label: "Medium", href: "https://medium.com/", icon: "bi bi-medium" },
];

export const skillGroups = {
  "Programming Languages": [
    { label: "Java", icon: "bi bi-cup-hot", color: "#f59e0b" },
    { label: "JavaScript", icon: "bi bi-filetype-js", color: "#facc15" },
    { label: "Python", icon: "bi bi-filetype-py", color: "#60a5fa" },
    { label: "PHP", icon: "bi bi-code-square", color: "#a78bfa" },
  ],
  Frontend: [
    { label: "React", icon: "bi bi-badge-tm", color: "#6ad3ff" },
    { label: "Redux", icon: "bi bi-diagram-3", color: "#8b5cf6" },
    { label: "Tailwind CSS", icon: "bi bi-water", color: "#06b6d4" },
    { label: "Bootstrap", icon: "bi bi-bootstrap", color: "#8b5cf6" },
    { label: "JavaScript", icon: "bi bi-filetype-js", color: "#facc15" },
    { label: "HTML5", icon: "bi bi-filetype-html", color: "#f97316" },
    { label: "CSS3", icon: "bi bi-filetype-css", color: "#3b82f6" },
    { label: "Material UI", icon: "bi bi-grid-1x2", color: "#93c5fd" },
    { label: "Next.js", icon: "bi bi-circle", color: "#d1d5db" },
  ],
  Backend: [
    { label: "Node.js", icon: "bi bi-hexagon", color: "#65a30d" },
    { label: "Django", icon: "bi bi-box", color: "#22c55e" },
    { label: "Spring Boot", icon: "bi bi-record-circle", color: "#84cc16" },
    { label: "REST APIs", icon: "bi bi-plug", color: "#38bdf8" },
    { label: "JWT Auth", icon: "bi bi-shield-lock", color: "#f97316" },
    { label: "Java", icon: "bi bi-cup-hot", color: "#f59e0b" },
    { label: "PHP", icon: "bi bi-code-square", color: "#a78bfa" },
  ],
  Database: [
    { label: "MySQL", icon: "bi bi-database-fill", color: "#60a5fa" },
    { label: "PostgreSQL", icon: "bi bi-database", color: "#3b82f6" },
    { label: "MongoDB", icon: "bi bi-database", color: "#22c55e" },
    { label: "Firestore", icon: "bi bi-fire", color: "#f59e0b" },
    { label: "SQLite", icon: "bi bi-disc", color: "#94a3b8" },
    { label: "Supabase", icon: "bi bi-triangle", color: "#22c55e" },
  ],
  "API & Development Tools": [
    { label: "REST APIs", icon: "bi bi-plug", color: "#38bdf8" },
    { label: "Postman", icon: "bi bi-send-fill", color: "#fb923c" },
    { label: "Git", icon: "bi bi-git", color: "#f97316" },
    { label: "GitHub", icon: "bi bi-github", color: "#ffffff" },
    { label: "Jira", icon: "bi bi-kanban", color: "#3b82f6" },
  ],
  Testing: [
    { label: "Selenium", icon: "bi bi-bug", color: "#84cc16" },
    { label: "JMeter", icon: "bi bi-speedometer2", color: "#ef4444" },
  ],
  "Cloud & DevOps": [
    { label: "AWS EC2", icon: "bi bi-cloud", color: "#f59e0b" },
    { label: "AWS S3", icon: "bi bi-hdd-stack", color: "#f59e0b" },
    { label: "Azure", icon: "bi bi-cloud-fill", color: "#3b82f6" },
    { label: "Docker", icon: "bi bi-box-seam", color: "#38bdf8" },
    { label: "CI/CD", icon: "bi bi-arrow-repeat", color: "#a78bfa" },
  ],
  "Design & CMS": [
    { label: "Figma", icon: "bi bi-palette", color: "#f97316" },
    { label: "Adobe XD", icon: "bi bi-vector-pen", color: "#c084fc" },
    { label: "Photoshop", icon: "bi bi-brush", color: "#38bdf8" },
    { label: "Illustrator", icon: "bi bi-pen", color: "#f59e0b" },
    { label: "WordPress", icon: "bi bi-wordpress", color: "#60a5fa" },
    { label: "Elementor", icon: "bi bi-window-stack", color: "#ec4899" },
    { label: "WooCommerce", icon: "bi bi-cart3", color: "#a855f7" },
  ],
  "AI/ML (Basic Exposure)": [
    { label: "TensorFlow Lite", icon: "bi bi-cpu", color: "#f59e0b" },
    { label: "Neural Networks", icon: "bi bi-diagram-2", color: "#8b5cf6" },
    { label: "Model Validation", icon: "bi bi-check2-circle", color: "#22c55e" },
  ],
};

export const experiences = [
  {
    title: "Webmaster",
    company: "IEEE  CINEC Student Branch",
    period: "Jan 2026 - Present",
    points: [
      "Managed official IEEE CINEC social media platforms, ensuring consistent and engaging content delivery.",
      "Designed promotional materials including event flyers, posters, certificates, and digital assets.",
      "Collaborated with organizing teams to enhance event promotion and student engagement.",
    ],
  },
  {
    title: "Editor",
    company: "TechStrike Club, CINEC Campus",
    period: "Oct 2025 - Present",
    points: [
      "Led editorial planning and content publishing across club platforms.",
      "Coordinated with team members to review and finalize technical articles.",
      "Designed social media creatives and promotional materials for club events.",
    ],
  },
];

const projectTagCatalog = {
  "Next.js": { icon: "bi bi-circle", color: "#d1d5db" },
  React: { icon: "bi bi-badge-tm", color: "#6ad3ff" },
  Typescript: { icon: "bi bi-filetype-tsx", color: "#3b82f6" },
  Express: { icon: "bi bi-circle", color: "#d1d5db" },
  "Express.js": { icon: "bi bi-circle", color: "#d1d5db" },
  MongoDB: { icon: "bi bi-database", color: "#22c55e" },
  Google: { icon: "bi bi-google", color: "#3b82f6" },
  Gemini: { icon: "bi bi-stars", color: "#8b5cf6" },
  AI: { icon: "bi bi-robot", color: "#a855f7" },
  Vite: { icon: "bi bi-lightning-charge", color: "#8b5cf6" },
  "Node.js": { icon: "bi bi-hexagon", color: "#65a30d" },
  Mysql: { icon: "bi bi-database-fill", color: "#60a5fa" },
  MySQL: { icon: "bi bi-database-fill", color: "#60a5fa" },
  Tailwindcss: { icon: "bi bi-water", color: "#06b6d4" },
  TailwindCSS: { icon: "bi bi-water", color: "#06b6d4" },
  Stripe: { icon: "bi bi-credit-card", color: "#7c3aed" },
  JWT: { icon: "bi bi-shield-lock", color: "#f97316" },
  ANPR: { icon: "bi bi-camera-video", color: "#ef4444" },
  Reson8: { icon: "bi bi-soundwave", color: "#06b6d4" },
  "React-native": { icon: "bi bi-phone", color: "#38bdf8" },
  "React-Native": { icon: "bi bi-phone", color: "#38bdf8" },
  postgresql: { icon: "bi bi-database", color: "#3b82f6" },
  PostgreSQL: { icon: "bi bi-database", color: "#3b82f6" },
  sqlite: { icon: "bi bi-disc", color: "#94a3b8" },
  SQLite: { icon: "bi bi-disc", color: "#94a3b8" },
  tflite: { icon: "bi bi-cpu", color: "#f59e0b" },
  firebase: { icon: "bi bi-fire", color: "#f59e0b" },
  AWS: { icon: "bi bi-cloud", color: "#f59e0b" },
  Python: { icon: "bi bi-filetype-py", color: "#60a5fa" },
  Javascript: { icon: "bi bi-filetype-js", color: "#facc15" },
  JavaScript: { icon: "bi bi-filetype-js", color: "#facc15" },
  Django: { icon: "bi bi-box", color: "#22c55e" },
  DRF: { icon: "bi bi-plug", color: "#38bdf8" },
  I18next: { icon: "bi bi-translate", color: "#14b8a6" },
  Axios: { icon: "bi bi-arrow-left-right", color: "#7c3aed" },
  Clerk: { icon: "bi bi-person-badge", color: "#ec4899" },
  "Socket.io": { icon: "bi bi-broadcast", color: "#111827" },
  Supabase: { icon: "bi bi-triangle", color: "#22c55e" },
  "AWS S3": { icon: "bi bi-cloud", color: "#f59e0b" },
  Twilio: { icon: "bi bi-chat-dots", color: "#ef4444" },
  Nodemailer: { icon: "bi bi-envelope", color: "#0ea5e9" },
  php: { icon: "bi bi-code-square", color: "#a78bfa" },
  PHP: { icon: "bi bi-code-square", color: "#a78bfa" },
  html: { icon: "bi bi-filetype-html", color: "#f97316" },
  HTML: { icon: "bi bi-filetype-html", color: "#f97316" },
  HTML5: { icon: "bi bi-filetype-html", color: "#f97316" },
  css: { icon: "bi bi-filetype-css", color: "#3b82f6" },
  CSS: { icon: "bi bi-filetype-css", color: "#3b82f6" },
  CSS3: { icon: "bi bi-filetype-css", color: "#3b82f6" },
  Java: { icon: "bi bi-cup-hot", color: "#f59e0b" },
  Selenium: { icon: "bi bi-bug", color: "#84cc16" },
  Webdriver: { icon: "bi bi-window", color: "#84cc16" },
  TestNG: { icon: "bi bi-check2-circle", color: "#22c55e" },
  Maven: { icon: "bi bi-box-seam", color: "#ef4444" },
  Dart: { icon: "bi bi-triangle", color: "#38bdf8" },
};

function createProjectTag(label) {
  const preset = projectTagCatalog[label] ?? { icon: "bi bi-code-slash", color: "#94a3b8" };
  return { label, ...preset };
}

export const projects = [
  {
    title: "AI-powered Product Feedback System",
    year: "",
    url: "https://github.com/dilminekanayaka/feedpulse-product-feedback-system",
    tags: [
      createProjectTag("Next.js"),
      createProjectTag("React"),
      createProjectTag("Typescript"),
      createProjectTag("Express"),
      createProjectTag("MongoDB"),
      createProjectTag("Google"),
      createProjectTag("Gemini"),
      createProjectTag("AI"),
    ],
    description:
      "FeedPulse is a professional, full-stack product feedback platform designed to streamline how organizations collect, analyze, and manage user feedback. By leveraging the power of Google Gemini AI, FeedPulse automatically categorizes and summarizes incoming feedback, allowing teams to focus on what matters most - building better products.",
    image: feedpulseMainImage,
    button: null,
  },
  {
    title: "SithaMithuru Elder Care System",
    year: "",
    url: "https://github.com/dilminekanayaka/SithaMithuru-Elder-Care-System",
    tags: [
      createProjectTag("React-Native"),
      createProjectTag("Node.js"),
      createProjectTag("Express.js"),
      createProjectTag("PostgreSQL"),
      createProjectTag("SQLite"),
      createProjectTag("tflite"),
      createProjectTag("firebase"),
      createProjectTag("AWS"),
    ],
    description:
      "SithaMithuru is an offline-first mobile application designed to support elderly individuals with emergency assistance, medication management, and well-being monitoring. It features a dual-mode system for elderly users and guardians, including SOS alerts, mood tracking, and risk monitoring. The system integrates two AI models: an emergency keyword detection model and a rule-based evaluation system, ensuring reliable offline functionality with cloud synchronization.",
    image: sithaMithuruMainImage,
    button: null,
  },
  {
    title: "Government Services Centralized Portal",
    year: "",
    url: "https://github.com/dilminekanayaka/gov-services-centralized-portal",
    tags: [
      createProjectTag("Python"),
      createProjectTag("React"),
      createProjectTag("Vite"),
      createProjectTag("JavaScript"),
      createProjectTag("Django"),
      createProjectTag("DRF"),
      createProjectTag("PostgreSQL"),
      createProjectTag("I18next"),
      createProjectTag("Axios"),
    ],
    description:
      "TalkGov is a full-stack web platform designed to make Sri Lankan government services easier to discover, understand, and prepare for. The system brings together service information, office locations, document checklists, contact support, and a guided assistant experience in one place. The project is built with a React frontend and a Django REST backend, with PostgreSQL as the primary database.",
    image: talkGovMainImage,
    button: null,
  },
  {
    title: "EasyAuto Car Selling & Buying Mobile Application",
    year: "",
    url: "https://github.com/Pasindumi/Easy_Auto_Application_Frontend",
    tags: [
      createProjectTag("React-Native"),
      createProjectTag("Clerk"),
      createProjectTag("Socket.io"),
      createProjectTag("I18next"),
      createProjectTag("Node.js"),
      createProjectTag("Supabase"),
      createProjectTag("AWS S3"),
      createProjectTag("Twilio"),
      createProjectTag("Nodemailer"),
    ],
    description:
      "EasyAuto is a real-world client project developed as a mobile marketplace for buying and selling vehicles in Sri Lanka. The application enables users to explore listings, compare vehicles side-by-side, and make informed purchasing decisions. It also includes a dealer and customer badge system along with promotional advertising packages to enhance visibility and user engagement.",
    image: easyAutoMainImage,
    button: null,
  },
  {
    title: "Melody Masters Online Store",
    year: "",
    url: "https://github.com/dilminekanayaka/melody-masters-online-store",
    tags: [
      createProjectTag("PHP"),
      createProjectTag("MySQL"),
      createProjectTag("HTML5"),
      createProjectTag("CSS3"),
      createProjectTag("JavaScript"),
      createProjectTag("Supabase"),
    ],
    description:
      "Melody Masters is a fully-featured e-commerce web application built for a professional music instrument store. The platform supports both physical and digital products, a complete admin dashboard with live activity tracking, a customer portal with order history, and a role-based access control system.",
    image: melodyMastersMainImage,
    button: null,
  },
  {
    title: "Bite. Hotel Management System",
    year: "",
    url: "https://github.com/dilminekanayaka/Restaurant-Management-System",
    tags: [
      createProjectTag("PHP"),
      createProjectTag("MySQL"),
      createProjectTag("HTML5"),
      createProjectTag("CSS3"),
      createProjectTag("JavaScript"),
    ],
    description:
      "This project is a full restaurant website and management panel built with Core PHP. It lets customers browse food categories, search the menu, view featured items, and place orders, while admins can manage the main business data from a dedicated dashboard.",
    image: restaurantManagementMainImage,
    button: null,
  },
  {
    title: "Flower Garden Hotel Reservation System",
    year: "",
    url: "https://github.com/dilminekanayaka/Flower-Garden-hotel-reservation-system-y2s2-software-testing-assignment",
    tags: [
      createProjectTag("PHP"),
      createProjectTag("MySQL"),
      createProjectTag("HTML5"),
      createProjectTag("CSS3"),
      createProjectTag("JavaScript"),
      createProjectTag("Java"),
      createProjectTag("Selenium"),
      createProjectTag("Webdriver"),
      createProjectTag("TestNG"),
      createProjectTag("Maven"),
    ],
    description:
      "A PHP and MySQL based hotel reservation system developed for a Year 2 Semester 2 Software Testing assignment, featuring booking management and Selenium test automation.",
    image: flowerGardenMainImage,
    button: null,
  },
  {
    title: "Green Basket Farm-to-Home Marketplace",
    year: "",
    url: "https://github.com/dilminekanayaka/GreenBasket-mobileApp-flutter-supabase",
    tags: [
      createProjectTag("Dart"),
      createProjectTag("Supabase"),
    ],
    description:
      "GreenBasket is a full-stack mobile application designed to bridge the gap between local farmers and buyers. It provides a direct-to-consumer marketplace for fresh, organic, and locally-grown produce.",
    image: greenbasketMainImage,
    button: null,
  },
  {
    title: "Sniper Car POS System",
    year: "",
    url: "https://github.com/dilminekanayaka/Sniper-Car-Care-POS-System",
    tags: [
      createProjectTag("React"),
      createProjectTag("Vite"),
      createProjectTag("Node.js"),
      createProjectTag("Express"),
      createProjectTag("MySQL"),
      createProjectTag("Tailwindcss"),
      createProjectTag("Stripe"),
      createProjectTag("JWT"),
      createProjectTag("ANPR"),
      createProjectTag("Reson8"),
    ],
    description:
      "A completed enterprise-grade digital operations platform for a Dubai-based car service business, built to unify vehicle intake, service management, customer engagement, POS billing, online payments, loyalty rewards, and management reporting in one connected ecosystem.",
    image: sniperCarPosMainImage,
    button: null,
  },
];

export const certificates = [
  {
    title: "Data Structures and Algorithms",
    year: "2026",
    url: "https://www.udemy.com/certificate/UC-41131fb4-2445-441f-9878-3f3370345fe7/",
    tags: ["Arrays", "Linked Lists", "Trees", "Graphs", "Sorting", "Searching", "Recursion", "Big-O Analysis"],
    description:
      "Gained strong knowledge in data structures, algorithms, problem solving, and optimization techniques.",
    image: dataStructuresCertificateImage,
    displayText: "https://www.udemy.com",
  },
  {
    title: "Intro to Machine Learning",
    year: "2026",
    url: "https://www.kaggle.com/learn/certification/dilminekanayake/intro-to-machine-learning",
    tags: ["Data Structures", "Python", "Algorithms", "OOP", "Big O Notation", "Recursion"],
    description:
      "Learned about data exploration, model building, validation, and ensemble methods like Random Forest.",
    image: introToMlCertificateImage,
  },
  {
    title: "Machine Learning, AI & Neural Networks",
    year: "2026",
    url: "https://www.udemy.com/certificate/UC-be893600-a4fa-4f94-909a-b1abfe59ce0f/",
    tags: ["Python", "ML", "Deep Analysis", "Deep Learning", "Artificial Intelligence"],
    description:
      "Built practical understanding of data preprocessing, model evaluation, and machine learning workflows.",
    image: machineLearningCertificateImage,
  },
  {
    title: "Python for Beginners",
    year: "2025",
    url: "https://open.uom.lk/lms/mod/customcert/view.php?id=675&downloadown=1",
    tags: ["Python"],
    description: "Covered Python fundamentals and logical programming",
    image: pythonBeginnersCertificateImage,
  },
  {
    title: "Front-End Web Development using JavaScript and React.js",
    year: "2025",
    url: "https://www.cert.devtown.in/verify/1x6BUR",
    tags: ["Javascript", "React.js"],
    description: "Covered Python fundamentals and logical programming",
    image: frontendCertificateImage,
  },
  {
    title: "Web Design for Beginners",
    year: "2024",
    url: "https://open.uom.lk/lms/mod/customcert/view.php?id=697&downloadown=1",
    tags: ["HTML3", "CSS3", "Javascript"],
    description: "Covered Python fundamentals and logical programming",
    image: webDesignCertificateImage,
  },
];
