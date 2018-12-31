import * as React from "react";

interface IImageProps {
  src: string;
  alt: string;
  parentComponent: string;
}

const Image = (props: IImageProps) => {
  const { src, alt, parentComponent: component } = props;
  return (
    <div className={`${component}-image-box`}>
      <img src={src} alt={alt} className={`${component}-image`} />
    </div>
  );
};

export default Image;
