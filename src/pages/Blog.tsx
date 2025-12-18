import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HelloWorld from '../content/blog/hello-world.mdx';

// In a real app, this would be dynamic, but for now we hardcode the mapping
const posts = [
  {
    slug: 'hello-world',
    title: 'Welcome to my MDX Blog',
    date: 'December 18, 2024',
    excerpt: 'An introduction to my new blog built with MDX and React.',
    Component: HelloWorld,
  },
];

const BlogList = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.slug} className="border-b border-gray-200 dark:border-gray-800 pb-8">
            <Link to={`/blog/${post.slug}`} className="block group">
              <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{post.date}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="text-primary font-medium hover:underline"
            >
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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose dark:prose-invert prose-primary lg:prose-lg">
       <Link to="/blog" className="no-underline text-sm text-gray-500 hover:text-primary mb-8 block">
         ← Back to Blog
       </Link>
      {children}
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
