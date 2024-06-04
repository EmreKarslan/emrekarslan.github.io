export interface Project {
  jobTitle: string;
  projectName: string;
  roleDescription: string;
  contributionDate: string;
  responsibilities: string;
  sourceCodeLink?: string;
  previewImageUrl?: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    jobTitle: "Fullstack Developer",
    projectName: "Shelf.dev",
    roleDescription: "Project Maintainer",
    contributionDate: "2023-12-13",
    responsibilities:
      "Worked on frontend and backend development, as well as content improvements.",
    techStack: ["Astro", "React", "Strapi", "Tailwind", "ShadcnUI"],
    previewImageUrl: "/contributions/previews/awesome-project-preview.jpg",
  },
  {
    jobTitle: "Fullstack Developer",
    projectName: "Order Delivery Management",
    roleDescription: "Project Maintainer",
    contributionDate: "2023-12-13",
    responsibilities:
      "Worked on frontend and backend development, as well as content improvements.",
    techStack: ["Astro", "React", "Strapi", "Tailwind", "ShadcnUI"],
    previewImageUrl: "/",
  },
  {
    jobTitle: "Fullstack Developer",
    projectName: "Social Media Feed",
    roleDescription: "Project Maintainer",
    contributionDate: "2023-12-13",
    responsibilities:
      "Worked on frontend and backend development, as well as content improvements.",
    techStack: ["Astro", "React", "Strapi", "Tailwind", "ShadcnUI"],
    previewImageUrl: "/",
  },
];
