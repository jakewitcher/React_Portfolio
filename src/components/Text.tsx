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
    </div>
  );
};

export default Text;
