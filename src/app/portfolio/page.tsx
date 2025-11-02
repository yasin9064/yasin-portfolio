import React from 'react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of Project One. It was a challenging and rewarding experience.',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Project+One',
    link: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of Project Two. This project taught me a lot about teamwork and collaboration.',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Project+Two',
    link: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A brief description of Project Three. I am particularly proud of the innovative solution we came up with.',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Project+Three',
    link: '#',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'A brief description of Project Four. This was a great opportunity to learn a new technology.',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Project+Four',
    link: '#',
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'A brief description of Project Five. I enjoyed working on this project from start to finish.',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Project+Five',
    link: '#',
  },
  {
    id: 6,
    title: 'Project Six',
    description: 'A brief description of Project Six. This project allowed me to showcase my creative skills.',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Project+Six',
    link: '#',
  },
];

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-orbitron p-8">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 glitch" data-text="My Portfolio">My Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card bg-gray-900 rounded-lg overflow-hidden transform transition-transform hover:scale-105 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/50">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <Link href={project.link} className="inline-block bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors">
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
