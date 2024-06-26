import React, { useState } from "react";
import styled from "styled-components";

const Card = (props) => {
  const { Icon, desc, title, company, startTime, endTime } = props;
  const [active, setActive] = useState(false);
  return (
    <Container
      onClick={() => setActive((active) => !active)}
      className={` ${
        active ? "show" : ""
      } relative !px-10 flex sm:justify-around items-center sm:flex-row flex-col`}
    >
      <div>
        <span className="purple text-8xl">
          <Icon className="mx-auto" />
        </span>
        <div className="text-center">
          <h3 className="text-xl">{title}</h3>
          <p className="text-sm">
            {startTime} - {endTime}
          </p>
          <p className="text-mainColor mb-3 text-lg">{company}</p>
        </div>
      </div>

      <div>
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
  background: #191923;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;
