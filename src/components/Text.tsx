import * as React from "react";

interface ITextProps {
  subText: string;
  parentComponent: string;
}

const Text = (props: ITextProps) => {
  const { subText, parentComponent: component } = props;
  return (
    <div className={`${component}__text-box`}>
      <p className={`${component}__text`}>{subText}</p>
    </div>
  );
};

export default Text;
