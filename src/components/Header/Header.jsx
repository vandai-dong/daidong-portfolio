import React from 'react';

export default function Header() {
  return (
    <header className="bg-primary-mauve text-charcoal py-16 md:py-24 text-center rounded-b-3xl shadow-lg">
      <div className="container mx-auto px-4">
        <img
          src="https://placehold.co/150x150/f0e1f5/b078c7?text=Profile"
          alt="Your Name"
          className="rounded-full mx-auto w-32 h-32 md:w-40 md:h-40 border-4 border-white shadow-md mb-6"
        />
        <h1 className="text-3xl md:text-5xl font-bold font-sans mb-2">
          Your Name
        </h1>
        <p className="text-lg md:text-xl font-serif">
          Building elegant software, one line of code at a time.
        </p>
        <a
          href="#projects"
          className="inline-block mt-8 px-8 py-3 bg-accent-teal text-white font-sans font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          View My Projects
        </a>
      </div>
    </header>
  );
}
