import * as React from "react";
import Image from "./Image";
import Text from "./Text";
import Title from "./Title";

const Home = () => {
  const subText =
    "Hi, my name is Jake and I'm a software developer who loves crafting web applications with React. I like to spend my free time learning new programming languages, patterns, and frameworks and building my own side projects. I'm also a big fan of collaborating with other talented developers.";
  return (
    <div className="home">
      <div className="home__text-container">
        <Title
          title="<Jake Witcher />"
          parentComponent="home"
          subTitle="Front-End Developer"
        />
        <Text subText={subText} parentComponent="home" />
      </div>
      <Image
        src="/images/headshot.jpg"
        alt="Headshot of Jake Witcher"
        parentComponent="home"
      />
    </div>
  );
};

export default Home;
