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
        <div className="ms-3 leading-relaxed [&>p]:mt-3">
          <p>
            Hello, I'm{" "}
            <span className="text-mainColor text-lg font-bold">Nathan</span>,
            3rd year student at Seneca College majoring in{" "}
            <span className="text-mainColor text-lg font-bold">
              Computer Programming & Analysis
            </span>
            . Currently, I'm a Lab Assistant and a Developer at Seneca College.
          </p>
          <p>
            Graduating in{" "}
            <span className="text-mainColor text-lg font-bold">April 2024</span>
            , I'm seeking a long-term opportunity to apply my skills. With two
            co-ops at{" "}
            <span className="text-mainColor text-lg font-bold">TDSB</span> and{" "}
            <span className="text-mainColor text-lg font-bold">PAR Canada</span>
            , I've gained a strong foundation in software engineering. These
            experiences also enhanced my problem-solving and communication
            skills. Eager to contribute to real-world projects, I bring
            dedication, practical experience, and fresh perspectives to every
            place that I worked and will work for.
          </p>
          <p>
            Besides work, I enjoy playing{" "}
            <span className="text-mainColor text-lg font-bold">
              video games
            </span>
            , listening to{" "}
            <span className="text-mainColor text-lg font-bold">podcasts</span>
            watch{" "}
            <span className="text-mainColor text-lg font-bold">
              documentaries
            </span>{" "}
            about our universe.
          </p>
        </div>
      </div>
    </Zoom>
  );
}

export default About;
