import React from "react";
import "./skills.css";
import webDesignImg from "../../assets/web-development.png";
import threeDimg from "../../assets/objects.png";
import softwareImg from "../../assets/app-development.png";

const Skills = () => {
  return (
    <section className="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I’m a skilled web developer with expertise in front-end and back-end
        technologies, including HTML, CSS, JavaScript, React, Django, and
        Node.js. Over 4 years, I’ve built and deployed web applications that are
        efficient, responsive, and tailored to user needs. I take pride in my
        problem-solving abilities and write clean, maintainable code. A
        collaborative team player, I communicate effectively with colleagues
        across functions to achieve project goals. Always eager to learn, I stay
        updated with the latest web technologies to bring the best to my
        projects.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={webDesignImg} alt="web" className="skillBarImg" />
          <div className="skillBartext">
            <h2>Web Developer</h2>
            <p>
              Need a web developer who can deliver powerful, user-friendly web
              solutions? I bring years of expertise in front-end and back-end
              technologies, creating sites that are visually striking, fast, and
              built to drive engagement.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={softwareImg} alt="software" className="skillBarImg" />
          <div className="skillBartext">
            <h2>Software Engineer</h2>
            <p>
              Looking for a software engineer who can build innovative, scalable
              solutions? With expertise in Python, Java, C# and C++, I create
              software that performs reliably and efficiently.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={threeDimg} alt="3D" className="skillBarImg" />
          <div className="skillBartext">
            <h2>3D Designer</h2>
            <p>
              Need a 3D artist who can craft visuals that leave a lasting
              impression? I’m experienced in 3D modeling, texturing, and
              rendering with tools like 3DS Max, Cinema 4D, Maya, Vray, and
              Substance Painter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
