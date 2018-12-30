import * as React from 'react';

interface ITitleProps {
    title: string;
    subTitle?: string;
}

const Title = (props: ITitleProps) => {
    const { title, subTitle } = props;
    return (
        <div>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
        </div>
    )
};

export default Title;