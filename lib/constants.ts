export const SITE_CONFIG = {
  name: "Ayomide",
  title: "Ayomide - UX/UI Designer",
  description: "UX/UI Designer passionate about creating meaningful digital experiences. Specializing in user-centered design, bringing ideas to life through thoughtful interfaces and seamless interactions.",
  url: "https://ayomide-portfolio.vercel.app", // Update with your actual domain
  ogImage: "/images/og-image.jpg", // Add your OG image
  links: {
    behance: "https://www.behance.net/",
    linkedin: "https://www.linkedin.com/",
    medium: "https://medium.com/",
    twitter: "https://twitter.com/",
  },
};

export const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export const SKILLS = [
  {
    category: "Design",
    items: ["UI/UX Design", "User Research", "Prototyping", "Design Systems"],
  },
  {
    category: "Tools",
    items: ["Figma", "Adobe Creative Suite", "Sketch", "Principle"],
  },
] as const;
