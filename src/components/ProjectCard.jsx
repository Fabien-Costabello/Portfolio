import { useEffect, useRef, useState } from "react";
import parse from "html-react-parser";

export default function ProjectCard({
  title,
  image,
  description,
  link,
  techno,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();
    const sectionRef = useRef(null);


  // Empêche le scroll du body quand la modal est ouverte
  useEffect(() => {
    // Empêche le scroll du body
    if (isOpen) {
      document.body.style.overflow = "hidden";
            sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });

    } else {
      document.body.style.overflow = "";
    }

    // Fonction de fermeture si clic en dehors de la modale
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Ajoute l'écouteur uniquement si la modale est ouverte
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Nettoyage à la fermeture de la modale ou démontage
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
      
    };
  }, [isOpen]);

  const technologies = techno?.map((el) => (
    <img src={el} className="w-8 h-8"></img>
  ));

  const technologiesDétail = techno?.map((el) => (
    <img src={el} className={`w-16 h-16`}></img>
  ));

  return (
    <>
      <article
        onClick={() => setIsOpen(true)}
        className=" cursor-pointer rounded-2xl flex flex-col pb-5 m-auto w-[80%]"
        ref={sectionRef}
      >
        <img src={image} alt="" className="w-auto rounded-t-2xl" />
        <div className=" border-b border-l border-r rounded-b-2xl border-theme shadow-theme-2xl flex flex-col gap-5 p-5 ">
          <h3 className="text-white font-bold text-center">{title}</h3>
          <div className="  flex flex-wrap gap-4 justify-center">
            {technologies}
          </div>
        </div>
      </article>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50   ">
          <div
            ref={modalRef}
            className="  flex flex-col  md:items-center md:gap-5 bg-bgArticle text-white p-8 rounded-2xl max-h-[90vh] w-full max-w-3xl overflow-y-auto relative border border-theme no-scrollbar"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-white text-xl font-bold"
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
            <img src={image} alt="" className="w-auto " />
            <p className="mb-2">{parse(description)}</p>
            <div className="flex flex-wrap gap-4 justify-center pb-5">
              {technologiesDétail}
            </div>
            <a
              href="https://github.com/Fabien-Costabello/Jeu-de-la-vie-"
              className="w-40 text-center border border-theme text-white font-bold rounded-xl p-3 m-auto"
            >
              Github
            </a>
          </div>
        </div>
      )}
    </>
  );
}
