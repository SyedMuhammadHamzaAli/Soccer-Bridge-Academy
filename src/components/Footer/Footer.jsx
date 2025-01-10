import React from "react";
import "./Footer.css";
import Heroimg from "../../assets/dumba.png";

import Github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <hr />
      {/* <div className="footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={instagram} alt="" />
          <img src={Linkedin} alt="" />
        </div>
      </div> */}
      <div className="logo-f">
        <p
          className="stroke-text head-response"
        >
          MEET THE COACH
        </p>

        <div className="Responsive-div">
          <div className="imagehou">
            <img
              src={Heroimg}
              alt=""
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </div>
          <div className="text-container">
            <p
            className="Changefont"
              
            >
              Hi I am coach Obi, with years of both playing and coaching
              experience, I am here to bridge youth with soccer. “Soccer as a
              Journey, Not Just a Game” my coaching philosophy is about teaching
              players to not only be technically and tactically proficient but
              also emotionally strong and mentally resilient—able to handle the
              ups and downs of the game, and life itself.
            </p>
          </div>
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </footer>
  );
};

export default Footer;
