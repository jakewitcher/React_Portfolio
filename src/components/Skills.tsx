import * as React from "react";
import Skill from "./Skill";
import Title from "./Title";

const Skills = () => {
  const technicalSkills: string[] = [
    "React",
    "Redux",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "SASS",
    "Git",
    "Jest"
  ];
  const interpersonalSkills: string[] = [
    "Management - 10 years",
    "Regional Management - 5 years",
    "Communication",
    "Training",
    "Time Management",
    "Team Leadership",
    "Writing",
    "Public Speaking"
  ];

  return (
    <div id="skills" className="skills">
      <Title title={"Skills"} parentComponent="skills" />
      <div className="skills__set-box">
        <Skill title="Technical" skills={technicalSkills} />
        <Skill title="Interpersonal" skills={interpersonalSkills} />
      </div>
    </div>
  );
};

export default Skills;
