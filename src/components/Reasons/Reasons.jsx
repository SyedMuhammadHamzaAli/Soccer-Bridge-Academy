import React from "react";
import image11 from "../../assets/image11.jpg";
import Longfootball from "../../assets/Longfootball.jpg"
import image22 from "../../assets/image2.png";
import image33 from "../../assets/image33.jpg";
import image44 from "../../assets/image44.jpg";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

import "./Reasons.css";

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img src={Longfootball} alt="" />
        <img src={image11} alt="" />
        <img src={image33} alt="" />
        <img src={image44} alt="" />
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span>Choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>EXPERT COACHING</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>ELEVATE PERFORMANCE RESULTS IN WEEK</span>
          </div>
          {/* <div>
            <img src={tick} alt="" />
            <span></span>
          </div> */}
          {/* <div>
            <img src={tick} alt="" />
            <span>OUR RELIABLE PARTNERS</span>
          </div> */}
        </div>

        {/* <span style={{ color: "var(--gray)", fontWeight: "normal" }}>
          OUR PARTNERS
        </span> */}
        {/* <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Reasons;
