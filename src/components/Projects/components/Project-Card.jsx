import React from 'react';

export default function ProjectCard({
  image,
  title,
  description,
  tech,
  live,
  github,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold font-sans mb-2">{title}</h3>
        <p className="text-sm text-gray-600 font-serif mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="bg-primary-mauve text-white px-3 py-1 text-xs rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={live}
            className="inline-block px-4 py-2 bg-accent-teal text-white rounded-lg text-sm font-semibold"
          >
            Live Demo
          </a>
          <a
            href={github}
            className="inline-block px-4 py-2 bg-charcoal text-white rounded-lg text-sm font-semibold"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
