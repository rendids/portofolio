// Portfolio.js
import { cardprojectImage1 } from "../assets/image";
import ProjectCard from "../components/organims/cardproject";

const Portfolio = () => {
  // Define an array of project data
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "This project is a personal portfolio website I built using React, DaisyUI, and Tailwind CSS. By leveraging React, I created a dynamic and interactive application, while DaisyUI provides elegant and responsive UI components. Tailwind CSS was used for styling, offering flexibility and efficiency in creating a highly customizable design. The website showcases the projects I have worked on, with a modern, responsive layout across devices, and includes features such as a project gallery, contact form, and social media integration.",
      imageUrl: cardprojectImage1,
      urlView: "https://rendids.vercel.app/",
      urlSource: "https://github.com/rendids/portofolio",
      technologies: ["React", "DaisyUI", "Tailwind CSS"],
    },
  ]

  return (
    <div className="min-h-screen bg-base-200 p-10">
      {/* Header Section */}
      <header className="text-center mb-12 pt-28">
        <h1 className="text-4xl font-semibold text-primary">Project</h1>
        <p className="text-lg mt-4 text-neutral-content">Showcasing projects</p>
      </header>

      {/* Project Card Section */}
      <section className=" flex flex-col items-center space-y-10">
        {/* Dynamically generate Project Cards */}
        {projects.map((project, index) => (
          <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          urlView={project.urlView}
          urlSource={project.urlSource}
          technologies={project.technologies}
        />
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
