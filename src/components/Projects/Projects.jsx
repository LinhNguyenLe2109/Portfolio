import React from "react";
import styled from "styled-components";
import { Zoom } from "react-awesome-reveal";

import SliderComp from "./Slider"; 
import Project from "./Project";

const Projects = () => {
  return (
    <Container id="project">
      <Zoom triggerOnce="true">
        <h2>
          Recent <span className="purple">Projects</span>
        </h2>
        <p>What I'm doing and what I've done so far</p>
      </Zoom>
      <Slide>
        {/* <SliderComp /> */}
        <Project/>
        <Project/>
      </Slide>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
  position: relative;
  @media (max-width: 840px) {
    width: 90%;
  }
  h2 {
    font-size: 1.9rem;
  }

  p {
    width: 28rem;
    margin: 0 auto;
    padding: 1rem 0;
    font-size: 0.9rem;
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;

const Slide = styled.div``;
