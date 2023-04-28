import React from "react";
import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";
import { BsEnvelopePaperFill, BsGithub } from "react-icons/bs";
import { Slide } from "react-awesome-reveal";
import classes from "../../styles/ProfComponent.module.css";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left" triggerOnce="true">
        <Texts>
          <h4>
            Hello <span className="purple">I'am</span>
          </h4>
          <h1 className="purple">Linh Nguyen Le</h1>
          <h3>
            5<sup>th</sup> semester student @ Seneca College
          </h3>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            iusto. Adipisci in qui officia provident tenetur sequi, deserunt
            corporis quos?
          </p> */}
          <button className={classes["text-button"]}>Let's talk</button>
          <Social>
            <p>Check out my</p>
            <div className={classes[`social-icons`]}>
              <span>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/le-linh-nguyen-21092002/"
                >
                  <FaLinkedinIn />
                </a>
              </span>
              <span>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/LinhNguyenLe2109"
                >
                  <BsGithub />
                </a>
              </span>
              <span>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://drive.google.com/drive/folders/17DTx3zfmIPa0soIQR88iziUTulTYf-Sr?usp=sharing"
                >
                  <BsEnvelopePaperFill />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right" triggerOnce="true">
        <Profile>
          <img
            src="https://res.cloudinary.com/ghazni/image/upload/v1659082282/Yt-portfolio/Untitled-1_drcspz.png"
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
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
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
