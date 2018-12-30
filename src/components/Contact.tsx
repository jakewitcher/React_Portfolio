import * as React from "react";
import Social from "./Social";
import Title from "./Title";

const Contact = () => {
  return (
    <div>
      <Title title="Get in Touch" />
      <Social social="Twitter" />
      <Social social="GitHub" />
      <Social social="Blog" />
      <Social social="Email" />
    </div>
  );
};

export default Contact;
