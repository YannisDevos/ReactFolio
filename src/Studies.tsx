import { useNavigate } from "react-router-dom";
import studiesData from "./assets/data/studies.json";
import type { ReactNode } from "react";

interface Study {
  id: number;
  title: string;
  establishment: string;
  description: string;
  image: string;
  link: string;
}

export default function Studies() {
  const navigate = useNavigate();
  const studies = studiesData;

  function getImgElement(study: Study): ReactNode {
    return (
      <div className="w-full md:w-1/3 p-4 flex items-center justify-center backdrop-blur-xl">
        <img
          src={`${import.meta.env.BASE_URL}${study.image}`}
          alt="Study Image"
          className="w-fit h-fit object-cover rounded-lg"
        />
      </div>
    );
  }

  function getContent(study: Study): ReactNode {
    return (
      <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold text-white mb-2">
          {study.title}
        </h2>
        <p className="text-white mb-4">{study.description}</p>
        <button
          className="cursor-pointer px-6 py-2 bg-white/15 border border-white/30 rounded-lg transition-all hover:scale-96"
          onClick={() => handleClick(study.link)}
        >
          Site de {study.establishment}
        </button>
      </div>
    );
  }

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
        <div className="flex flex-col gap-6 p-6">
          {studies.map((study) => {
            if (study.id % 2 !== 0) {
              return (
                <div
                  key={study.id}
                  className="text-white backdrop-blur-2xl bg-white/5 border-white/30 border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row"
                >
                  {getImgElement(study)}
                  {getContent(study)}
                </div>
              );
            } else {
              return (
                <div
                  key={study.id}
                  className="text-white backdrop-blur-2xl bg-white/5 border-white/30 border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row"
                >
                  {getContent(study)}
                  {getImgElement(study)}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
