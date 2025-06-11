import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section  data-aos="fade-up" className="bg-bgSection pt-40 pb-40">
      <article className=" flex flex-col  justify-center w-auto m-auto items-center gap-20 md:flex md:flex-row  ">
        <div className="border border-theme bg-bgArticle gap-5 rounded-3xl p-5 w-auto flex-col flex md:w-120">
          <h1 className="font-bold text-3xl text-theme">Fabien Costabello</h1>
          <h2 className="text-white font-bold text-xl">
            Développeur Full Stack
          </h2>
          <p className="text-white ">
            Développeur passionné par les nouvelles technologies, j’évolue dans
            cet univers depuis plusieurs années. Autonome, motivé et organisé,
            je suis capable de m’approprier rapidement vos outils, frameworks ou
            librairies.
            <br /> <br />
            J’accorde une attention particulière à la qualité et la maintenabilité du code, à la
            bonne conception des bases de données, à la performance des
            applications ainsi qu’à l’expérience utilisateur.
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

  <div className="flex items-center justify-center border border-theme rounded-full p-5">
  <img
    src="/avatar.png"
    alt="image de profil"
    className="rounded-full w-66 h-66 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 border-theme object-cover"
  />
</div>


      </article>
    </section>
  );
}

