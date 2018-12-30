import * as React from "react";
import Social from "./Social";
import Title from "./Title";

const Contact = () => {
  const contactTitleClasses = {
    subtitleClass: "",
    titleBoxClass: "",
    titleClass: ""
  };
  return (
    <div>
      <Title title="Get in Touch" componentClasses={contactTitleClasses} />
      <Social social="Twitter" />
      <Social social="GitHub" />
      <Social social="Blog" />
      <Social social="Email" />
    </div>
  );
};

export default Contact;
