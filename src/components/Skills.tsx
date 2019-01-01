import * as React from "react";
import Skill from "./Skill";
import Title from "./Title";

const Skills = () => {
  const developerSkills: string[] = [
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
  const managementSkills: string[] = [
    "Visual Merchandising Manager - 10 years",
    "Regional Manager - 5 years",
    "Manage region of 8 stores",
    "Train new Visual Managers",
    "Manage annual budget of $42,000",
    "Wrote department training material for expense reporting and payroll software"
  ];

  return (
    <div id="skills" className="skills">
      <Title title={"Skills"} parentComponent="skills" />
      <div className="skills__set-box">
        <Skill title="Software" skills={developerSkills} />
        <Skill title="Management" skills={managementSkills} />
      </div>
    </div>
  );
};

export default Skills;
