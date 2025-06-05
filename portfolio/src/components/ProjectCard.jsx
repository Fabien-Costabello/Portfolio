import { projects } from "../assets/data/projects";

export default function ProjectCard() {
  const technologies = projects[0].img.map((el) => (
    <img src={el} className="w-8 h-8 rounded-full "></img>
  ));

  return (
    <article className="w-80 rounded-2xl flex flex-col gap-5 border border-theme pb-5 m-auto">
      <img src="/piggame.png" alt="" className="w-80 h-80 rounded-t-2xl" />
      <h3 className="text-white font-bold text-center">PigGame</h3>
      <div className="  flex justify-center gap-2">{technologies}</div>
    </article>
  );
}
