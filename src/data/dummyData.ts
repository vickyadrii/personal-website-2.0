// Import assets social media
// import instagram from "../assets/icons/social-media/instagram.svg";
import medium from "../assets/icons/social-media/medium.webp";
import linkedin from "../assets/icons/social-media/linkedin.webp";
import github from "../assets/icons/social-media/github.webp";
import email from "../assets/icons/social-media/email.webp";

// Import assets projects and skills
import villageWeb from "../assets/images/village-web.webp";
import hmtiUntad from "../assets/images/hmti-untad.webp";
import hrev from "../assets/images/hrev.webp";
import snResidence from "../assets/images/sn-residence.webp";

import logoVillageWebsite from "../assets/icons/logo-village-website.png";
import logoHmtiUntad from "../assets/icons/logo-hmti-untad.png";
import logoHrev from "../assets/icons/logo-hrev.png";
import logoSnResidence from "../assets/icons/logo-sn-residence.png";

import nextjs from "../assets/icons/tech-stack/nextjs.svg";
import react from "../assets/icons/tech-stack/react.svg";
import typescript from "../assets/icons/tech-stack/typescript.svg";
import javascript from "../assets/icons/tech-stack/javascript.svg";
import redux from "../assets/icons/tech-stack/redux.svg";
import graphql from "../assets/icons/tech-stack/graphql.svg";
import nodejs from "../assets/icons/tech-stack/nodejs.svg";
import tailwind from "../assets/icons/tech-stack/tailwind.svg";
import antdesign from "../assets/icons/tech-stack/antdesign.svg";
import mongodb from "../assets/icons/tech-stack/mongodb.svg";
import postgresql from "../assets/icons/tech-stack/postgresql.svg";
import firebase from "../assets/icons/tech-stack/firebase.svg";
import vite from "../assets/icons/tech-stack/vite.svg";

// import assets experience
import eduqat from "../assets/icons/company-logo/eduqat.svg";
import kalla from "../assets/icons/company-logo/kalla.svg";
import kodingna from "../assets/icons/company-logo/kodingna.svg";
import bangkit from "../assets/icons/company-logo/bangkit.svg";

import pattern1 from "../assets/images/patterns/pattern1.svg";
import pattern2 from "../assets/images/patterns/pattern2.svg";
import pattern3 from "../assets/images/patterns/pattern3.svg";
import pattern4 from "../assets/images/patterns/pattern4.svg";

export const dataNavbar: Navbar[] = [
  {
    id: 0,
    navigate: "Profile",
    navigate_url: "profile",
    offset: -100,
  },
  {
    id: 1,
    navigate: "Projects",
    navigate_url: "projects",
    offset: -105,
  },
  {
    id: 2,
    navigate: "Experience",
    navigate_url: "experience",
    offset: -50,
  },
  {
    id: 3,
    navigate: "Contact",
    navigate_url: "contact",
    offset: 0,
  },
];

export const dataLogoSocialMedia: LogoSocialMedia[] = [
  {
    id: 0,
    logo: linkedin,
    navigate: "https://linkedin.com/in/vickyadrii",
  },
  {
    id: 1,
    logo: medium,
    navigate: "https://medium.com/@vickyadri29",
  },
  {
    id: 2,
    logo: github,
    navigate: "https://github.com/vickyadrii",
  },
  {
    id: 3,
    logo: email,
    navigate: "mailto:vickyadri103@gmail.com",
  },
];

export const dataProjectss: Projects[] = [
  {
    id: 0,
    img_url: villageWeb,
    logo: logoVillageWebsite,
    type: "App Platform •",
    tech_stack_logo: [react, vite, tailwind],
    navigate_url: "https://desa.kembalikedesa.id/?code=720701",
  },
  {
    id: 1,
    img_url: hrev,
    logo: logoHrev,
    type: "Company Profile •",
    tech_stack_logo: [react, typescript, vite, tailwind],
    navigate_url: "https://halohrev.com",
  },
  {
    id: 2,
    img_url: hmtiUntad,
    logo: logoHmtiUntad,
    type: "Landing Page •",
    tech_stack_logo: [react, typescript, vite, tailwind],
    navigate_url: "https://hmtiuntad.vercel.app/",
  },
  {
    id: 3,
    img_url: snResidence,
    logo: logoSnResidence,
    type: "Web App •",
    tech_stack_logo: [react, tailwind],
    navigate_url: "https://sn-residence-dev.vercel.app",
  },
];

export const dataSkills: string[] = [
  nextjs,
  react,
  typescript,
  javascript,
  redux,
  graphql,
  nodejs,
  tailwind,
  antdesign,
  mongodb,
  postgresql,
  firebase,
];

export const dataExperience: Experience[] = [
  {
    id: 0,
    logo_url: eduqat,
    pattern: pattern1,
    name: "Eduqat",
    description: "@Maubelajarapa",
    date: "Jan 2023 - Present",
    position: "Frontend Engineer",
    responsibilites: [
      "Develop an assignments feature for educators and students that allows educators to create assignment materials, publish scores, view student attachments and provide feedback to their students. On the other hand, students can upload attachments and await feedback from their educators.",
      "Develop a drip course feature that enables educators to manage access to materials for their students. When the drip course is enabled, students can access materials after enrolling or upon completing the previous material.",
      "Collaborate with the UI/UX designer team to develop the web into code and work with backend engineer to integrate the functionality and consume APIs.",
      "Participate with the application testing team (Quality Assurance) to ensure that the platform meets the company’s standards for performance and reliability.",
      "Implement clean code, testable code, project flexibility and agile methodologies.",
      "Build, maintain and improve the Eduqat’s platform using Next.js.",
    ],
    first_color: "#0C3342",
    second_color: "#054C5B",
    desc_color: "#B6EDF8",
    position_color: "#002D3E",
    border_color: "#329CA9",
  },
  {
    id: 1,
    logo_url: kalla,
    pattern: pattern2,
    name: "PT Hadji Kalla",
    description: "@kallagroup",
    date: "Aug 2022 - Dec 2022",
    position: "Web Developer",
    responsibilites: [
      "Develop a WhatsApp gateway that enables the company to broadcast messages to customers using Next.js, Tailwind, and Baileys.",
      "Collaborate with backend developers to integrate the functionality and consume APIs.",
      "Build a web app to ensure the web will be responsive user interface and user-friendly.",
    ],
    first_color: "#01271C",
    second_color: "#08573E",
    desc_color: "#C6F8B1",
    position_color: "#033424",
    border_color: "#10AA7A",
  },
  {
    id: 2,
    logo_url: kodingna,
    pattern: pattern3,
    name: "Kodingna",
    description: "@Halokodingna",
    date: "Jun 2022 - Sep 2022",
    position: "Frontend Web Developer",
    responsibilites: [
      "Collaborate with the team to understand project requirements and design specifications for the landing page.",
      "Write clean and maintainable code following best practices and coding standards.",
      "Develop the landing page using React and Tailwind.",
    ],
    first_color: "#020C12",
    second_color: "#022E4A",
    desc_color: "#BEE7FB",
    position_color: "#021826",
    border_color: "#1994A4",
  },
  {
    id: 3,
    logo_url: bangkit,
    pattern: pattern4,
    name: "Bangkit Academy",
    description: "by Google, GoTo, Traveloka",
    date: "Feb 2022 - Jul 2022",
    position: "Cloud Computing Learning Path",
    responsibilites: [
      "Build and deploy RESTFul API to our team. Deploy to Cloud Function and can be used or consumed by Mobile Development Path.",
      "Deploy Flask App from Machine Learning Path using Docker and then deploy to Cloud Run.",
      "Develop our website for our team capstone project.",
      "Learn about cloud fundamentals and Softskills.",
    ],
    first_color: "#2E0D17",
    second_color: "#390916",
    desc_color: "#F9B6BE",
    position_color: "#18040A",
    border_color: "#7D2038",
  },
];
