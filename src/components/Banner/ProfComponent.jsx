import React from "react";
import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";
import { BsEnvelopePaperFill, BsGithub } from "react-icons/bs";
import { Slide } from "react-awesome-reveal";
import classes from "../../styles/ProfComponent.module.css";

const ProfComponent = () => {
  return (
    <Container id="home" className="relative">
      <Slide direction="left" triggerOnce="true">
        <Texts>
          <p className="mt-5 font-medium text-xl ">
            Hello <span className="purple">I'm</span>
          </p>
          <h1 className="purple text-5xl my-5">Linh Nguyen Le</h1>
          <p className="mt-5 font-medium text-lg">
            3<sup>rd</sup> year student @ Seneca College
          </p>
          <p className="font-medium text-lg">
            Co-op, Software Engineer @ PAR Technology
          </p>
          <button
            className={classes["text-button"]}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "#about";
            }}
          >
            Let's talk
          </button>
          <Social>
            <p>Check out my</p>
            <div className={classes[`social-icons`]}>
              <a
                className={classes.link}
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/le-linh-nguyen-21092002/"
              >
                <FaLinkedinIn className={classes.icon} />
              </a>
              <a
                className={classes.link}
                rel="noreferrer"
                target="_blank"
                href="https://github.com/LinhNguyenLe2109"
              >
                <BsGithub className={classes.icon} />
              </a>
              <a
                className={classes.link}
                rel="noreferrer"
                target="_blank"
                href="https://drive.google.com/drive/folders/17DTx3zfmIPa0soIQR88iziUTulTYf-Sr?usp=sharing"
              >
                <BsEnvelopePaperFill className={classes.icon} />
              </a>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right" triggerOnce="true">
        <div>
          <img
            className={classes["profile-img"]}
            src="/images/intro-img.jpg"
            alt="profile"
          />
        </div>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  min-height: 75vh;
  @media (max-width: 840px) {
    width: 90%;
    height: 100%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
const Texts = styled.div`
  flex: 1;
  h1 {
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }
`;
