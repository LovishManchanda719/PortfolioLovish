"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Moon, Sun, LogIn, LogOut, MessageCircle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useRouter, usePathname } from 'next/navigation';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  isDarkMode, 
  toggleDarkMode 
}) => {
  const { currentUser, logout } = useAuth();
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

  const handleAuthAction = async () => {
    if (currentUser) {
      try {
        await logout();
        router.push('/');
      } catch (error) {
        console.error('Logout failed', error);
      }
    } else {
      router.push('/auth');
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

          {/* Chat Page Link - Only show when user is logged in */}
          {currentUser && (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/chat"
                className={`flex items-center space-x-2 px-3 py-2 rounded-full ${
                  isDarkMode 
                    ? 'bg-green-700 hover:bg-green-600 text-white' 
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                <MessageCircle size={20} />
                <span>Chat</span>
              </Link>
            </motion.div>
          )}

          {/* Authentication Button */}
          <motion.button 
            onClick={handleAuthAction}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center space-x-2 px-3 py-2 rounded-full ${
              currentUser 
                ? (isDarkMode 
                    ? 'bg-red-700 hover:bg-red-600 text-white' 
                    : 'bg-red-500 hover:bg-red-600 text-white')
                : (isDarkMode 
                    ? 'bg-blue-700 hover:bg-blue-600 text-white' 
                    : 'bg-blue-500 hover:bg-blue-600 text-white')
            }`}
          >
            {currentUser ? (
              <>
                <LogOut size={20} />
                <span>Logout</span>
              </>
            ) : (
              <>
                <LogIn size={20} />
                <span>Login</span>
              </>
            )}
          </motion.button>

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