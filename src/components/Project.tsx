import * as React from "react";

interface IProjectProps {
  image: string;
  project: string;
  projectDescription: string;
  projectTools: string;
  projectSourceCode: string;
  projectUrl: string;
}

const Project = (props: IProjectProps) => {
  const {
    image,
    project,
    projectDescription,
    projectSourceCode,
    projectTools,
    projectUrl
  } = props;
  return (
    <div className="project">
      <div className={`project__image-box project__image-box--${image}`}>
        <div className="project__link-box">
          {projectUrl && (
            <a
              className="project__link"
              href={projectUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              View Site
            </a>
          )}
          <a
            className="project__link"
            href={projectSourceCode}
            rel="noopener noreferrer"
            target="_blank"
          >
            View Source Code
          </a>
        </div>
      </div>
      <div className="project__info-box">
        <h3 className="project__name">{project}</h3>
        <p className="project__description">{projectDescription}</p>
        <p className="project__description">
          <span className="project__tools-label">Tools used:</span>{" "}
          {projectTools}
        </p>
      </div>
      <div className="project__link-box--mobile">
        {projectUrl && (
          <a
            className="project__link--mobile"
            href={projectUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            View Site
          </a>
        )}
        <a
          className="project__link--mobile"
          href={projectSourceCode}
          rel="noopener noreferrer"
          target="_blank"
        >
          View Source Code
        </a>
      </div>
    </div>
  );
};

export default Project;
