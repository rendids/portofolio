function Portfolio() {
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
      <section className="w-full h-screen flex flex-col  items-center space-y-6">
        {/* Card 1 */}
        <div className="card w-full md:w-1/2 bg-base-100 shadow-xl flex flex-col md:flex-row justify-center">
          <figure className="w-full md:w-1/2">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Project"
              className="w-full h-full object-cover"
            />
          </figure>

          <div className="card-body p-6 flex flex-col justify-between">
            <h2 className="card-title text-2xl font-semibold">Project One</h2>
            <p className="text-lg mt-4">
              A description of the first project that I worked on. This project
              showcases the features and skills I used during development.
            </p>
            <div className="card-actions justify-end mt-6">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>

        {/* Add more cards if needed */}
      </section>
    </div>
  );
}

export default Portfolio;
