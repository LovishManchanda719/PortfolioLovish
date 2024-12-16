"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download, Mail } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const professionTitles = [
    'Full Stack Developer', 
    'Machine Learning Enthusiast', 
    'AI Innovator', 
    'Tech Creative'
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = professionTitles[currentTitleIndex];
      
      // Typing logic
      if (!isDeleting && displayText.length < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }
      
      // Deleting logic
      if (isDeleting && displayText.length > 0) {
        setDisplayText(currentTitle.slice(0, displayText.length - 1));
      }
      
      // Change title logic
      if (!isDeleting && displayText.length === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      }
      
      if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % professionTitles.length);
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, currentTitleIndex, isDeleting]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 dark:bg-gray-900 bg-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Avatar and Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-blue-400 rounded-full blur-xl opacity-75 animate-pulse"></div>
            <Image 
              src="https://lh3.googleusercontent.com/d/19xozCjZdVsb4NhQ9V7Q1NpfeDYykKh6Z" 
              alt="Lovish Manchanda"
              width={400}
              height={400}
              className="relative z-10 rounded-full border-4 border-blue-500 shadow-2xl"
            />
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute bottom-0 right-0 bg-green-500 w-12 h-12 rounded-full flex items-center justify-center"
            >
              <span className="text-white text-sm">✋</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-5xl font-bold mb-4 dark:text-white"
          >
            Lovish Manchanda
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-2xl mb-6 text-gray-600 dark:text-gray-300"
          >
            {displayText}
            <span className="animate-pulse">|</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-8 text-gray-700 dark:text-gray-400 max-w-xl"
          >
            Passionate about creating innovative solutions at the intersection of web development and machine learning. Transforming ideas into elegant, efficient code.
          </motion.p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {[
              { 
                icon: <Mail className="mr-2" />, 
                text: 'Contact Me', 
                href: 'mailto:your.email@example.com',
                color: 'bg-red-500 hover:bg-red-600' 
              },
              { 
                icon: <Linkedin className="mr-2" />, 
                text: 'LinkedIn', 
                href: 'https://linkedin.com/in/yourprofile',
                color: 'bg-blue-600 hover:bg-blue-700' 
              },
              { 
                icon: <Github className="mr-2" />, 
                text: 'Github', 
                href: 'https://github.com/yourusername',
                color: 'bg-gray-800 hover:bg-black' 
              },
              { 
                icon: <Download className="mr-2" />, 
                text: 'Resume', 
                href: 'https://drive.google.com/file/d/10o1CmXI21OrJW4Vmla0Oa_9d-E5SwBlw/view?usp=drive_link',
                color: 'bg-green-500 hover:bg-green-600' 
              }
              
            ].map((item, index) => (
              <motion.a
                key={item.text}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className={`flex items-center px-4 py-2 rounded-full text-white transition-all duration-300 ${item.color}`}
              >
                {item.icon}
                {item.text}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;