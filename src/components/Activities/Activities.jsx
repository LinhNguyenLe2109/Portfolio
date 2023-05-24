import React from "react";
import styled from "styled-components";

function Activities() {
  return (
    <Container>
      <h2 className="pt-4 text-3xl">Activities</h2>
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
