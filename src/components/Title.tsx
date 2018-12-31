import * as React from "react";

interface IComponentClasses {
  titleClass: string;
  titleBoxClass: string;
  subtitleClass?: string;
}

interface ITitleProps {
  title: string;
  componentClasses: IComponentClasses;
  subTitle?: string;
}

const Title = (props: ITitleProps) => {
  const { title, subTitle } = props;
  const { titleClass, titleBoxClass, subtitleClass } = props.componentClasses;
  return (
    <div className={titleBoxClass}>
      <h1 className={titleClass}>{title}</h1>
      {subTitle && <h2 className={subtitleClass}>{subTitle}</h2>}
    </div>
  );
};

export default Title;
