import * as React from "react";
import Projects from "./Projects";
import Title from "./Title";

const RecentWork = () => {
  const recentWorkTitleClasses = {
    subtitleClass: "",
    titleBoxClass: "",
    titleClass: ""
  };
  return (
    <div>
      <Title title="Recent Work" componentClasses={recentWorkTitleClasses} />
      <Projects />
    </div>
  );
};

export default RecentWork;
