import * as React from "react";
import Quote from "./Quote";
import Title from "./Title";

const Recommendations = () => {
  return (
    <div>
      <Title title="Recommendations" />
      <Quote
        quote="good job"
        name="John Son"
        position="Front-End Developer"
        company="Martin"
      />
      <Quote
        quote="best ever"
        name="Melissa Thompson"
        position="Front-End Developer"
        company="Sparkbox"
      />
    </div>
  );
};

export default Recommendations;
