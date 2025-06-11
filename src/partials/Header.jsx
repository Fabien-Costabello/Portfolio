import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
    <nav className="flex items-center justify-between bg-bgSection text-white border-b border-theme px-5 py-3 relative">
      <div className="flex items-center">
        <img src="/avatar.png" alt="" className="rounded-full w-12 h-12" />
        <p className="pl-5 font-extrabold text-xl md:text-2xl">
          FABIEN COSTABELLO
        </p>
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl focus:outline-none"
      >
        {menuOpen ? "X" : "☰"}
      </button>

      <ul
        className={`flex-col md:flex md:flex-row gap-5 items-center md:gap-7 absolute md:static bg-bgSection md:bg-transparent w-full left-0 md:w-auto px-5 md:px-0 transition-all duration-300 ease-in-out z-50 ${
          menuOpen ? "top-[70px] py-4" : "top-[-500px]"
        }`}
      >
        <li>
          <a href="#accueil" className="hover:underline">
            ACCUEIL
          </a>
        </li>
        <li>
          <a href="/cv.pdf" className="hover:underline" download >CV</a>
        </li>
        <li>
          <a href="#about" className="hover:underline">
            COMPÉTENCES
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline">
            PROJETS
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
    </header>
  );
}
