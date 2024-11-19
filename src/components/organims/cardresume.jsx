// Data untuk pengalaman kerja dan pendidikan
const workExperienceData = [
  {
    title: "Intern at PT Hummatech",
    date: "September 2023 - March 2024",
    description:
      "Gained hands-on experience in software development, including building websites with PHP and Laravel, using Figma for UI/UX design, and managing code on GitHub.",
  },
];

const educationData = [
  {
    title: "Junior High School - MTS 3 Ponorogo",
    date: "Graduated: 2022",
    description:
      "Graduated from an Islamic middle school, with a strong focus on religious studies and general subjects like mathematics and science.",
  },
  {
    title: "Vocational High School - SMK PGRI 2 Ponorogo",
    date: "Graduated: 2025",
    description:
      "Specialized in Software Engineering, with training in programming, database management, and system development.",
  },
];

// Komponen untuk menampilkan daftar Pengalaman Kerja
const WorkExperienceList = ({ title, date, description }) => (
  <div className="relative mb-6 pl-10">
    {/* Lingkaran */}
    <div className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500"></div>
    {/* Konten */}
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-100">{title}</h3>
      <p className="text-sm text-gray-300">{date}</p>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

// Komponen untuk menampilkan daftar Pendidikan
const EducationList = ({ title, date, description }) => (
  <div className="relative mb-6 pl-10">
    {/* Lingkaran */}
    <div className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-green-500"></div>
    {/* Konten */}
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-100">{title}</h3>
      <p className="text-sm text-gray-300">{date}</p>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

// Komponen utama yang menampilkan data pengalaman kerja dan pendidikan
const Resume = () => (
  <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Work Experience */}
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-100 mb-4">Work Experience</h2>
      <div className="relative border-l-2 border-gray-300 pl-6">
        {workExperienceData.map((experience, index) => (
          <WorkExperienceList
            key={index}
            title={experience.title}
            date={experience.date}
            description={experience.description}
          />
        ))}
      </div>
    </div>

    {/* Education */}
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-100 mb-4">Education</h2>
      <div className="relative border-l-2 border-gray-300 pl-6">
        {educationData.map((education, index) => (
          <EducationList
            key={index}
            title={education.title}
            date={education.date}
            description={education.description}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Resume;
