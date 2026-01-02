import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "r-Portfolio",
  EMAIL: "yoneyama@ai.cs.ehime-u.ac.jp",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_FAVORITES_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Awards",
  DESCRIPTION: "A showcase of my experiences and achievements.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const FAVORITES: Metadata = {
  TITLE: "Favorites",
  DESCRIPTION: "A collection of my favorites.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "X",
    HREF: "https://x.com/ynym_8",
  },
  { 
    NAME: "GitHub",
    HREF: "https://github.com/rice8y"
  },
  {
    NAME: "Gist",
    HREF: "https://gist.github.com/rice8y"
  },
  {
    NAME: "Qiita",
    HREF: "https://qiita.com/rice8y"
  },
  { 
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/eito-yoneyama-8929b0323",
  }
];