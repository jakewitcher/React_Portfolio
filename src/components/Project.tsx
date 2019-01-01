import * as React from "react";
import Image from "./Image";

interface IProjectProps {
  image: string;
  project: string;
  projectDescription: string;
  projectTools: string;
}

const Project = (props: IProjectProps) => {
  const { project, projectDescription, projectTools, image } = props;
  return (
    <div className="project">
      <Image
        src={image}
        alt={`screenshot of ${project} application`}
        parentComponent="project"
      />
      <div className="project__info-box">
        <h3 className="project__name">{project}</h3>
        <p className="project__description">{projectDescription}</p>
        <p className="project__description">
          <span className="project__tools-label">Tools used:</span>{" "}
          {projectTools}
        </p>
      </div>
    </div>
  );
};

export default Project;
