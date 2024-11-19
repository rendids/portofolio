import React from "react";
import {
  bsImage,
  cssImage,
  githubImage,
  gitImage,
  htmlImage,
  jsImage,
  laraImage,
  mysqlImage,
  phpImage,
  postmanImage,
  reactImage,
  vscodeImage,
} from "../../assets/image";
const cardData = [
  { title: "HTML5", description: "Markup Language", imageUrl: htmlImage },
  { title: "CSS3", description: "Programming Language", imageUrl: cssImage },
  {
    title: "JavaScript",
    description: "Programming Language",
    imageUrl: jsImage,
  },
  { title: "Bootstrap", description: "Framework", imageUrl: bsImage },
  { title: "Laravel", description: "Framework", imageUrl: laraImage },
  { title: "PHP", description: "Programming Language", imageUrl: phpImage },
  { title: "React", description: "Library", imageUrl: reactImage },
  { title: "MySQL", description: "Tools", imageUrl: mysqlImage },
  { title: "VS Code", description: "Tools", imageUrl: vscodeImage },
  { title: "Git", description: "Tools", imageUrl: gitImage },
  { title: "GitHub", description: "Tools", imageUrl: githubImage },
  { title: "Postman", description: "Tools", imageUrl: postmanImage },
];

const CardsStack = () => {
  return (
    <section className="mb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="card w-48 bg-base-100 shadow-xl text-center"
          >
            <figure>
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-24 mx-auto mt-3"
              />
            </figure>
            <div className="card-body text-left">
              {" "}
              {/* Menambahkan text-left di sini */}
              <h5 className="card-title text-sm">{card.title}</h5>
              <p className="text-xs">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsStack;
