"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: 'My First Blog Post',
    excerpt: "This is a sample blog post about my journey into the world of blogging. It's a reflection on my initial thoughts and aspirations.",
    date: 'June 15, 2024',
    tags: ['Personal', 'Development']
  },
  {
    id: 2,
    title: 'Web Development Insights',
    excerpt: 'Exploring the latest trends in web development, including modern frameworks and tools.',
    date: 'July 1, 2024',
    tags: ['Technology', 'Web Dev']
  },
  {
    id: 3,
    title: 'How to Start a Successful Blog',
    excerpt: 'Learn the essential steps and strategies to create and grow a blog that resonates with your audience.',
    date: 'August 10, 2024',
    tags: ['Blogging', 'Tips']
  },
  {
    id: 4,
    title: 'The Future of Artificial Intelligence',
    excerpt: 'Dive into the possibilities and ethical considerations surrounding AI in our daily lives.',
    date: 'September 5, 2024',
    tags: ['AI', 'Technology']
  },
  {
    id: 5,
    title: 'Balancing Work and Life as a Developer',
    excerpt: 'Tips and personal experiences on maintaining a healthy work-life balance in the tech industry.',
    date: 'October 15, 2024',
    tags: ['Personal', 'Work-Life Balance']
  },
  {
    id: 6,
    title: 'Understanding Tailwind CSS',
    excerpt: 'A beginner-friendly guide to mastering Tailwind CSS for rapid UI development.',
    date: 'November 20, 2024',
    tags: ['CSS', 'Web Dev']
  }
];

const BlogPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newMode);
  };

  const filteredPosts = selectedTag 
    ? blogPosts.filter(post => post.tags.includes(selectedTag))
    : blogPosts;

  // Get unique tags with consistent order
  const uniqueTags = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();

  return (
    <div className={`${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen transition-colors duration-300`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="container mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center dark:text-white">My Blog</h1>

          {/* Enhanced Tags Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {uniqueTags.map(tag => (
              <motion.button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-4 py-2 
                  text-sm 
                  font-medium 
                  rounded-lg 
                  transition-all 
                  duration-300 
                  ease-in-out 
                  flex 
                  items-center 
                  justify-center 
                  min-w-[100px] 
                  text-center
                  ${
                    selectedTag === tag 
                      ? 'bg-blue-500 text-white shadow-md' 
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                  }
                `}
              >
                {tag}
              </motion.button>
            ))}
          </div>

          {/* Blog Posts */}
          {filteredPosts.map(post => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6"
            >
              <h2 className="text-2xl font-semibold mb-2 dark:text-white">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                <div className="space-x-2">
                  {post.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {filteredPosts.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400">No blog posts found.</p>
          )}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;