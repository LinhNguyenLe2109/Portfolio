import React from "react";
import styled from "styled-components";
import classes from "../../styles/Experience/Experiences.module.css"

const Card = (props) => {
  const { Icon, disc, title } = props;
  return (
    <Container className={`${classes.cardContainer} relative`}>
      {/* <span className='green'><Icon/></span>
        <h1>{title}</h1>
        <p>{disc}</p> */}
      <span className="purple">
        <Icon className="mx-auto" />
      </span>

      <div className="text-center">
        <h3>{title}</h3>
        <p>
          January 20<sup>th</sup>, 1975 - December 31<sup>st</sup>, 2000
        </p>
        <p className="text-mainColor mb-3">TDSB (Toronto District School Board)</p>
      </div>
      <div className={classes.cardDesc}>
        <ul className="list-disc list-inside">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta totam corporis vel tenetur nobis veritatis voluptates nulla officia voluptatibus eveniet?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta totam corporis vel tenetur nobis veritatis voluptates nulla officia voluptatibus eveniet?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta totam corporis vel tenetur nobis veritatis voluptates nulla officia voluptatibus eveniet?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta totam corporis vel tenetur nobis veritatis voluptates nulla officia voluptatibus eveniet?</li>
        </ul>
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
