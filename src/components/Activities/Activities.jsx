import React from "react";
import styled from "styled-components";
import ActivityCard from "./ActivityCard";

function Activities() {
  return (
    <Container>
      <h2 className="pt-4 text-3xl mb-9">
        <span className="text-mainColor">Activities</span> and{" "}
        <span className="text-mainColor">Achievements</span>
      </h2>
      <ActivityCard />
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
