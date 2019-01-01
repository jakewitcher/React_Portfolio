import * as React from "react";
import { quotes } from "../utils/data";
import Quote from "./Quote";
import Title from "./Title";

const Recommendations = () => {
  return (
    <div id="recommendations" className="recommendations">
      <Title title="Recommendations" parentComponent="recommendations" />
      <div className="recommendations__quotes">
        {quotes.map(quote => (
          <Quote quote={quote} key={quote.name} />
        ))}
      </div>
      <div className="recommendations__requests-box">
        <p className="recommendations__requests">
          <span className="recommendations__requests-hyphen">-</span>
          complete letters of recommendation are available upon request
          <span className="recommendations__requests-hyphen">-</span>
        </p>
      </div>
    </div>
  );
};

export default Recommendations;
