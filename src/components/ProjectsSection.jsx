import ProjectCard from "./ProjectCard";
import ProjectSlider from "./ProjectSlider";
import { projects } from "../assets/data/projects";



export default function ProjectsSection(){
  
  

  const porjectsList = projects.map((el)=>{
  return  <ProjectCard title={el.title} image={el.image} description={el.description} techno={el.techno}/>
    
  })

    return(
        <section id="projects" className="flex flex-col justify-center pb-40 ">
      <div className="pb-10">
        <h2 className="text-center font-bold text-2xl pt-5 text-white">PROJETS</h2>
       <div className="mx-auto mt-2 h-1 w-[80%] rounded bg-gradient-to-r from-transparent via-theme to-transparent"></div>

        <p className="pt-4 pb-6 w-[40%] text-center m-auto text-white">
          Ici, vous trouverez un aperçu des projets d'écoles que j’ai créés ainsi que les technologies utilisés
        </p>
      </div >
      <div data-aos="fade-up" className=" md:grid md:grid-cols-3 w-auto flex flex-col  "> 
     {porjectsList}

      </div>
    </section>
    )
}