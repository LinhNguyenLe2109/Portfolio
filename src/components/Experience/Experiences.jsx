import React from "react";
import { MdDesignServices } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { HiDesktopComputer } from "react-icons/hi";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Experiences = () => {
  return (
    <Container id="service">
      <Slide triggerOnce="true" direction="down">
        <h2>
          My <span className="purple">Experiences</span>
        </h2>
      </Slide>
      <Cards>
        <Slide triggerOnce="true" direction="left">
          <Card
            Icon={MdDesignServices}
            title={"IPC144 Lab Assistant"}
            desc={[
              `Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`,
            ]}
          />
        </Slide>
        <Slide triggerOnce="true" direction="up">
          <Card
            Icon={HiDesktopComputer}
            title={"Web developer"}
          />
        </Slide>
        <Slide triggerOnce="true" direction="right">
          <Card
            Icon={CgWebsite}
            title={"web designer"}
            desc={[
              `Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`,
            ]}
          />
        </Slide>
      </Cards>
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
    font-size: 2rem;s
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
