import React from "react";
import "./intro.css";
import bgImg from "../../assets/babatitiPortsmall.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/briefcase_32.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Segun</span>
          <br />
          Website Designer
          <p className="introPara">
            I'm a skilled web designer with experience in creating <br />
            visually appealing and user friendly websites
          </p>
        </span>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="hire me" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bgImg} alt="" className="bg" />
    </section>
  );
};

export default Intro;
