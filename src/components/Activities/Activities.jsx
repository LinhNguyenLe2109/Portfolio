import React from "react";
import styled from "styled-components";
import ActivityCard from "./ActivityCard";

function Activities() {
  return (
    <Container id="activity">
      <h2 className="pt-4 text-3xl mb-9">
        <span className="text-mainColor">Activities</span> and{" "}
        <span className="text-mainColor">Achievements</span>
      </h2>
      <ActivityCard
        month="May"
        year="2023"
        desc="During my short break between two semester, I and my team managed to get into the Final round of the Hackathon. We were able to do so by analyzing the stakeholder's needs, concerns then convert them into technical features that we want to include in our project and show them our plan through our application. I acted as the team project manager, I explained to my team what we need to do, what we need to prepare, and what we need to show to the judges. I also helped my team to do the presentation. Through this event, I learned how to manage a team, how to communicate with the stakeholder, and how to present our project to the judges."
        imgLink="\images\Hackathon.png"
      />
    </Container>
  );
}

export default Activities;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }
`;
