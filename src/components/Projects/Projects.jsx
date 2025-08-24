import React from 'react';
import ProjectCard from './components/Project-Card';

export default function Projects() {
  const projects = [
    {
      image: 'https://placehold.co/600x400/f0e1f5/b078c7?text=Project+1',
      title: 'Project Name One',
      description:
        'A brief, captivating description of the project and its purpose.',
      tech: ['React', 'Node.js', 'MongoDB'],
      live: '#',
      github: '#',
    },
    {
      image: 'https://placehold.co/600x400/f0e1f5/b078c7?text=Project+2',
      title: 'Project Name Two',
      description:
        'A brief, captivating description of the project and its purpose.',
      tech: ['Python', 'Django', 'PostgreSQL'],
      live: '#',
      github: '#',
    },
    {
      image: 'https://placehold.co/600x400/f0e1f5/b078c7?text=Project+3',
      title: 'Project Name Three',
      description:
        'A brief, captivating description of the project and its purpose.',
      tech: ['Vue.js', 'Firebase'],
      live: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold font-sans text-charcoal text-center mb-10">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
