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
        month="December"
        year="2023"
        desc="I got my Azure Fundamentals certification. I learned about the basic concepts of cloud computing, the different types of cloud services, and the core Azure services. I'm sure that this certification will help me more comfortable working with the cloud."
        imgLink="\images\AZ900.png"
      />
      <ActivityCard
        month="October"
        year="2023"
        desc="After a month at PAR Technology, I receive a public praise from my manager for my desire to go above and beyond. Ever since I started here, I have already determined to contribute as much as I can to the company. With my manager's encouragement to provide feedbacks and innovation ideas to our application, I give my team various ideas from adding integration test, new UI design for user experience to streamline our front-end design with the use of Tailwind CSS. I am glad that my manager recognized my effort and I will continue to do my best to help the company grow."
        imgLink="\images\PARManagerPraise.png"
      />
      <ActivityCard
        month="September"
        year="2023"
        desc="At the end of September, me and two friends of mine joined Bell GeekFest Hackathon. We participated with the goal of learning new things and being the best version of ourselves. We've learned how to use new technologies to plan, design and implement our ideas. We've also learned how to work as a team and how to communicate with each other, how to assess each person's ideas and finalize our ultimate plan. This time, although we couldn't get into the final round due to my friends' personal situation and they couldn't come to pitch the idea, I'm happy that we tried our best, that I stood in the crowd on my own and deliver our design to the judges."
        imgLink="\images\BellHackFest2023.png"
      />
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
