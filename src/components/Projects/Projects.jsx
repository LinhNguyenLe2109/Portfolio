import React from "react";
import styled from "styled-components";
import { Zoom } from "react-awesome-reveal";
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
        name="Shift Management System"
        link="https://github.com/leoschwartz/ShiftManagementTool"
        techStack={["React", "Express.js", "Firebase", "TailwindCSS"]}
        imgLink="\images\onGoingProject.png"
        desc={[
          "Perform user authentication and authorization using Firebase",
          "Each account has a different role and permission to access different features",
          "Manager accounts can create, edit, delete shifts and assign employees to shifts",
          "Schedule is automatically created 3 weeks in advance based on the employee's schedule template",
          "Manager can view employee performance using graphs, charts and predict employee's future performance using machine learning models",
        ]}
      />
      <Project
        name="Lazyless"
        link="https://lazyless.vercel.app/"
        techStack={[
          "Angular",
          "Express.js",
          "Angular Material",
          "TailwindCSS",
          "MongoDB",
        ]}
        imgLink="\images\lazylessMockUp.png"
        desc={[
          "Allow users to keep track of their daily activities and manage their time more effectively",
          "Enabled users to log in/log out",
          "Users can add, edit, delete their tasks and view their progress",
          "User data is stored in MongoDB Atlas",
        ]}
      />
      <Project
        name="NeoFood Restaurant"
        link="https://neofood-62k8fgsxq-linhnguyenle2109.vercel.app/"
        techStack={["Next.js", "Bootstrap", "Jotai", "React-Bootstrap"]}
        imgLink="\images\restaurantMockUp.png"
        desc={[
          "Allow users to add dishes to their order, streamlining the ordering process.",
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
