import * as React from "react";

interface ISocialProps {
  socialIcon: string;
  socialUrl: string;
}

const Social = (props: ISocialProps) => {
  const { socialIcon, socialUrl } = props;
  return (
    <a href={socialUrl} rel="noopener noreferrer" className="social">
      <i className={socialIcon} />
    </a>
  );
};

export default Social;
