// ProjectCard.js
const ProjectCard = ({
  title,
  description,
  imageUrl,
  urlView,
  urlSource,
  technologies,
}) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-1/2 mx-auto my-8">
      <figure className="w-1/3 h-full">
        <img
          src={imageUrl}
          alt="Project Image"
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body flex flex-col justify-between h-full w-2/3">
        <h2 className="card-title text-xl font-bold">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>

        {/* Technologies used section */}
        {technologies && technologies.length > 0 && (
          <div className="">
            <h3 className="text-md font-semibold mb-2">Technologies Used:</h3>
            <ul className="flex flex-wrap space-x-4 text-sm text-gray-600">
              {technologies.map((tech, index) => (
                <li key={index} className="bg-emerald-600 text-white px-3 py-1 rounded-full">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="card-actions justify-end mt-auto space-x-2">
          <a
            href={urlView}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Demo
          </a>
          <a
            href={urlSource}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-error btn-sm"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
