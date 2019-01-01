import * as React from "react";
import utils from "../utils/constants";
import Social from "./Social";
import Title from "./Title";

const { LINKEDIN_URL, GITHUB_URL, WORDPRESS_URL, TWITTER_URL } = utils.social;
const { EMAIL } = utils.contact;

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <Title title="Get in Touch" parentComponent="contact" />
      <div className="contact__social-links">
        <p className="contact__brackets">{"{"}</p>
        <Social socialIcon="fab fa-linkedin" socialUrl={LINKEDIN_URL} />
        <Social socialIcon="fab fa-github" socialUrl={GITHUB_URL} />
        <Social socialIcon="fab fa-wordpress" socialUrl={WORDPRESS_URL} />
        <Social socialIcon="fab fa-twitter" socialUrl={TWITTER_URL} />
        <Social socialIcon="fas fa-envelope" socialUrl={`mailto:${EMAIL}`} />
        <p className="contact__brackets">{"}"}</p>
      </div>
    </div>
  );
};

export default Contact;
