"use client";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Achievements = () => {
  const achievements = [
    'JEE Mains 2023: 99.57 Percentile, 5026 Rank',
    'JEE Advanced 2023: Rank 8586',
    'Multiple Hackathon Participations',
    'Hackathon Winner at Sneh International School (2019)'
  ];

  return (
    <section id="achievements" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400">Achievements</h2>
      <Card className="dark:bg-gray-800">
        <CardContent>
          <ul className="space-y-2">
            {achievements.map((achievement) => (
              <li 
                key={achievement} 
                className="bg-blue-50 dark:bg-blue-900 py-2 px-4 rounded-md text-blue-800 dark:text-blue-300"
              >
                {achievement}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default Achievements;
