import * as React from "react";
import utils from "../utils/constants";

interface ITextProps {
  parentComponent: string;
  mobile: string;
}

const { WORDPRESS_URL } = utils.social;

const Text = (props: ITextProps) => {
  const { parentComponent: component, mobile } = props;
  return (
    <div className={`${component}__text-box${mobile}`}>
      <p className={`${component}__text`}>
        Hi, my name is Jake and I'm a software developer. I love using
        functional programming concepts in JavaScript and building web
        applications with React. You can find articles I've written on these
        subjects and more on my blog,{" "}
        <a
          href={WORDPRESS_URL}
          rel="noopener noreferrer"
          className={`${component}__text-link`}
          target="_blank"
        >
          "Code for Nerds."
        </a>
      </p>
      <p className={`${component}__text`}>
        I am also an aspiring conference speaker and will be speaking at the
        Momentum Developer’s Conference in March on “Learning at the Speed of
        JavaScript” and in April at Lamda Squared on “Function Composition in
        JS.”
      </p>
    </div>
  );
};

export default Text;
