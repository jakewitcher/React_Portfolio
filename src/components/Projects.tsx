import * as React from "react";
import { projects } from "../utils/data";
import Project from "./Project";

const Projects = () => (
  <div className="projects">
    {projects.map(project => (
      <Project
        project={project.name}
        projectDescription={project.description}
        projectSourceCode={project.sourceCode}
        projectTools={project.tools}
        projectUrl={project.url}
        image={project.image}
        key={project.name}
      />
    ))}
  </div>
);

export default Projects;
