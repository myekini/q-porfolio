export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  role: string;
  status: "Done" | "In progress";
  website: string;
  description: string;
  problem?: string;
  process: string;
  images: string[];
  takeaways: string;
  featuredImage: string;
  tags: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface NavItem {
  href: string;
  label: string;
}
