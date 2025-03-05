import ft1 from "../assets/ft1.png";
import ft2 from "../assets/ft2.png";
import icon from "../assets/cursor.png";


import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line react-refresh/only-export-components
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const GlowBg = ({ className }) => {
  return (
    <div
      className={cn(
        "w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(117,60,171,0.9)_0%,rgba(42,18,80,1)_48%,rgba(30,12,59,1)_59%,rgba(25,10,51,1)_63%,rgba(25,10,50,0.05)_70%)] transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2",
        className
      )}
    />
  );
};

const projects = [
  {
    id: 1,
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.Create and save new playlists of recommended tracks based on your existing playlists and more.",
    projectImg: ft1,
  },
  {
    id: 2,
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.Create and save new playlists of recommended tracks based on your existing playlists and more.",
    projectImg: ft2,
  },
];

const Project = () => {
  return (
    <section className="py-8 lg:py-20">
      <div className="flex flex-col space-y-8 lg:space-y-32">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`relative flex flex-col lg:flex-row ${
              i % 2 !== 0 ? "flex-col lg:flex-row-reverse" : ""
            } gap-5 p-5 rounded-2xl`}
          >
            <div className="hidden lg:block">
              <GlowBg
                className={`opacity-70 ${
                  i % 2 !== 0 
                    ? "w-[600px] h-[550px] -translate-x-[670px]"
                    : "w-[700px] h-[660px] -translate-x-36"
                } transform`}
              />
            </div>
            <div
              className={`flex-1 ${
                i % 2 !== 0 ? "text-right" : "text-left"
              } pt-5`}
            >
              <h6 className="text-[#9857D3] font-semibold">Featured Project</h6>
              <h1 className="text-2xl lg:text-3xl font-semibold text-[#ccd6f6]">
                Example Project
              </h1>
              <div
                className={`lg:z-10 lg:absolute ${
                  i % 2 !== 0 ? "transform lg:-translate-x-[90px]" : ""
                }`}
              >
                <div className="text-left bg-[#201335]/30 lg:w-[550px] lg:-mr-10 mt-8 backdrop-blur-2xl py-3 lg:py-5 px-4 lg:px-8 lg:pr-12 text-[#B6BDDE] font-medium rounded-2xl">
                  {project.description}
                </div>
                <div
                  className={`flex ${
                    i % 2 !== 0 ? "justify-end" : "justify-start"
                  } gap-3 pt-5 ${i % 2 !== 0 ? "-mr-5" : "ml-5"}`}
                >
                  <img src={icon} width={28} alt="icon" />
                  <img src={icon} width={28} alt="icon" />
                </div>
              </div>
            </div>
            <div
              className={`relative flex-1 bg-[#2B0B3A] pt-8  ${
                i % 2 !== 0 ? "pr-10" : "pl-10"
              }  rounded-2xl`}
            >
              <img src={project.projectImg} alt="projectImg" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;