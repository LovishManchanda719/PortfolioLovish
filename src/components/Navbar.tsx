"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Moon, Sun, LogIn, LogOut, MessageCircle } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  isDarkMode, 
  toggleDarkMode 
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Education', href: '/#education' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' }
  ];

  const handleNavigation = async (href: string) => {
    if (href.includes('#')) {
      const sectionId = href.split('#')[1];
      
      // If we're not on the home page, navigate home first
      if (pathname !== '/') {
        await router.push('/');
        // Wait for the page to load before scrolling
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // If we're already on the home page, just scroll
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      router.push(href);
    }
  };


  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      } shadow-md`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <button 
          onClick={() => handleNavigation('/')}
          className="text-2xl font-bold"
        >
          Lovish Manchanda
        </button>

        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={() => handleNavigation(item.href)}
                className={`hover:text-blue-500 transition-colors ${
                  isDarkMode ? 'hover:text-blue-300' : 'hover:text-blue-700'
                }`}
              >
                {item.name}
              </button>
            </motion.div>
          ))}

          {/* Dark Mode Toggle */}
          <motion.button 
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2"
          >
            {isDarkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-800" />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;