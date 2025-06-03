import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex justify-between">
      <div className="p-5 flex items-center">
        <img src="/avatar.png" alt="" className="rounded-full w-22 h-22  " />
        <p className="pl-5 font-extrabold text-2xl">FABIEN COSTABELLO</p>
      </div>

      <ul className="flex flex-row gap-7 items-center pe-5 ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline font-bold" : "hover:underline"
            }
          >
            ACCUEIL
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cv"
            className={({ isActive }) =>
              isActive ? "underline font-bold" : "hover:underline"
            }
          >
            CV
          </NavLink>
        </li>
        <li>
          <a href="" className="hover:underline">
            A PROPOS
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
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
  );
}
