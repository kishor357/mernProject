import React from "react";
import minion from "../images/minion.jfif";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutUsCol aboutUsCol1">
          <div>
            <img
              src={minion}
              class="img-fluid minionImage"
              alt="Responsive image"
            />
            <h4>Minion</h4>
            <h6>Full Stack Developer</h6>
          </div>
          <div className="aboutDiv2">
            <a href="">{<AiOutlineGithub />}</a>
            <a href="">{<AiOutlineLinkedin />}</a>
            <a href="">{<AiOutlineInstagram />}</a>
          </div>
          <div className="aboutDiv3">
            Hi, I am Minion. I like serving bad people. If you are evil I serve
            you. I am funny but you have to be Evil.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
