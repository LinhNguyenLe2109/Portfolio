import React, { useState } from "react";
import styled from "styled-components";
import classes from "../../styles/Experience/Experiences.module.css";

const Card = (props) => {
  const { Icon, desc, title, company, startTime, endTime } = props;
  const [active, setActive] = useState(false);
  return (
    <Container
      onClick={() => setActive((active) => !active)}
      className={`${classes.cardContainer} ${active ? "show" : ""} relative`}
    >
      <span className="purple">
        <Icon className="mx-auto" />
      </span>

      <div className="text-center">
        <h3>{title}</h3>
        <p>
          {startTime} - {endTime}
        </p>
        <p className="text-mainColor mb-3">
          {company}
        </p>
      </div>
      <div className={classes.cardDesc}>
        {desc && (
          <ul className="list-disc list-inside">
            {desc.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}
      </div>
      {/* <p>{disc}</p> */}
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 1rem;
  span {
    font-size: 4rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.8rem;
  }
`;
