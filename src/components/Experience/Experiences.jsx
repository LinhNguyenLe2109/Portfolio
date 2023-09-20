import React from "react";
// delete these later
import { MdDesignServices } from "react-icons/md";
import { HiDesktopComputer } from "react-icons/hi";
import {FiCodesandbox} from "react-icons/fi";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

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
      {/* todo */}
      {/* <SliderComp /> */}
      <Cards>
        <Slide triggerOnce="true" direction="left">
          <Card
            Icon={FiCodesandbox}
            title={"Co-op, Software Engineer"}
            desc={[
              `Participate in bi-weekly sprints and daily-standups.`,
              `Create, update features, fix front-end and back-end errors related to user experience.`,
              `Improve test coverage for the software.`,
              `Increased load handling by 30%`
            ]}
            company="PAR Technology"
            startTime="September 2023"
            endTime="Current"
          />
        </Slide>
        <Slide triggerOnce="true" direction="left">
          <Card
            Icon={MdDesignServices}
            title={"IPC144 Lab Assistant"}
            desc={[
              `Collaborated with professors to create a positive and productive learning environment`,
              `Assisted, guided, troubleshot student code in C/C++ programming lab sessions.`,
            ]}
            company="Seneca College"
            startTime="January 2023"
            endTime="August 2023"
          />
        </Slide>
        <Slide triggerOnce="true" direction="left">
          <Card
            Icon={HiDesktopComputer}
            title={"Web developer"}
            desc={[
              `Enhanced an existing module in the current CMS by providing additional functionalities, resulting in increased efficiency.`,
              `Successfully deployed and maintained two front-end projects, resulting in improved user engagement and website performance.`,
              `Developed and maintained internal and external websites with AODA compliance.`,
              `Collaborated with communication officers and the web team to enhance the web application's appearance and functionality to improve user experience.`,
            ]}
            company="TDSB (Toronto District School Board)"
            startTime="August 2022"
            endTime="December 2022"
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
    font-size: 2rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
