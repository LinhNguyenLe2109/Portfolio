import React from "react";
import styled from "styled-components";
import { Slide, JackInTheBox } from "react-awesome-reveal";
import Slider from "./Slider";

const Experiences = () => {
  return (
    // work on this later
    <Container id="service">
      {" "}
      <Slide triggerOnce="true" direction="down">
        {" "}
        <h2>
          My <span className="purple">Experiences</span>{" "}
        </h2>{" "}
      </Slide>
      <JackInTheBox triggerOnce="true">
        <Slider />
      </JackInTheBox>
    </Container>
  );
};

export default Experiences;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h2 {
    padding-top: 1rem;
    font-size: 2rem;
  }
`;
