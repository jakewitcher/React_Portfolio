import * as React from 'react';
import Title from './Title';
import Skill from './Skill';

const Skills = () => {
    return (
        <div>
            <Title title={'Skillsets'} />
            <Skill title='Developer' markdown='React, Redux, JS' />
            <Skill title='Manager' markdown='Communication, Training, Region' />
        </div>
    )
}

export default Skills;