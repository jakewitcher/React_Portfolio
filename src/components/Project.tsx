import * as React from "react";

interface IProjectProps {
  project: string;
}

const Project = (props: IProjectProps) => {
  const { project } = props;
  return (
    <div>
      <p>{project}</p>
    </div>
  );
};

export default Project;
