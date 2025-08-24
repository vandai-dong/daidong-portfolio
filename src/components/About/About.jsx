import React from 'react';

export default function About() {
  return (
    <section id="about" className="mb-16">
      <h2 className="text-3xl font-bold font-sans text-charcoal text-center mb-6">
        About Me
      </h2>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <p className="text-lg text-gray-700 font-serif leading-relaxed">
          Hello! I'm a passionate software engineer with a strong focus on
          full-stack development. I enjoy building responsive and user-friendly
          web applications that solve real-world problems. My experience ranges
          from developing robust backend APIs with Node.js to creating dynamic
          front-end interfaces with React. I am always eager to learn new
          technologies and take on new challenges.
        </p>
      </div>
    </section>
  );
}
