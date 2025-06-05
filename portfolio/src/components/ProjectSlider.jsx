import { useState } from "react";
import { projects } from "../assets/data/projects";

export default function ProjectSlider() {
  const [index, setIndex] = useState(0);

  const prevProject = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  const nextProject = () => {
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[index];
  const technologies = projects[index].img.map((el) => (
    <img src={el} className="w-8 h-8 rounded-full "></img>
  ));

  return (
    <article className="flex j w-[68%] m-auto justify-between pb-20 gap-15 md:w-250 ">
      <button
        onClick={prevProject}
        className=" hover:bg-gray-300 rounded-full p-2 "
        aria-label="Précédent"
      >
        <img src="/chevron-left.svg" className="w-5 h-5" />
      </button>
      <div>
        <img src={project.image} alt="" className="h-50 w-150" />
      </div>
      <div className="w-[76%] ">
        <h3 className="font-bold leading-none pb-2 ">{project.title}</h3>
        <div className="flex pb-5 gap-2">{technologies}</div>
        <p>{project.description}</p>
      </div>
        <button
        onClick={nextProject}
        className=" hover:bg-gray-300 rounded-full p-2 "
        aria-label="Précédent"
      >
        <img src="/chevron-right.svg" className="w-5 h-5" />
      </button>
    </article>
  );
}
