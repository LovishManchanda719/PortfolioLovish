"use client";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400">About Me</h2>
      <Card>
        <CardContent className="p-6 bg-white dark:bg-gray-800">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
  I&apos;m a passionate computer science student at Delhi Technological University with strong problem-solving skills
  and a keen interest in full-stack development and machine learning. I excel in creating efficient solutions 
  and have a proven track record of participating in and winning hackathons.
</p>

        </CardContent>
      </Card>
    </section>
  );
};

export default About;
