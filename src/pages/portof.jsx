// Portfolio.js
import React from 'react';
import ProjectCard from '../components/organims/cardproject';

const Portfolio = () => {
  // Define an array of project data
  const projects = [
    {
      title: "Project One",
      description: "A description of the first project that I worked on. This project showcases the features and skills I used during development.",
      imageUrl: "https://via.placeholder.com/400x250",
    },
    {
      title: "Project Two",
      description: "A description of the second project. It includes some advanced features that demonstrate my skills in a different area.",
      imageUrl: "https://via.placeholder.com/400x250",
    },
    {
      title: "Project Three",
      description: "This is a third project that showcases another set of features and technologies.",
      imageUrl: "https://via.placeholder.com/400x250",
    },
    // Add more projects here as needed
  ];

  return (
    <div className="min-h-screen bg-base-200 p-10">
      {/* Header Section */}
      <header className="text-center mb-12 pt-28">
        <h1 className="text-4xl font-semibold text-primary">Project</h1>
        <p className="text-lg mt-4 text-neutral-content">
          Showcasing projects
        </p>
      </header>

      {/* Project Card Section */}
      <section className="w-full h-screen flex flex-col items-center space-y-10">
        {/* Dynamically generate Project Cards */}
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
