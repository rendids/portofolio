function Index() {
  return (
    <>
      <section className="px-6 py-16 min-h-screen flex flex-col md:flex-row items-center justify-center text-sky-50 relative">
        {/* Latar belakang kotak-kotak */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Crect width=%22100%22 height=%22100%22 fill=%22none%22 stroke=%22rgba(255, 255, 255, 0.2)%22 stroke-width=%221%22/%3E%3C/svg%3E')] bg-repeat opacity-50"></div>

        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <h1 className="text-4xl font-semibold mb-3">
            Hi,👋 I am <span className="text-yellow-300">akskask</span>
          </h1>
          <h3 className="text-2xl font-medium mb-3">A Junior Developer</h3>
          <p className="text-lg font-light mb-6">
            I am a passionate junior developer focusing on web technologies like
            React, Laravel, and PHP. I enjoy building dynamic websites and
            applications that solve real-world problems.
          </p>

        </div>
        <div className="mt-8 md:mt-0 z-10">
          <img
            src="https://i.pinimg.com/736x/cd/70/37/cd70376120da1f06e7f08b4d1e36667c.jpg" // Ganti dengan path gambar profil
            alt="Rendi's Profile Picture"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-gray-700 shadow-lg" // Sesuaikan ukuran gambar
          />
        </div>
      </section>
    </>
  );
}

export default Index;
