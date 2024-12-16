"use client";
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Education = () => {
  return (
    <section id="education" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400">Education</h2>
      <div className="space-y-6">
        <Card className="dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-blue-600 dark:text-blue-400">Delhi Technological University (DTU)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold dark:text-gray-200">B.Tech in Computer Science & Engineering</p>
            <p className="text-gray-700 dark:text-gray-300">Second Year</p>
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-blue-600 dark:text-blue-400">Sneh International School</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="dark:text-gray-200">10th: 95%</p>
            <p className="dark:text-gray-200">12th: 94.8% (PCM with Physical Education)</p>
            <p className="text-gray-700 font-semibold dark:text-gray-300">Scored 100 in Mathematics</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
