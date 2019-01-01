import * as React from "react";

interface ISocialProps {
  socialIcon: string;
}

const Social = (props: ISocialProps) => {
  const { socialIcon } = props;
  return (
    <div className="social">
      <i className={`${socialIcon} social__icon`} />
    </div>
  );
};

export default Social;
