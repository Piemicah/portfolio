import React from "react";
import "./works.css";
import workImg from "../../assets/flasklg2.png";

const Works = () => {
  return (
    <section className="works">
      <h2 className="worksTitle">My Potfolio</h2>
      <span className="worksDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aspernatur
        ipsum facilis repudiandae, atque assumenda! Facere sed distinctio
        laudantium nisi cumque, illo officia asperiores quidem quasi enim modi
        omnis temporibus?
      </span>
      <div className="worksImgs">
        <img src={workImg} alt="" className="worksImg" />
        <img src={workImg} alt="" className="worksImg" />
        <img src={workImg} alt="" className="worksImg" />
        <img src={workImg} alt="" className="worksImg" />
        <img src={workImg} alt="" className="worksImg" />
        <img src={workImg} alt="" className="worksImg" />
      </div>
      <button className="worksBtn">See More</button>
    </section>
  );
};

export default Works;
