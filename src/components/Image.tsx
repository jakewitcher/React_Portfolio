import * as React from "react";

interface IComponentClasses {
  imageClass: string;
  imageBoxClass: string;
}

interface IImageProps {
  src: string;
  alt: string;
  componentClasses: IComponentClasses;
}

const Image = (props: IImageProps) => {
  const { src, alt } = props;
  const { imageClass, imageBoxClass } = props.componentClasses;
  return (
    <div className={imageBoxClass}>
      <img src={src} alt={alt} className={imageClass} />
    </div>
  );
};

export default Image;
