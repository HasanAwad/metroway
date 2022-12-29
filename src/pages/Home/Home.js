import React from "react";

import IntroTrainImage from "../../Images/Rectangle.png";

import { Image, Container, InfoContainer } from "./Home.style";
const Home = () => {
  return (
    <Container>
      <InfoContainer>
        <h1>Hello</h1>
      </InfoContainer>
      <Image src={IntroTrainImage} />
    </Container>
  );
};

export default Home;
