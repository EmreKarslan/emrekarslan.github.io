export interface Contribution {
  title: string;
  project: string;
  role: string;
  date: string;
  description: string;
  pullRequestLink: string;
  imageUrl: string;
}

export const contributions: Contribution[] = [
  {
    title: "Open Source Contributor",
    project: "react-native-toast-message",
    role: "Contributor",
    date: "2023-12-13",
    description:
      "Added new styling options for toast notifications. v2.1.9 Released on changes",
    pullRequestLink:
      "https://github.com/calintamas/react-native-toast-message/pull/479",
    imageUrl: "/contributions/previews/awesome-project-preview.jpg",
  },
  {
    title: "Open Source Contributor",
    project: "kamp-us/monorepo",
    role: "Contributor",
    date: "2022-12-27",
    description:
      "Added InternalLink component to Kampus/UI package for internal redirects, updating the package's index file.",
    pullRequestLink: "https://github.com/kamp-us/monorepo/pull/217",
    imageUrl: "/contributions/previews/super-app-preview.jpg",
  },
  {
    title: "Open Source Contributor",
    project: "kamp-us/monorepo",
    role: "Contributor",
    date: "2022-12-22",
    description:
      "Optimized database queries for fetching, editing, and searching posts, improving performance.",
    pullRequestLink: "https://github.com/kamp-us/monorepo/pull/207",
    imageUrl: "/contributions/previews/super-app-preview.jpg",
  },
];
