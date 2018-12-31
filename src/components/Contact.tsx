import * as React from "react";
import Social from "./Social";
import Title from "./Title";

const Contact = () => {
  return (
    <div className="contact">
      <Title title="Get in Touch" parentComponent="contact" />
      <Social social="LinkedIn" />
      <Social social="GitHub" />
      <Social social="Blog" />
      <Social social="Twitter" />
      <Social social="Email" />
    </div>
  );
};

export default Contact;
