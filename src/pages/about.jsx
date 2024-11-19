import Resume from "../components/organims/cardresume";
import CardsStack from "../components/organims/cardstack";

function About() {
  return (
    <div className="min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 pt-24">
          <div className="relative flex justify-center">
            {/* Profile Image with shadow */}
            <img
              src="https://i.pinimg.com/736x/cd/70/37/cd70376120da1f06e7f08b4d1e36667c.jpg"
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
        <Resume />

        <h1 className="text-4xl font-bold text-slate-100 mb-11 text-left">TechStack</h1>
        <CardsStack />

        {/* Spotify Playlist Embed */}
      </div>
    </div>
  );
}

export default About;
