export type NavbarItem = {
  label: string;
  href: string;
};

export type SocialMedia = {
  icon: string;
  href: string;
};

export type Activities = {
  id: number;
  logo: string;
  company_name: string;
  title: string;
  period: string;
  tech_stacks: string[];
  responsibilities?: string[];
};
