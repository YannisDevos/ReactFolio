import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const linkcss =
    "relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full";

  const activecss = "after:w-full";
  const [activeLink, setActiveLink] = useState("/");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => (num < 10 ? `0${num}` : num);

  return (
    <header
      className="text-white m-10 p-4
  rounded-xl
  border border-white/30
  bg-white/5
  backdrop-blur-2xl
  shadow-lg
  transition-all"
    >
      <div className="w-full px-4 md:px-10 py-4 md:py-6 flex flex-col md:flex-row md:items-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-20">
            <div className="text-2xl md:text-3xl font-semibold whitespace-nowrap">
              Yannis Devos
            </div>
            <nav className="hidden md:flex md:space-x-8">
              <Link
                to="/"
                className={
                  activeLink === "/" ? `${linkcss} ${activecss}` : linkcss
                }
                onClick={() => setActiveLink("/")}
              >
                Accueil
              </Link>
              <Link
                to="/projects"
                className={
                  activeLink === "/projects"
                    ? `${linkcss} ${activecss}`
                    : linkcss
                }
                onClick={() => setActiveLink("/projects")}
              >
                Projets
              </Link>
              <Link
                to="/studies"
                className={
                  activeLink === "/studies"
                    ? `${linkcss} ${activecss}`
                    : linkcss
                }
                onClick={() => setActiveLink("/studies")}
              >
                Études
              </Link>
              <Link
                to="/contact"
                className={
                  activeLink === "/contact"
                    ? `${linkcss} ${activecss}`
                    : linkcss
                }
                onClick={() => setActiveLink("/contact")}
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="hidden md:block text-lg font-medium whitespace-nowrap">
            {formatTime(currentTime.getHours())} :{" "}
            {formatTime(currentTime.getMinutes())} :{" "}
            {formatTime(currentTime.getSeconds())}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="flex flex-col space-y-4 md:hidden mt-4">
            <Link
              to="/"
              className={
                activeLink === "/" ? `${linkcss} ${activecss}` : linkcss
              }
              onClick={() => {
                setActiveLink("/");
                setIsMenuOpen(false);
              }}
            >
              Accueil
            </Link>
            <Link
              to="/projects"
              className={
                activeLink === "/projects" ? `${linkcss} ${activecss}` : linkcss
              }
              onClick={() => {
                setActiveLink("/projects");
                setIsMenuOpen(false);
              }}
            >
              Projets
            </Link>
            <Link
              to="/studies"
              className={
                activeLink === "/studies" ? `${linkcss} ${activecss}` : linkcss
              }
              onClick={() => {
                setActiveLink("/studies");
                setIsMenuOpen(false);
              }}
            >
              Études
            </Link>
            <Link
              to="/contact"
              className={
                activeLink === "/contact" ? `${linkcss} ${activecss}` : linkcss
              }
              onClick={() => {
                setActiveLink("/contact");
                setIsMenuOpen(false);
              }}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
