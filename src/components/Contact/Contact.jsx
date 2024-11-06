import React from "react";
import "./contact.css";
import walmartImg from "../../assets/walmart.png";
import adobeImg from "../../assets/adobe.png";
import microsoftImg from "../../assets/microsoft.png";
import facebookImg from "../../assets/facebook.png";
import facebookIcon from "../../assets/facebook-icon.png";
import twitterIcon from "../../assets/twitter.png";
import youtubeIcon from "../../assets/youtube.png";
import instagramIcon from "../../assets/instagram.png";
import githubIcon from "../../assets/icons8-github-48.png";

const Contact = () => {
  return (
    <section className="contactPage">
      <div id="clients">
        <h1 className="clientsTitle">My Clients</h1>
        <p className="clientsDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          provident veritatis eaque reprehenderit optio voluptatum voluptatibus
          illum nihil iste voluptatem! Sapiente, blanditiis dolorum? Eaque
          similique totam vitae, iusto repellat eius!
        </p>
        <div className="clientsImgs">
          <img src={walmartImg} alt="" className="clientsImg" />
          <img src={adobeImg} alt="" className="clientsImg" />
          <img src={microsoftImg} alt="" className="clientsImg" />
          <img src={facebookImg} alt="" className="clientsImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your name" />
          <input type="email" className="email" placeholder="Your email" />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button className="submitBtn" type="submit">
            Submit
          </button>
          <div className="links">
            <img
              src={facebookIcon}
              alt=""
              className="link"
              onClick={() => {
                window.open(
                  "https://www.facebook.com/profile.php?id=61555352982951",
                  "_blank"
                );
              }}
            />
            <img src={twitterIcon} alt="" className="link" />
            <img
              src={githubIcon}
              alt=""
              className="link"
              onClick={() => {
                window.open("https://github.com/piemicah", "_blank");
              }}
            />
            <img src={instagramIcon} alt="" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
