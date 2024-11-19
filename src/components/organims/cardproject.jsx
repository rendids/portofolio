// ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="card w-full md:w-1/2 bg-base-100 shadow-xl flex flex-col md:flex-row justify-center">
      <figure className="w-full md:w-1/2">
        <img
          src={imageUrl}
          alt="Project"
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body p-6 flex flex-col justify-between">
        <h2 className="card-title text-2xl font-semibold">{title}</h2>
        <p className="text-lg mt-4">{description}</p>
        <div className="card-actions justify-end mt-6">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
