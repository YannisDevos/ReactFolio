import { useParams } from "react-router";
import projectsData from "./assets/data/projects.json";
import type { Project } from "./Projects";
import Slider from "./Slider";

export default function Details() {
  const { id } = useParams();

  const project: Project = projectsData.find(
    (p) => p.id === Number(id),
  ) as Project;

  return (
    <div className="pl-5 pr-5">
      <div className="backdrop-blur-2xl max-w-7xl mx-auto rounded-lg overflow-hidden flex flex-col bg-white/5 border-white/30 border text-white mt-8">
        <div className="w-full p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/15 border border-white/30 backdrop-blur-2xl text-white rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Slider en dessous sur PC et mobile */}
        <div className="w-full md:h-125 p-6">
          <Slider project={project} />
        </div>

        {project.gh && (
          <div className="pb-10 md:pt-5 justify-center flex">
            <button
              onClick={() => window.open(project.gh, "_blank")}
              className="w-2/3 md:w-1/2 px-6 py-2 bg-white/15 border border-white/30 rounded-lg transition-all hover:scale-96"
            >
              Voir sur Github
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
