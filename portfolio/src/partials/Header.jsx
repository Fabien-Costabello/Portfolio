export default function Header() {
  return (
    <nav className="flex justify-between">
      <div className="p-10 flex items-center">
        <img
          src="/avatar.png"
          alt=""
          className="rounded-full w-25 h-25  "
        />
        <p className="pl-5 font-extrabold text-2xl">FABIEN COSTABELLO</p>
      </div>

      <ul className="flex flex-row gap-7 items-center pe-5 ">
        <li>ACCUEIL</li>
        <li>CV</li>
        <li>A PROPOS</li>
        <li>PROJETS</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
}
