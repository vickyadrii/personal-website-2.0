import { NavbarItem, SocialMedia, WorkExperience } from "@/types/types";

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
  {
    label: "Blog",
    href: "#blog",
  },
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
    icon: "/icons/ic_telegram.svg",
    href: "http://t.me/vickyadrii",
  },
];

export const workExperience: WorkExperience[] = [
  {
    id: 0,
    logo: "/icons/ic_eduqat.svg",
    company_name: "Eduqat",
    title: "Frontend Engineer",
    period: "Jan 2023 - Present",
    tech_stacks: ["JavaScript", "React", "NextJS", "Redux", "GraphQL", "Styled-Components", "Tailwind"],
    responsibilities: [
      "Migrated the platform's styling from the usage of Styled-components and Ant Design to Tailwind.",
      "Built, maintained, and improved Eduqat’s platform, while implementing clean code practices, and agile methodologies.",
      "Developed an assignment feature for educators and students that allowed educators to create assignment materials, publish scores, view attachments from students, and provide feedback to their students.",
      "Developed a drip course feature that enabled educators to manage access to materials for their students. When the drip course was enabled, students could access materials after enrolling in the previous material.",
    ],
  },
  {
    id: 1,
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
  {
    id: 2,
    logo: "/icons/ic_kodingna.png",
    company_name: "Kodingna",
    title: "Frontend Web Developer Intern",
    period: "Aug 2022 - Dec 2022",
    tech_stacks: ["JavaScript", "React", "Tailwind", "Figma", "Agile Methodology"],
    responsibilities: [
      "Designed and Developed a company profile website.",
      "Wrote clean and maintainable code following best practices and coding standards.",
    ],
  },
];
