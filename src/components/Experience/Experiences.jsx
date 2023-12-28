import React from "react";
// delete these later
import { MdDesignServices } from "react-icons/md";
import { HiDesktopComputer } from "react-icons/hi";
import { FiCodesandbox } from "react-icons/fi";
import { FaLaptopHouse } from "react-icons/fa";
import styled from "styled-components";
import Card from "./Card";
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
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
  flex-wrap: wrap;
`;
