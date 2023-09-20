import React from "react";
import classes from "../../styles/Banner/About.module.css";
import { Zoom } from "react-awesome-reveal";

function About() {
  return (
    <Zoom triggerOnce="true">
      <div
        id="about"
        className={`w-11/12 lg:w-7/12 rounded-xl p-5 my-24 mx-auto ${classes.container}`}
      >
        <h2 className="text-3xl mb-6">
          About <span className="text-mainColor">me</span>
        </h2>
        <p className="ms-3">
          Hello, I'm{" "}
          <span className="text-mainColor text-lg font-bold">
            Linh Nguyen Le
          </span>
          , 3rd year student at Seneca College majoring in{" "}
          <span className="text-mainColor text-lg font-bold">
            Computer Programming & Analysis
          </span>
          . Currently I'm doing my co-op as a{" "}
          <span className="text-mainColor text-lg font-bold">
            Software Engineer
          </span>{" "}
          for{" "}
          <span className="text-mainColor text-lg font-bold">
            PAR Technology
          </span>
          . I'm a dedicated and team-oriented student{" "}
          <span className="text-mainColor text-lg font-bold">
            searching for an opportunity
          </span>{" "}
          in software development. During my study, I've had the opportunity to
          work on various group projects where I collaborated with diverse teams
          to develop appropriate solutions. This experience has honed my{" "}
          <span className="text-mainColor text-lg font-bold">
            communication, collaboration, and project management skills
          </span>
          . Recently, I and my team got to the final round of our school's
          hackathon. I'm also familiar with programming languages like{" "}
          <span className="text-mainColor text-lg font-bold">
            JavaScript, C/C++ and Python
          </span>{" "}
          as well as web technologies such as{" "}
          <span className="text-mainColor text-lg font-bold">
            React, Next.js, Tailwinds and MongoDB
          </span>
          . With my work ethic, and passion for problem-solving, I'm eager to
          make a positive impact and apply my knowledge into real-world
          settings.
        </p>
      </div>
    </Zoom>
  );
}

export default About;
