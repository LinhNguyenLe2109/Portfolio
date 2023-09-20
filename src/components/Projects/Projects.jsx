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
      <Project
        name="Lazyless"
        link="https://github.com/LinhNguyenLe2109/Lazyless"
        techStack={["Angular", "TailwindCSS", "MongoDB"]}
        imgLink="\images\inProgress.png"
        desc={[
          "Allow users to keep track of their daily activities and manage their time more effectively",
          "Enabled users to log in/log out or simply enter their app id to access their personal dashboard",
          "Users can add, edit, delete their tasks and view their progress",
          "User data is stored in MongoDB Atlas, hashed and salted for security purposes"
        ]}
      />
      <Project
        name="NeoFood Restaurant"
        link="https://neofood-62k8fgsxq-linhnguyenle2109.vercel.app/"
        techStack={["Next.js", "Bootstrap", "Jotai", "React-Bootstrap"]}
        imgLink="\images\restaurantMockUp.png"
        desc={[
          "Enabled users to browse a list of dishes based on cuisine type and place an order",
          "Fetched reliable food data from Spoonacular API",
          "Utilized concepts like useState, useEffect, useAtom, useRouter, useSWR, etc",
          "Made compatible with multiple screen sizes, providing a user-friendly experience across all devices.",
        ]}
      />

      {/* <SliderComp /> */}
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
