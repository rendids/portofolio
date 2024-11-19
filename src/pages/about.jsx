const workExperienceData = [
  {
    title: "Software Engineer at XYZ Corp",
    date: "June 2022 - Present",
    description:
      "Worked on building scalable web applications and optimizing backend systems using Node.js and MongoDB.",
  },
  {
    title: "Frontend Developer at ABC Inc",
    date: "January 2020 - May 2022",
    description:
      "Developed responsive user interfaces using React, ensuring a seamless experience across devices and platforms.",
  },
];

const educationData = [
  {
    title: "Computer Science - University of Tech",
    date: "Graduated: 2019",
    description:
      "Focused on software engineering, data structures, algorithms, and full stack web development.",
  },
  {
    title: "High School Diploma - Tech High School",
    date: "Graduated: 2015",
    description:
      "Specialized in computer science, mathematics, and physics, laying a solid foundation for my software engineering journey.",
  },
];

const WorkExperienceCard = ({ title, date, description }) => (
  <div className="card shadow-xl bg-white p-6">
    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600">{date}</p>
    <p className="text-gray-700">{description}</p>
  </div>
);

const EducationCard = ({ title, date, description }) => (
  <div className="card shadow-xl bg-white p-6">
    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600">{date}</p>
    <p className="text-gray-700">{description}</p>
  </div>
);

function About() {
  return (
    <div className="min-h-screen py-10 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 pt-24">
          <div className="relative flex justify-center">
            {/* Profile Image with shadow */}
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-h-52 h-52 rounded-full border-4 border-blue-500 shadow-lg transition-transform transform hover:scale-110"
            />
          </div>
          <h1 className="text-4xl font-bold text-slate-100 mb-11 text-left">
            About
          </h1>
          <p className="text-lg text-slate-200 text-left max-w-full">
            Hello! I am a Junior Developer with a strong passion for web
            development, specializing in PHP, Laravel, and React. I have a solid
            foundation in backend development using Laravel, where I am capable
            of building and managing efficient and secure APIs. On the frontend,
            I have experience creating responsive and interactive user
            interfaces with React.js. I am eager to continue learning and honing
            my full-stack development skills. My focus is on creating scalable
            and maintainable solutions, and I always strive to deliver
            high-quality results with clean and structured code. In addition, I
            am open to new challenges and enjoy collaborating with teams to
            create impactful applications that improve user experiences. I
            believe that with my enthusiasm for learning and staying up-to-date
            with the latest technologies, I can grow into a proficient and
            reliable developer.
          </p>
        </div>

        {/* Work Experience and Education Section */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Work Experience
            </h2>
            {workExperienceData.map((experience, index) => (
              <WorkExperienceCard
                key={index}
                title={experience.title}
                date={experience.date}
                description={experience.description}
              />
            ))}
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Education
            </h2>
            {educationData.map((education, index) => (
              <EducationCard
                key={index}
                title={education.title}
                date={education.date}
                description={education.description}
              />
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-4">
            <span className="badge badge-primary text-white">React</span>
            <span className="badge badge-secondary text-white">Node.js</span>
            <span className="badge badge-accent text-white">MongoDB</span>
            <span className="badge badge-info text-white">PostgreSQL</span>
            <span className="badge badge-warning text-white">JavaScript</span>
            <span className="badge badge-success text-white">Git</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
