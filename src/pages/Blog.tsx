import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import HelloWorld from "../content/blog/hello-world.mdx";
import FoldDemo from "../content/blog/fold-demo.mdx";
import { FoldProvider } from "../components/ui/FoldContext";
import styles from "./Blog.module.css";

// In a real app, this would be dynamic, but for now we hardcode the mapping
const posts = [
  {
    slug: "hello-world",
    title: "Welcome to my MDX Blog",
    date: "December 18, 2024",
    excerpt: "An introduction to my new blog built with MDX and React.",
    Component: HelloWorld,
  },
  {
    slug: "fold-demo",
    title: "Fold Component Demo",
    date: "October 26, 2023",
    excerpt:
      "Demonstrating the new nested Fold component with global controls.",
    Component: FoldDemo,
  },
];

const BlogList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Blog</h1>
      <div className={styles.list}>
        {posts.map((post) => (
          <div key={post.slug} className={styles.item}>
            <Link to={`/blog/${post.slug}`} className={styles.linkGroup}>
              <h2 className={styles.title}>{post.title}</h2>
            </Link>
            <p className={styles.date}>{post.date}</p>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`} className={styles.readMore}>
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const BlogPostLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.postLayout}>
      <Link to="/blog" className={styles.backLink}>
        ← Back to Blog
      </Link>
      <FoldProvider>{children}</FoldProvider>
    </div>
  );
};

export const Blog = () => {
  return (
    <Routes>
      <Route index element={<BlogList />} />
      {posts.map((post) => (
        <Route
          key={post.slug}
          path={`${post.slug}`}
          element={
            <BlogPostLayout>
              <post.Component />
            </BlogPostLayout>
          }
        />
      ))}
    </Routes>
  );
};
