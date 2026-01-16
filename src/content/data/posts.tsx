import HelloWorld from "../blog/hello-world.mdx";
import FoldDemo from "../blog/fold-demo.mdx";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  Component: React.ComponentType;
  recommended: boolean;
}

export const posts: BlogPost[] = [
  {
    slug: "hello-world",
    title: "Welcome to my MDX Blog",
    date: "December 18, 2024",
    excerpt: "An introduction to my new blog built with MDX and React.",
    Component: HelloWorld,
    recommended: false,
  },
  {
    slug: "fold-demo",
    title: "Fold Component Demo",
    date: "October 26, 2023",
    excerpt:
      "Demonstrating the new nested Fold component with global controls.",
    Component: FoldDemo,
    recommended: true,
  },
];
