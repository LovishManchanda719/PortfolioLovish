import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'Wanderlust',
      description: 'A full-stack MERN project for hotel bookings and listings.',
      link: 'https://wanderlust-hd9q.onrender.com',
      image: 'https://drive.google.com/thumbnail?id=1dXmS0c-dXfc7e6oE1bQf4a_WUBdh1xIZ'
    },
    {
      name: 'Water Distribution System',
      description: 'React-based system for efficient water management in drought areas.',
      image: 'https://drive.google.com/thumbnail?id=19Mj5158KbMwUo65ckO4caahVpZtVExuq'
    },
    {
      name: 'Stock Prediction System',
      description: 'Machine learning project for stock price prediction.',
      image: 'https://drive.google.com/thumbnail?id=10vEmXbHWgekB1486u6jvGyA932-fOQKd'
    },
    {
      name: 'WhatsApp AI Chatbot',
      description: 'Chatbot integrated with Gemini API.',
      image: 'https://drive.google.com/thumbnail?id=1HoEpT1dNUMIzgHe5sdjBL92D0cxOjSt7'
    },
    {
      name: 'Discord Quiz-Bot',
      description: 'Trivia bot with Gemini API, real-time scoring, and leaderboards.',
      image: 'https://drive.google.com/thumbnail?id=1pChaQvFsacHCm5yda12kCN8P2fmSrHOv'
    }
  ];

  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.name} className="dark:bg-gray-800 overflow-hidden">
            {project.image && (
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  unoptimized // Add this to prevent optimization issues
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add responsive sizes
                />
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-blue-600 dark:text-blue-400 flex items-center justify-between">
                {project.name}
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
