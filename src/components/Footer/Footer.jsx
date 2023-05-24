import React from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import classes from "../../styles/Footer/Footer.module.css";

const Footer = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container id="footer">
      <Profile>
        <Slide direction="left" triggerOnce="true">
          <h2 className="text-3xl">
            Contact <span className="text-mainColor">me</span>
          </h2>
        </Slide>
        <div className="address my-2">
          <Slide direction="left" triggerOnce="true">
            <h3 className="text-xl mb-1 text-mainColor">Address:</h3>
          </Slide>
          <Slide direction="left" triggerOnce="true">
            <p>North York, ON, Canada</p>
          </Slide>
        </div>
        <div className="links my-2">
          <Slide direction="left" triggerOnce="true">
            <h3 className="text-xl text-mainColor mb-1">
              Reach out to me directly:
            </h3>
          </Slide>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left" triggerOnce="true">
              <a href="tel:+1-647-562-7948">+1 (647) 562-7948</a>
            </Slide>
          </div>
          <div>
            <Slide direction="left" triggerOnce="true">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide triggerOnce="true">
              <a href="mailto:lelinhnguyen2109@gmail.com">
                lelinhnguyen2109@gmail.com
              </a>
            </Slide>
          </div>
        </div>
        <div className="profiles my-2">
          <Slide direction="left" triggerOnce="true">
            <h3 className="text-xl text-mainColor mb-1">Check my profiles</h3>
          </Slide>
          <div className="icons">
            <Zoom triggerOnce="true">
              <a href="https://github.com/LinhNguyenLe2109">
                <AiFillGithub className="test" />
              </a>
            </Zoom>
            <Zoom triggerOnce="true">
              <a href="https://www.linkedin.com/in/le-linh-nguyen-21092002/">
                <AiFillLinkedin />
              </a>
            </Zoom>
            <Zoom triggerOnce="true">
              <a href="https://drive.google.com/drive/folders/17DTx3zfmIPa0soIQR88iziUTulTYf-Sr?usp=sharing">
                <BsNewspaper />
              </a>
            </Zoom>
          </div>
        </div>
        <Fade>
          <div className={classes.arrowUpContainer} onClick={scrollUp}>
            <AiOutlineArrowUp />
          </div>
        </Fade>
      </Profile>
      {/* todo */}
      {/* <Form>
        <Slide direction="right" triggerOnce="true">
          <form>
            <div className="name">
              <span>
                <CgProfile />
              </span>
              <input type="text" placeholder="Fullname..." />
            </div>
            <div className="email">
              <span>
                <MdAlternateEmail />
              </span>
              <input type="email" placeholder="Email..." />
            </div>
            <div className="message">
              <span className="messageIcon">
                <FiMail />
              </span>
              <textarea cols="30" rows="10" placeholder="Message..."></textarea>
            </div>
            <button className={`${classes.formSubmitButton} text-md`}>Submit</button>
          </form>
        </Slide>
      </Form> */}
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  .address {
    p {
      width: 60%;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: orange;
        }
      }
    }
  }

  .profiles {
    .icons {
      display: flex;
      align-items: center;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 3rem;
        height: 3rem;
        font-size: 1.5rem;
        margin-right: 0.5rem;
        border-radius: 50px;
        :hover {
          background-color: orange;
        }
      }

      .test {
        margin-top: 0.2rem;
        color: #fff;
      }
    }
  }
`;
const Form = styled.div`
  flex: 1;

  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }
  }
`;
