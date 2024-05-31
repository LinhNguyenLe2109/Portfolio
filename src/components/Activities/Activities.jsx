import React from "react";
import styled from "styled-components";
import Timeline from "./Timeline";
function Activities() {
  const activities = [
    {
      title: "February 2024",
      cardTitle: "Certified Associate in Project Management (CAPM)®",
      url: "https://www.credly.com/badges/d94b1aff-5c15-4067-8dae-b9c336d9d0ea/public_url",
      cardDetailedText:
        "I pursued this certificate as I wanted to understand the principles of project management, and my role as a part of a bigger team in order to contribute and be as productive as possible. I learned about the project management frameworks (especially Agile frameworks), the five process groups, and the ten knowledge areas. I also learned about the project management processes and the role of a project manager.",
      media: {
        type: "IMAGE",
        source: {
          url: "\\images\\CAPM_certification.png",
          name: "Azure Fundamentals certification",
        },
      },
    },
    {
      title: "December 2023",
      cardTitle: "Azure Fundamentals certification",
      url: "https://learn.microsoft.com/en-us/users/linhnguyenle-5932/credentials/b06d078c657eb5f6",
      cardDetailedText:
        "I learned about the basic concepts of cloud computing, the different types of cloud services, and the core Azure services. I'm sure that this certification will help me more comfortable working with the cloud.",
      media: {
        type: "IMAGE",
        source: {
          url: "\\images\\AZ900.png",
          name: "Azure Fundamentals certification",
        },
      },
    },
    {
      title: "October 2023",
      cardTitle: "Praise from my team's manager",
      cardSubtitle:
        "I am glad that my manager recognized my effort and I will continue to do my best to help the company grow.",
      cardDetailedText:
        "After a month at PAR Technology, I receive a public praise from my manager for my desire to go above and beyond. Ever since I started here, I have already determined to contribute as much as I can to the company. With my manager's encouragement to provide feedbacks and innovation ideas to our application, I give my team various ideas from adding integration test, new UI design for user experience to streamline our front-end design with the use of Tailwind CSS.",
      media: {
        type: "IMAGE",
        source: {
          url: "\\images\\PARManagerPraise.png",
          name: "Praise from my team's manager",
        },
      },
    },
    {
      title: "September 2023",
      cardTitle: "Bell GeekFest Hackathon Participation",
      cardDetailedText:
        "I and my two friends participated with the goal of learning and being the best of ourselves. We've learned how to use new technologies to plan, design and implement our ideas. We've also learned how to work as a team and how to communicate with each other. Although we couldn't get into the final round, I'm happy that we tried our best, that I stood in the crowd on my own and delivered our design to the judges as my friends couldn't come to pitch the idea.",
      media: {
        type: "IMAGE",
        source: {
          url: "\\images\\BellHackFest2023.png",
          name: "Bell GeekFest Hackathon Participation",
        },
      },
    },
    {
      title: "May 2023",
      cardTitle: "Seneca College Smart Cities Hackathon Finalist",
      cardSubtitle:
        "I and my team managed to get into the Final round of the Hackathon",
      cardDetailedText:
        "We were able to do so by analyzing the stakeholder's needs, concerns then convert them into technical features that we want to include in our project and show them our plan through our application. I acted as the team project manager, I explained to my team what we need to do, what we need to prepare, and what we need to show to the judges. I also helped my team to do the presentation. Through this event, I learned how to manage a team, how to communicate with the stakeholder, and how to present our project to the judges",
      media: {
        type: "IMAGE",
        source: {
          url: "\\images\\Hackathon.png",
          name: "Seneca College Smart Cities Hackathon Participation",
        },
      },
    },
  ];
  return (
    <Container id="activity">
      <h2 className="pt-4 text-3xl mb-9">
        <span className="text-mainColor">Activities</span> and{" "}
        <span className="text-mainColor">Achievements</span>
      </h2>
      <Timeline activities={activities} />
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
