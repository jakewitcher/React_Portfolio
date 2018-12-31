import * as React from "react";
import Quote from "./Quote";
import Title from "./Title";

const Recommendations = () => {
  const quote1 = {
    company: "Martin",
    name: "John Son",
    position: "Front-End Developer",
    quote:
      "Jake's depth of knowledge of functional programming and Javascript led to engaging discussions about the language, which inadvertently gave me a deeper understanding about React (as a React developer of 2 years)."
  };
  const quote2 = {
    company: "Sparkbox",
    name: "Melissa Thompson",
    position: "Developer",
    quote:
      "Jake was great to work with. His knowledge of React was clear in his ability to answer questions and work through problems with the rest of the team."
  };
  return (
    <div className="recommendations">
      <Title title="Recommendations" parentComponent="recommendations" />
      <div className="recommendations__quotes">
        <Quote quote={quote1} />
        <Quote quote={quote2} />
      </div>
    </div>
  );
};

export default Recommendations;
