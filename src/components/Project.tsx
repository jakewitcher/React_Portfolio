import * as React from "react";
import Image from "./Image";

interface IProjectProps {
  project: string;
  projectDescription: string;
  image: string;
}

const Project = (props: IProjectProps) => {
  const { project, projectDescription, image } = props;
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
      </div>
    </div>
  );
};

export default Project;
