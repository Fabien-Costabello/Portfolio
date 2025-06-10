import { techs } from "../assets/data/technologies";
import Technologie from "./Technologie";

export default function Technologies() {

  const technosFront = techs
    .filter((el) => el.stack === "front")
    .map((el) => (
      <Technologie
        src={el.src}
        alt={el.alt}
        label={el.label}
        htmlFor={el.htmlFor}
        className={el.className}
      />
    ));

      const technosBack = techs
    .filter((el) => el.stack === "back")
    .map((el) => (
      <Technologie
        src={el.src}
        alt={el.alt}
        label={el.label}
        htmlFor={el.htmlFor}
        className={el.className}
      />
    ));

         const technosTools= techs
    .filter((el) => el.stack === "outil")
    .map((el) => (
      <Technologie
        src={el.src}
        alt={el.alt}
        label={el.label}
        htmlFor={el.htmlFor}
        className={el.className}
      />
    ));

    

  return (
    <>
      <article data-aos="fade-up" className="w-auto m-auto   p-10 bg-bgArticle border border-theme rounded-3xl flex flex-col gap-4 pt-3 pb-6">
        <h3 className="text-center  font-bold text-xl pb-5">FrontEnd</h3>
        <div className="grid grid-cols-3 gap-5  md:grid-cols-6 md:gap-15">{technosFront}</div>
      </article>

      <article data-aos="fade-up" className="w-auto m-auto p-10  bg-bgArticle border border-theme rounded-3xl flex flex-col gap-4 pt-3 pb-6">
        <h3 className="text-center  font-bold  text-xl">BackEnd</h3>
        <div className="grid grid-cols-3 gap-5  md:grid-cols-6 md:gap-15">{technosBack}</div>
      </article>

       <article data-aos="fade-up" className="w-auto  m-auto p-10 bg-bgArticle border border-theme rounded-3xl flex flex-col gap-4 pt-3 pb-6">
        <h3 className="text-center  font-bold  text-xl">Outils</h3>
        <div className="grid grid-cols-3  md:grid-cols-6 gap-5 md:gap-15">{technosTools}</div>
      </article>
    </>
  );
}
