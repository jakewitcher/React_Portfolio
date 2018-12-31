import * as React from "react";
import Projects from "./Projects";
import Title from "./Title";

const RecentWork = () => {
  const recentWorkTitleClasses = {
    titleBoxClass: "recent-works__title-box",
    titleClass: "recent-works__title"
  };
  return (
    <div className="recent-works">
      <Title title="Recent Work" componentClasses={recentWorkTitleClasses} />
      <Projects />
    </div>
  );
};

export default RecentWork;
