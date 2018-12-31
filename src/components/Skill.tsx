import * as React from "react";

interface ISkillProps {
  skills: string[];
  title: string;
}

const DeveloperSkills = (props: ISkillProps) => {
  const { skills, title } = props;
  return (
    <div className="skill">
      <div className="skill__title-box">
        <h3 className="skill__title">{title}</h3>
      </div>
      <div className="skill__box">
        {skills.map((skill: string) => (
          <p className="skill__name" key={skill}>
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DeveloperSkills;
