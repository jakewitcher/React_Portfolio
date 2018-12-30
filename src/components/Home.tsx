import * as React from "react";
import Image from "./Image";
import Text from "./Text";
import Title from "./Title";

const Home = () => {
  const homeTitleClasses = {
    subtitleClass: "home__subtitle",
    titleBoxClass: "home__title-box",
    titleClass: "home__title"
  };
  const homeImageClasses = {
    imageBoxClass: "home-image-box",
    imageClass: "home-image"
  };
  const subText =
    "Producing well-crafted, interactive web applications with React, Redux, and Typescript.";
  return (
    <div className="content-container home">
      <div className="home__text-container">
        <Title
          title="<Jake Witcher />"
          componentClasses={homeTitleClasses}
          subTitle="Front-End Developer"
        />
        <Text subText={subText} />
      </div>
      <Image
        src="/images/headshot.jpg"
        alt="Headshot of Jake Witcher"
        componentClasses={homeImageClasses}
      />
    </div>
  );
};

export default Home;
