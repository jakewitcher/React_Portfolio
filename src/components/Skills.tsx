import * as React from "react";
import Skill from "./Skill";
import Title from "./Title";

const Skills = () => {
  return (
    <div>
      <Title title={"Skills"} />
      <Skill title="Developer" markdown="React, Redux, JS" />
      <Skill title="Manager" markdown="Communication, Training, Region" />
    </div>
  );
};

export default Skills;
