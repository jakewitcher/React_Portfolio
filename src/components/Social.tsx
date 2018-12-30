import * as React from 'react';

interface ISocialProps {
    social: string;
}

const Social = (props: ISocialProps) => {
    const { social } = props;
    return (
        <div>
            <p>{social}</p>
        </div>
    )
}

export default Social;