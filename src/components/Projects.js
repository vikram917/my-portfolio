import React from "react";
import Project from "./Project";
import { projects } from "@/utils/data";

const Projects = () => {
  return (
    <div className="flex flex-row flex-wrap p-10">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          technologies={project.technologies}
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
        />
      ))}
    </div>
  );
};

export default Projects;
