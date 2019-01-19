import * as React from "react";
import Image from "./Image";
import Text from "./Text";
import Title from "./Title";

const Home = () => {
  return (
    <div className="home">
      <div className="home__text-container">
        <Title
          title="<Jake Witcher />"
          parentComponent="home"
          subTitle="Front-End Developer"
        />
        <Text parentComponent="home" mobile="" />
      </div>
      <Image
        src="/images/headshot.jpg"
        alt="Headshot of Jake Witcher"
        parentComponent="home"
      />
      <Text parentComponent="home" mobile="--mobile" />
    </div>
  );
};

export default Home;
