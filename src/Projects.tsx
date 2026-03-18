import { useNavigate } from "react-router-dom";

import projectsData from "../assets/data/projects.json";

export default function Projects() {
  const navigate = useNavigate();

  const projects = projectsData;

  function handleClick(route: string) {
    if (route.startsWith("http")) {
      window.open(route, "_blank");
      return;
    }
    navigate(route);
  }

  return (
    <div className="p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="w-full p-8 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Mes Projets</h1>
          <p className="text-lg text-gray-600">
            Voici une liste des projets que j'ai réalisés, avec les technologies
            utilisées et une brève description.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-gray-200">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row hover:bg-gray-50 transition-colors"
            >
              <div className="w-full md:w-2/3 p-8 flex flex-col justify-center border-r border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleClick(project.link || "/")}
                  className="px-6 py-2 bg-black text-white rounded-lg transition-all hover:scale-96 w-fit"
                >
                  Voir le projet
                </button>
              </div>

              <div className="w-full md:w-1/3 p-4 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-fit h-fit object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 border-t border-gray-200">
          <button
            onClick={() => handleClick("/")}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all hover:scale-96"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
}
