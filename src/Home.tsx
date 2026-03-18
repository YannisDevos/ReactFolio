import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  function handleClick(route: string) {
    navigate(route);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center border-r border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Développeur (En quête d'un stage)
          </h1>
          <br />
          <hr />
          <br />
          <p className="text-lg text-gray-600 mb-6">
            Passionné par l'informatique et le développement, je suis
            actuellement à la recherche d'un stage en tant que développeur web
            ou logiciel à partir du 16 mars 2026. <br /> <br /> Curieux et
            motivé, j'aime concevoir des projets qui allient créativité et
            logique. <br /> <br /> En dehors du développement, je m'intéresse
            aux jeux vidéo, au sport, à la musique et à l'astronomie, des
            domaines qui nourrissent ma curiosité et ma créativité. <br />{" "}
            <br /> À travers ce portfolio, je vous invite à découvrir mes
            projets, mes compétences et mon parcours.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => handleClick("/projects")}
              className="px-6 py-2 bg-black text-white rounded-lg transition-all hover:scale-96"
            >
              Mes projets
            </button>
            <button
              onClick={() => handleClick("/studies")}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all hover:scale-96"
            >
              Mes études
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src="./assets/img/mwa.jpg"
            alt="Exemple d'image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
