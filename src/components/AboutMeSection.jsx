import Technologies from "./Technologies";

export default function AboutMe() {
  return (
    <section id="about" className="flex flex-col justify-center pb-40 text-white  m-auto gap-25 ">
      <div className="">
        <h2 className="text-center font-bold text-2xl pt-5">COMPÉTENCES</h2>
       <div className="mx-auto mt-2 h-1 w-[80%] rounded bg-gradient-to-r from-transparent via-theme to-transparent"></div>

      </div>
      <Technologies />
    </section>
  );
}
