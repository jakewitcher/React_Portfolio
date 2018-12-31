import * as React from "react";
import Projects from "./Projects";
import Title from "./Title";

const RecentWork = () => {
  return (
    <div className="recent-works">
      <Title title="Recent Work" parentComponent="recent-works" />
      <Projects />
    </div>
  );
};

export default RecentWork;
