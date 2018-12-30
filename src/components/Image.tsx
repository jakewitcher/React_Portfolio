import * as React from 'react';

interface IImageProps {
    src: string;
    alt: string;
}

const Image = (props: IImageProps) => {
    const { src, alt } = props;
    return (
        <div>
            <img src={src} alt={alt} style={{ height: '200px', width: '200px' }} />
        </div>
    )
};

export default Image;
