import React from 'react';

export default function Skills() {
  const skills = [
    'JavaScript',
    'Python',
    'React',
    'Node.js',
    'HTML5',
    'CSS3',
    'SQL',
    'Git',
    'Tailwind CSS',
  ];

  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-bold font-sans text-charcoal text-center mb-6">
        Skills
      </h2>
      <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-3">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="bg-charcoal text-white text-sm px-4 py-2 rounded-full shadow-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
