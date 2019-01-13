import * as React from "react";
import Image from "./Image";
import Text from "./Text";
import Title from "./Title";

const Home = () => {
  const subText =
    "Hi, my name is Jake and I'm a software developer. I love using functional programming concepts in JavaScript and building web applications with React. You can find articles I've written on these subjects and more on my blog, 'Code for Nerds.'";
  return (
    <div className="home">
      <div className="home__text-container">
        <Title
          title="<Jake Witcher />"
          parentComponent="home"
          subTitle="Front-End Developer"
        />
        <Text subText={subText} parentComponent="home" mobile="" />
      </div>
      <Image
        src="/images/headshot.jpg"
        alt="Headshot of Jake Witcher"
        parentComponent="home"
      />
      <Text subText={subText} parentComponent="home" mobile="--mobile" />
    </div>
  );
};

export default Home;
