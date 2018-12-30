import * as React from 'react';

interface ISkillProps {
    markdown: string;
    title: string;
}

const Skill = (props: ISkillProps) => {
    const { markdown, title } = props;
    return (
        <div>
            <h3>{title}</h3>
            <p>{markdown}</p>
        </div>
    )
}

export default Skill;