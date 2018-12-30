import * as React from "react";
import Image from "./Image";
import Title from "./Title";

const Home = () => (
  <div>
    <Title title="<Jake Witcher />" subTitle="Front-End Developer" />
    <Image src="/images/headshot.jpg" alt="Headshot of Jake Witcher" />
  </div>
);

export default Home;
