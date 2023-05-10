import React from "react";
import styled from "styled-components";
import { Zoom } from "react-awesome-reveal";

import SliderComp from "./Slider";
import Project from "./Project";

const Projects = () => {
  return (
    <Container id="project">
      <Zoom triggerOnce="true">
        <h2 className="text-center">
          Recent <span className="purple">Projects</span>
        </h2>
        <p className="text-center">What I'm doing and what I've done so far</p>
      </Zoom>
      <Slide>
        {/* <SliderComp /> */}
        <Project />
        <Project />
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
  position: relative;
  @media (max-width: 840px) {
    width: 90%;
  }
  h2 {
    font-size: 1.9rem;
  }
`;

const Slide = styled.div``;
