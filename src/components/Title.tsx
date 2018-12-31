import * as React from "react";

interface ITitleProps {
  title: string;
  parentComponent: string;
  subTitle?: string;
}

const Title = (props: ITitleProps) => {
  const { title, subTitle, parentComponent: component } = props;
  return (
    <div className={`${component}__title-box`}>
      <h1 className={`${component}__title`}>{title}</h1>
      {subTitle && <h2 className={`${component}__subtitle`}>{subTitle}</h2>}
    </div>
  );
};

export default Title;
