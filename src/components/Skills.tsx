"use client";
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
    SiCplusplus,
    SiC,
    SiPython,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiHtml5,
    SiCss3,
    SiBootstrap,
    SiMongodb,
    SiExpress,
    SiNodedotjs
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

// Type definition for valid skills
type Skill = 'C++' | 'Java' | 'C' | 'Python' | 'JavaScript' | 'React' | 'Next.js' | 'HTML' | 'CSS' | 'Bootstrap' | 'MERN Stack' | 'Machine Learning' | 'DSA' | 'OS' | 'Computer Networks' | 'Embedded Systems (Arduino)' | 'REST API';

// Define the logos with types and colors
const skillLogos: Record<Skill, { icon: React.ElementType; color: string }> = {
    'C++': { icon: SiCplusplus, color: '#00599C' },       // Blue (C++ official color)
    'Java': { icon: FaJava, color: '#ED8B00' },           // Orange (Java's brand color)
    'C': { icon: SiC, color: '#A8B9CC' },                 // Light Blue (C language logo color)
    'Python': { icon: SiPython, color: '#3776AB' },       // Blue (Python's official color)
    'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },// Yellow (JavaScript's brand color)
    'React': { icon: SiReact, color: '#61DAFB' },         // Light Blue (React's logo color)
    'Next.js': { icon: SiNextdotjs, color: '#000000' },   // Black (Next.js logo color)
    'HTML': { icon: SiHtml5, color: '#E34F26' },          // Red-Orange (HTML5 logo color)
    'CSS': { icon: SiCss3, color: '#1572B6' },            // Blue (CSS3 logo color)
    'Bootstrap': { icon: SiBootstrap, color: '#7952B3' }, // Purple (Bootstrap's brand color)
    'MERN Stack': { icon: React.Fragment, color: '#000000' },
    'Machine Learning': { icon: React.Fragment, color: '#000000' },
    'DSA': { icon: React.Fragment, color: '#000000' },
    'OS': { icon: React.Fragment, color: '#000000' },
    'Computer Networks': { icon: React.Fragment, color: '#000000' },
    'Embedded Systems (Arduino)': { icon: React.Fragment, color: '#000000' },
    'REST API': { icon: React.Fragment, color: '#000000' }
};

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: ['C++', 'Java', 'C', 'Python', 'JavaScript'] as Skill[]
        },
        {
            title: 'Web Technologies',
            skills: ['MERN Stack', 'React', 'Next.js', 'HTML', 'CSS', 'Bootstrap', 'REST API'] as Skill[]
        },
        {
            title: 'Other Skills',
            skills: ['Machine Learning', 'DSA', 'OS', 'Computer Networks', 'Embedded Systems (Arduino)'] as Skill[]
        }
    ];

    return (
        <section
            id="skills"
            className="py-12 overflow-hidden"
        >
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400 animate-fade-in-down">
                Skills
            </h2>
            <div className="grid md:grid-cols-3 gap-6 px-4">
                {skillCategories.map((category, categoryIndex) => (
                    <Card
                        key={category.title}
                        className="dark:bg-gray-800 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-slide-in"
                        style={{
                            animationDelay: `${categoryIndex * 200}ms`,
                            perspective: '1000px'
                        }}
                    >
                        <CardHeader>
                            <CardTitle className="text-center text-blue-600 dark:text-blue-400 text-xl font-semibold">
                                {category.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3 grid grid-cols-2 gap-3">
                                {category.skills.map((skill) => {
                                    const { icon: SkillIcon, color } = skillLogos[skill];
                                    return (
                                        <li
                                            key={skill}
                                            className="bg-blue-100 dark:bg-blue-900 py-3 rounded-md text-blue-800 dark:text-blue-300 flex items-center justify-center space-x-2 transform transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-md"
                                        >
                                            {SkillIcon !== React.Fragment && (
                                                <SkillIcon 
                                                    className="w-6 h-6 mr-2" 
                                                    color={color} 
                                                />
                                            )}
                                            <span className="text-sm font-medium">{skill}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Skills;