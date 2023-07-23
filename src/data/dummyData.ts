// Import assets social media
import instagram from "/icons/social-media/instagram.svg";
import medium from "/icons/social-media/medium.svg";
import linkedin from "/icons/social-media/linkedin.svg";
import github from "/icons/social-media/github.svg";
import email from "/icons/social-media/email.svg";

// Import assets projects and skills
import badonorDarah from "/images/badonordarah.png";
import hrev from "/images/hrev.png";
import impactPalu from "/images/impact-palu.png";
import snResidence from "/images/sn-residence.png";

import logoBadonorDarah from "/icons/logo-badonordarah.svg";
import logoHrev from "/icons/logo-hrev.svg";
import logoimpactPalu from "/icons/logo-impact-palu.svg";
import logoSnResidence from "/icons/logo-sn-residence.svg";

import nextjs from "/icons/tech-stack/nextjs.svg";
import nextjsDark from "/icons/tech-stack/nextjs-dark.svg";
import react from "/icons/tech-stack/react.svg";
import typescript from "/icons/tech-stack/typescript.svg";
import javascript from "/icons/tech-stack/javascript.svg";
import redux from "/icons/tech-stack/redux.svg";
import graphql from "/icons/tech-stack/graphql.svg";
import nodejs from "/icons/tech-stack/nodejs.svg";
import tailwind from "/icons/tech-stack/tailwind.svg";
import antdesign from "/icons/tech-stack/antdesign.svg";
import mongodb from "/icons/tech-stack/mongodb.svg";
import postgresql from "/icons/tech-stack/postgresql.svg";
import firebase from "/icons/tech-stack/firebase.svg";
import vite from "/icons/tech-stack/vite.svg";
import express from "/icons/tech-stack/express.svg";

// import assets experience
import eduqat from "/icons/company-logo/eduqat.svg";
import kalla from "/icons/company-logo/kalla.svg";
import kodingna from "/icons/company-logo/kodingna.svg";
import bangkit from "/icons/company-logo/bangkit.svg";

import pattern1 from "/images/patterns/pattern1.svg";
import pattern2 from "/images/patterns/pattern2.svg";
import pattern3 from "/images/patterns/pattern3.svg";
import pattern4 from "/images/patterns/pattern4.svg";

export const dataNavbar: Navbar[] = [
  {
    id: 0,
    navigate: "Profile",
    navigate_url: "profile",
  },
  {
    id: 1,
    navigate: "Projects",
    navigate_url: "projects",
  },
  {
    id: 2,
    navigate: "Experience",
    navigate_url: "experience",
  },
  {
    id: 3,
    navigate: "Contact",
    navigate_url: "contact",
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
    navigate: "https://github.com/vickyadri29",
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
    img_url: badonorDarah,
    logo: logoBadonorDarah,
    type: "Medical Apps •",
    tech_stack_logo: [react, vite, tailwind, express],
  },
  {
    id: 1,
    img_url: hrev,
    logo: logoHrev,
    type: "Landing Page •",
    tech_stack_logo: [react, typescript, vite, tailwind],
  },
  {
    id: 2,
    img_url: impactPalu,
    logo: logoimpactPalu,
    type: "Company Profile •",
    tech_stack_logo: [react, nextjsDark, tailwind],
  },
  {
    id: 3,
    img_url: snResidence,
    logo: logoSnResidence,
    type: "Company Profile •",
    tech_stack_logo: [react, tailwind],
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
      "Collaborate with the UI/UX designer team to develop the web into code and work with backend developers to integrate the functionality and consume APIs.",
      "Participate with the UAT team to ensure the platform meets the company’s standards for performance and reliability.",
      "Build, maintain, develop new features, and improve the education platform of the Eduqat web app using Next.js.",
      "Learn to write clean code, testable code, and implement agile methodologies.",
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
    position: "Web Developer Intern",
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
    position: "Frontend Web Developer Intern",
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
