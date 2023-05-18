import React from "react";
import classes from "../../styles/Banner/About.module.css";
import { Zoom } from "react-awesome-reveal";

function About() {
  return (
    <Zoom triggerOnce="true">
      <div
        id="about"
        className={`w-11/12 lg:w-7/12 rounded-xl p-5 mt-24 mx-auto ${classes.container}`}
      >
        <h2 className="text-3xl mb-6">
          About <span className="text-mainColor">me</span>
        </h2>
        <p className="ms-3">
          Hello, I'm <span className="text-mainColor">Linh Nguyen Le</span>, 5th
          semester student at Seneca College majoring in Computer Programming &
          Analysis. I'm a dedicated and team-oriented student searching for a
          co-op opportunity in software development. During my study, I've had
          the opportunity to work on various group projects where I collaborated
          with diverse teams to develop appropriate solutions. This experience
          has honed my communication, collaboration, and project management
          skills. Recently, I and my team got to the final round of our school's
          hackathon. I'm also familiar with programming languages like
          JavaScript, C/C++ and Python as well as web technologies such as
          React, Next.js, Tailwinds and MongoDB. With my work ethic, and passion
          for problem-solving, I'm eager to make a positive impact and apply my
          knowledge into real-world settings.
        </p>
      </div>
    </Zoom>
  );
}

export default About;
