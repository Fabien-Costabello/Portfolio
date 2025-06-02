import Technologies from "./Technologies";




export default function AboutMe() {
  return (
    <section className="flex flex-col justify-center pb-10 pt-10">
      <div>
        <h2 className="text-center font-bold text-2xl pt-5">A PROPOS DE MOI</h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-blue-500 rounded "></div>

        <p className="pt-4 pb-6 w-[80%] text-center m-auto">
          Ici, vous trouverez plus d’informations sur moi, ce que je fais et
          mes compétences actuelles
        </p>
      </div>
      <Technologies/>
    </section>
  );
}
