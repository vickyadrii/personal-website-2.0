import { NavbarItem, SocialMedia, Activity, Project } from "@/types/types";

export const navbarItems: NavbarItem[] = [
  {
    label: "Experiences",
    href: "#experiences",
  },
  {
    label: "Activities",
    href: "#activities",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
  // {
  //   label: "Blog",
  //   href: "/blog",
  // },
];

export const socialMedia: SocialMedia[] = [
  {
    icon: "/icons/ic_github.svg",
    href: "https://github.com/vickyadrii",
  },
  {
    icon: "/icons/ic_linkedin.svg",
    href: "https://linkedin.com/in/vickyadrii",
  },
  {
    icon: "/icons/ic_medium.svg",
    href: "https://medium.com/@vickyadri29",
  },
  {
    icon: "/icons/ic_x.svg",
    href: "https://x.com/viiiikk_",
  },
];

export const workExperience: Activity[] = [
  {
    id: 0,
    logo: "/icons/ic_pegadaian.png",
    company_name: "PT. Pegadaian",
    title: "Fullstack Engineer",
    period: "Aug 2024 - Present",
    tech_stacks: ["JavaScript", "TypeScript", "VueJS", "NestJS", "PostgreSQL", "Redis"],
    responsibilities: [
      "Built custom components for reusability.",
      "Implemented the unit tests and ensured the tests were passed.",
      "Maintaned and improved their apps, while implementing clean code practices.",
    ],
  },
  {
    id: 1,
    logo: "/icons/ic_eduqat.svg",
    company_name: "Eduqat",
    title: "Frontend Engineer",
    period: "Jan 2023 - Jul 2024",
    tech_stacks: ["JavaScript", "React", "NextJS", "Redux", "GraphQL", "Styled-Components", "Tailwind"],
    responsibilities: [
      "Migrated the platform's styling from the usage of Styled-components and Ant Design to Tailwind.",
      "Built, maintained, and improved Eduqat’s platform, while implementing clean code practices and agile methodologies.",
      "Developed an assignment feature for educators and students that allowed educators to create assignment materials, publish scores, view attachments from students, and provide feedback to their students.",
      "Developed a drip course feature that enabled educators to manage access to materials for their students. When the drip course was enabled, students could access materials after enrolling in the previous material.",
    ],
  },
  {
    id: 2,
    logo: "/icons/ic_kalla.svg",
    company_name: "Kalla Group",
    title: "Web Developer Intern",
    period: "Aug 2022 - Dec 2022",
    tech_stacks: ["JavaScript", "React", "NextJS", "NodeJS", "ExpressJS", "MySQL", "Tailwind"],
    responsibilities: [
      "Developed a chatbot feature that allowed automated interaction with customers.",
      "Developed a project that enabled the company to broadcast messages to customers.",
      "Developed reusable components within projects, reduced redundancy, and enhanced feature consistency.",
    ],
  },
  // {
  //   id: 3,
  //   logo: "/icons/ic_kodingna.png",
  //   company_name: "Kodingna",
  //   title: "Frontend Web Developer",
  //   period: "Aug 2022 - Dec 2022",
  //   tech_stacks: ["JavaScript", "React", "Tailwind", "Figma", "Agile Methodology"],
  //   responsibilities: [
  //     "Designed and Developed a company profile website.",
  //     "Wrote clean and maintainable code following best practices and coding standards.",
  //   ],
  // },
];

export const activities: Activity[] = [
  {
    id: 0,
    logo: "/icons/ic_bearmentor.png",
    company_name: "Bearmentor",
    title: "Frontend Mentor",
    period: "Jun 2024 - Present",
  },
  {
    id: 1,
    logo: "/icons/ic_hammercode.svg",
    company_name: "HammerCode",
    title: "Frontend Mentor",
    period: "May 2023 - May 2024",
  },
  {
    id: 2,
    logo: "/icons/ic_bangkit.png",
    company_name: "Bangkit Academy",
    title: "Cloud Computing Path",
    period: "Feb 2022 - Jul 2022",
  },
  {
    id: 3,
    logo: "/icons/ic_programming-tadulako.png",
    company_name: "Programming Tadulako",
    title: "Web Development Mentor",
    period: "Nov 2021 - Nov 2022",
  },
];

export const projects: Project[] = [
  {
    id: 0,
    thumbnail: "/images/village-web.png",
    name: "Website Desa",
    summary: "A platform designed for villages to create and customize their landing page websites.",
    tech_stacks: ["React", "Tailwind", "Ant Design", "Zustand"],
  },
  {
    id: 1,
    thumbnail: "/images/badonordarah.png",
    name: "Badonordarah",
    summary: "Facilitate blood donation and assist those in need of blood in Palu city.",
    tech_stacks: ["React", "Vite", "Tailwind", "ExpressJS", "MySQL"],
  },
  {
    id: 2,
    thumbnail: "/images/hrev.png",
    name: "HREV",
    summary: "HREV is a software house specializing in software development and IT services",
    tech_stacks: ["React", "Typescript", "Vite", "Tailwind"],
  },
  {
    id: 3,
    thumbnail: "/images/sn-residence.png",
    name: "SN Residence",
    summary:
      "SN Residence is a subsidized housing development with a unique concept and the highest quality standards and ensuring it is flood-free.",
    tech_stacks: ["React", "Vite", "Tailwind"],
  },
];
