import * as React from "react";

interface ITextProps {
  subText: string;
}

const Text = (props: ITextProps) => {
  const { subText } = props;
  return (
    <div className="home__text-box">
      <p className="home__text">{subText}</p>
    </div>
  );
};

export default Text;
