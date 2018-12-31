import * as React from "react";

interface IQuoteProps {
  quote: {
    quote: string;
    name: string;
    position: string;
    company: string;
  };
}

const Quote = (props: IQuoteProps) => {
  const { quote, name, position, company } = props.quote;
  return (
    <div className="quote__box">
      <p className="quote">{`"${quote}"`}</p>
      <div className="quote__author-details">
        <p className="quote__author">{name}</p>
        <p className="quote__author-position">{position}</p>
        <p className="quote__author-company">{company}</p>
      </div>
    </div>
  );
};

export default Quote;
