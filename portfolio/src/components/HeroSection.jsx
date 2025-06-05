import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="bg-bgSection pt-40 pb-40">
      <article className=" flex justify-around w-260  m-auto items-center">
        <div className="border border-theme bg-bgArticle gap-5 rounded-3xl p-5 w-100 flex-col flex">
          <h1 className="font-bold text-3xl text-theme">Fabien Costabello</h1>
          <h2 className="text-white font-bold text-xl">
            Développeur Full Stack
          </h2>
          <p className="text-white">
            Développeur passionné par les nouvelles technologies, j’évolue dans
            cet univers depuis plusieurs années.Autonome, motivé et adaptable,
            je suis capable de m’approprier rapidement vos outils, frameworks ou
            librairies.
            <br /> <br />
            J’accorde une attention particulière à la qualité du code, à la
            structuration des bases de données, à la performance des
            applications ainsi qu’à l’expérience utilisateur (UX).
          </p>

          <div className="flex  gap-4 p-2">
            <a
              href="https://github.com/Fabien-Costabello"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white p-2 hover:bg-gray-700 transition border border-theme rounded-full "
            >
              <FaGithub size={54} className="border-theme  " />
            </a>
            <a
              href="https://www.linkedin.com/in/fabien-costabello"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-2  hover:bg-blue-500 transition  rounded-full"
            >
              <FaLinkedin size={54} />
            </a>
          </div>
        </div>

      <div className="flex items-center   justify-center border border-theme rounded-full p-5 w-[22rem] h-[22rem]">
  <img
    src="/avatar.png"
    alt=""
    className="rounded-full w-80 h-80 border-theme"
  />
</div>

      </article>
    </section>
  );
}

///Ancienne HeroSectio

//  <section className="bg-[url('/heroImg.jpg')] bg-cover h-96 flex flex-col items-center justify-center ">
//     <div>
//       <p className="font-bold text-4xl text-center ">BONJOUR, JE SUIS FABIEN COSTABELLO</p>
//       <p className="w-[70%] text-center	m-auto pt-3">
//         Je suis un développeur passionné par les nouvelles technologies, baignant dans ce milieu depuis longtemps. Autonome, motivé et adaptable, je suis capatble de manier et de m'adapter à votre framework / librairie.
//       </p>
//     </div>
//   </section>
