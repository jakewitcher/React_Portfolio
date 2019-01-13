import * as React from "react";

interface ITextProps {
  subText: string;
  parentComponent: string;
  mobile: string;
}

const Text = (props: ITextProps) => {
  const { subText, parentComponent: component, mobile } = props;
  return (
    <div className={`${component}__text-box${mobile}`}>
      <p className={`${component}__text`}>{subText}</p>
    </div>
  );
};

export default Text;
