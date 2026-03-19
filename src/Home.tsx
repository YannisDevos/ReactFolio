import { useNavigate } from "react-router";
import mwa from "/img/mwa.jpg";

export default function Home() {
  const navigate = useNavigate();

  function handleClick(route: string) {
    navigate(route);
  }

  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;

  const age = month >= 3 ? year - 2005 : year - 2005 - 1;

  return (
    <div className="pl-5 pr-5">
      <div className="backdrop-blur-2xl max-w-7xl mx-auto rounded-lg overflow-hidden flex flex-col md:flex-row bg-white/5 border-white/30 border text-white">
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">
            Développeur (En quête d'un stage)
          </h1>
          <br />
          <br />
          <p className="text-lg mb-6">
            J'ai {age} ans et je suis passionné par l'informatique, en
            particulier par le développement web et logiciel. <br />{" "}
            Actuellement, je suis à la recherche d'un stage à partir du 16 mars
            2026 afin de mettre en pratique mes compétences et continuer à
            progresser.
            <br /> <br /> Curieux et motivé, j'aime concevoir des projets qui
            allient logique et créativité, en relevant de nouveaux défis
            techniques. <br /> <br />
            En dehors du développement, je m'intéresse aux jeux vidéo, au sport,
            à la musique ainsi qu'à l'astronomie, des univers qui stimulent mon
            imagination et enrichissent ma façon de penser. <br /> <br /> À
            travers ce portfolio, je vous invite à découvrir mon parcours, mes
            compétences et les différents projets que j'ai réalisés.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => handleClick("/projects")}
              className="px-6 py-2 bg-white/15 border border-white/30 rounded-lg transition-all hover:scale-96"
            >
              Mes projets
            </button>
            <button
              onClick={() => handleClick("/studies")}
              className="px-6 py-2 bg-white/15 border border-white/30 rounded-lg transition-all hover:scale-96"
            >
              Mes études
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src={mwa}
            alt="mwa.jpg"
            className="w-full h-full object-cover md:rounded-bl-full"
          />
        </div>
      </div>
    </div>
  );
}
