"use client";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400">Contact Me</h2>
      <Card className="dark:bg-gray-800">
        <CardContent className="text-center">
          <p className="mb-4 text-gray-700 dark:text-gray-300">Feel free to reach out to me!</p>
          <div className="space-y-2">
            <p className="dark:text-gray-200">
              <strong>Email:</strong> lovishmanchanda480@gmail.com
            </p>
            <p className="dark:text-gray-200">
              <strong>Phone:</strong> (+91) 8750703059
            </p>
            <p className="dark:text-gray-200">
              <strong>Location:</strong> Delhi, India
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a 
                href="https://www.linkedin.com/in/lovish45/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/LovishManchanda719"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors flex items-center"
              >
                <Github className="mr-2" /> GitHub
              </a>
              <a 
                href="mailto:lovishmanchanda480@gmail.com"
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800 transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;