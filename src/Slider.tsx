import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "./index.css";
import type { Project } from "./Projects";

export default function Slider({ project }: { project: Project }) {
  return (
    <div className="w-full h-full">
      <Swiper
        scrollbar={{ hide: true }}
        modules={[Scrollbar]}
        loop={true}
        className="mySwiper w-full h-full"
      >
        {project.demo?.map((img) => (
          <SwiperSlide
            key={img}
            className="h-full flex justify-center items-center"
          >
            <div className="h-full flex justify-center items-center">
              <img
                src={`${import.meta.env.BASE_URL}/img/demos/${project.dirName}/${img}`}
                alt={img}
                className="h-full w-auto object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
