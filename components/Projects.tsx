import data from "../public/data.json";
import Title from "./Title";
import { GitHubIcon, VisitIcon } from "./icons";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div id="work" className="md:ml-20 ml-10">
      <Title num={3} title="Some Things I’ve Built" />

      <div className="flex flex-col">
        {data.projects.map((project, i) => (
          <article
            key={i}
            className="flex flex-col items-center mt-10 md:flex-row"
          >
            <div className="relative md:w-[450px] w-[350px] ml-4 h-[250px] rounded-lg">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                className="rounded-lg"
                objectFit="contain"
              />
            </div>

            <div className="ml-2 md:ml-20">
              <h3 className="text-3xl font-semibold text-neon">
                {project.name}
              </h3>
              <p className="text-textDark mt-3 md:max-w-[700px]">
                {project.about}
              </p>
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="inline-block bg-text text-darkerBlue rounded-full px-3 py-1 mt-2 mr-2"
                >
                  {tech}
                </span>
              ))}
              <p className="text-textDark mt-2">
                <span className="text-neon">Role:</span> {project.role}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
