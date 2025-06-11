import { parcours } from "../assets/data/parcours";

export default function AboutMeSection() {
  const diplomes = parcours
    .filter((el) => el.type === "diplome")
    .map((el) => {
      return (
        <article className=" border border-theme bg-bgArticle gap-5 rounded-3xl p-5 w-[80%] m-auto flex-col flex md:w-120 ">
          <h3 className="text-theme font-bold text-xl">{el.title}</h3>
          <h3 className=" font-bold text-xl">{el.date}</h3>
        </article>
      );
    });

    const experience = parcours
    .filter((el) => el.type === "experience")
    .map((el) => {
      return (
        <article className=" border border-theme bg-bgArticle gap-5 rounded-3xl p-5 w-[80%] m-auto flex-col flex md:w-120 ">
          <h3 className="text-theme font-bold text-xl">{el.title}</h3>
          <h3 className=" font-bold text-xl">{el.date}</h3>
        </article>
      );
    });


    function handeClick(){
      const diplomeDisplay = ""
    }

  return (
    <section
      id="about"
      className="flex flex-col justify-center pb-40 text-white  m-auto gap-10 "
    >
      <div className="">
        <h2 className="text-center font-bold text-2xl pt-5 ">MON PARCOURS</h2>
        <div className="mx-auto mt-2 h-1 w-[80%] rounded bg-gradient-to-r from-transparent via-theme to-transparent"></div>
      </div>
      <button onClick={handeClick}>Click</button>
      {diplomes}
      {experience}
    </section>
  );
}
