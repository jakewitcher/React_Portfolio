import * as React from "react";
import Social from "./Social";
import Title from "./Title";

const Contact = () => {
  return (
    <div className="contact">
      <Title title="Get in Touch" parentComponent="contact" />
      <div className="contact__social-links">
        <p className="contact__brackets">{"{"}</p>
        <Social socialIcon="fab fa-linkedin" />
        <Social socialIcon="fab fa-github" />
        <Social socialIcon="fab fa-wordpress" />
        <Social socialIcon="fab fa-twitter" />
        <Social socialIcon="fas fa-envelope" />
        <p className="contact__brackets">{"}"}</p>
      </div>
    </div>
  );
};

export default Contact;
