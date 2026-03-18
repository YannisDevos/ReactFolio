import { useState } from "react";
import { Link } from "react-router";

export default function Header() {
  const linkcss =
    "relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full";

  const activecss = "after:w-full";

  const [activeLink, setActiveLink] = useState("/");
  console.log(activeLink);

  return (
    <header className="bg-gray-200 shadow-md">
      <div className="w-full px-10 py-10 flex items-center">
        <div className="text-3xl font-semibold">Yannis Devos</div>

        <nav className="flex space-x-8 ml-32">
          <Link
            to="/"
            className={activeLink === "/" ? linkcss + " " + activecss : linkcss}
            onClick={() => setActiveLink("/")}
          >
            Accueil
          </Link>
          <Link
            to="/projects"
            className={
              activeLink === "/projects" ? linkcss + " " + activecss : linkcss
            }
            onClick={() => setActiveLink("/projects")}
          >
            Projets
          </Link>
          <Link
            to="/studies"
            className={
              activeLink === "/studies" ? linkcss + " " + activecss : linkcss
            }
            onClick={() => setActiveLink("/studies")}
          >
            Études
          </Link>
          <Link
            to="/contact"
            className={
              activeLink === "/contact" ? linkcss + " " + activecss : linkcss
            }
            onClick={() => setActiveLink("/contact")}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
