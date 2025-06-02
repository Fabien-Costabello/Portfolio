export default function HeroSection() {
  return (
    <section className="bg-[url('/heroImg.jpg')] bg-cover h-96 flex flex-col items-center justify-center ">
      <div>
        <p className="font-bold text-4xl">BONJOUR, JE SUIS FABIEN COSTABELLO</p>
        <p className="font-bold w-[70%] text-center	m-auto pt-3">
          Un développeur web fullstack, qui peut construire et maintenir vos
          sites web ou applications
        </p>
      </div>
    </section>
  );
}
