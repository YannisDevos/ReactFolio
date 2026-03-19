import { useNavigate } from "react-router-dom";
import projectsData from "./assets/data/projects.json";

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
    <div>
      <div className="max-w-7xl mx-auto rounded-lg overflow-hidden">
        <div className="w-full p-8">
          <h1 className="text-3xl font-bold text-white mb-4">Mes Projets</h1>
          <p className="text-lg text-white">
            Voici une liste des projets que j'ai réalisés, avec les technologies
            utilisées et une brève description.
          </p>
        </div>

        <div className="flex flex-col gap-6 p-6">
          {projects.map((project) => (
            <div
              onClick={() => handleClick(project.link)}
              key={project.id}
              className="cursor-pointer bg-white/10 border-white/20 border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row"
            >
              <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-white mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-1/3 p-4 flex items-center justify-center bg-gray-600">
                <img
                  src={`${import.meta.env.BASE_URL}${project.image}`}
                  alt={project.title}
                  className="w-fit h-fit object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
