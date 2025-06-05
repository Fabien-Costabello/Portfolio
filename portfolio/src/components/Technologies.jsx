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
      <article className="w-[30%] m-auto   bg-bgArticle border border-theme rounded-3xl flex flex-col gap-4 pt-3 pb-6">
        <h3 className="text-center  font-bold text-xl">FrontEnd</h3>
        <div className="grid grid-cols-5 gap-6 ">{technosFront}</div>
      </article>

      <article className="w-[30%] m-auto   bg-bgArticle border border-theme rounded-3xl flex flex-col gap-4 pt-3 pb-6">
        <h3 className="text-center  font-bold  text-xl">BackEnd</h3>
        <div className="grid grid-cols-5 gap-6">{technosBack}</div>
      </article>

       <article className="m-auto w-[30%]  bg-bgArticle border border-theme rounded-3xl flex flex-col gap-4 pt-3 pb-6">
        <h3 className="text-center  font-bold  text-xl">Outils</h3>
        <div className="grid grid-cols-5 gap-6">{technosTools}</div>
      </article>
    </>
  );
}

// <div className="flex flex-col items-center gap-1 hover:scale-150">
//         <img
//           src="/JavaScript.svg"
//           alt="logo javascript"
//           className="w-13 h-13 "
//         />
//         <label htmlFor="javascript" className="text-xs font-bold">
//           JavaScript
//         </label>
//       </div>
//       <div className="flex flex-col items-center gap-1 ">
//         <img src="/CSS3.svg" alt="logo css" className="w-13 h-13" />
//         <label htmlFor="css" className="text-xs font-bold ">
//           CSS
//         </label>
//       </div>
//       <div className="flex flex-col items-center gap-1 ">
//         <img src="/Docker.svg" alt="logo docker" className="w-13 h-13" />
//         <label htmlFor="docker" className="text-xs font-bold">
//           Docker
//         </label>
//       </div>
//       <div className="flex flex-col items-center gap-1 ">
//         <img src="/Git.svg" alt="logo git" className="w-13 h-13" />
//         <label htmlFor="git" className="text-xs font-bold">
//           Git
//         </label>
//       </div>
//       <div className="flex flex-col items-center gap-1 ">
//         <img src="/GitHub.svg" alt="logo github" className="w-13 h-13" />
//         <label htmlFor="github" className="text-xs font-bold">
//           Github
//         </label>
//       </div>
//       <div className="flex flex-col items-center gap-1 ">
//         <img src="/HTML5.svg" alt="logo html" className="w-13 h-13" />
//         <label htmlFor="html" className="text-xs font-bold">
//           HTML5
//         </label>
//       </div>
//       <div className="flex flex-col items-center gap-1 ">
//         <img src="/MongoDB.svg" alt="logo mongodb" className="w-13 h-13" />
//         <label htmlFor="mongodb" className="text-xs font-bold">
//           MongoDB
//         </label>
//       </div>
//       <div className="flex flex-col items-center gap-1 ">
//         <img src="/Node.js.svg" alt="logo node" className="w-13 h-13" />
//         <label htmlFor="node" className="text-xs font-bold">
//           Node.js
//         </label>
//       </div>
//       <div className="flex flex-col items-center gap-1 ">
//         <img src="/PHP.svg" alt="logo php" className="w-13 h-13" />
//         <label htmlFor="php" className="text-xs font-bold">
//           PHP
//         </label>
//       </div>
//       <div className="flex flex-col items-center gap-1 ">
//         <img src="/React.svg" alt="logo react" className="w-13 h-13" />
//         <label htmlFor="react" className="text-xs font-bold">
//           React
//         </label>
//       </div>
//       <div className="flex flex-col items-center gap-1 ">
//         <img
//           src="/Tailwind CSS.svg"
//           alt="logo tailwind"
//           className="w-13 h-13"
//         />
//         <label htmlFor="tailwind" className="text-xs font-bold">
//           Tailwind
//         </label>
//       </div>
//       <div className="flex flex-col items-center gap-1 ">
//         <img
//           src="/TypeScript.svg"
//           alt="logo typescript"
//           className="w-13 h-13"
//         />
//         <label htmlFor="typescript" className="text-xs font-bold">
//           TypeScript
//         </label>
//       </div>
//       <div className="flex flex-col items-center gap-1 ">
//         <img src="/Express.svg" alt="logo express" className="w-13 h-13" />
//         <label htmlFor="express" className="text-xs font-bold">
//           Express
//         </label>
//       </div>
//       <div className="flex flex-col items-center gap-1 ">
//         <img src="/MySQL.svg" alt="logo mysql" className="w-13 h-13" />
//         <label htmlFor="mysql" className="text-xs font-bold">
//           MySQL
//         </label>
//       </div>
