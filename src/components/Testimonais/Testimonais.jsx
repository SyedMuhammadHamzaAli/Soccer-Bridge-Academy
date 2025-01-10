import React, { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

import testimonialsData from "../../data/testimonialsData";
import "./Testimonais.css";
import { motion } from "framer-motion";

const Testimonais = () => {
  const [selected, setSelected] = useState(0),
    tLength = testimonialsData.length;
  const transition = { type: "spring", duration: 4 };

  return (
    <div className="testimonais" id="testimonais">
      <div className="left-t">
        <span style={{marginTop:"40px"}}>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span style={{marginTop:"-30px"}}>say about us</span>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ transition }}
        >
          <p style={{marginTop:"-14px", fontFamily:"Poppins', sans-serif"}}>Joining SBA was a game-changer. Coach Obi’s focus on skill, teamwork, and resilience has made me a better player and person.</p>
          {/* <p style={{marginTop:"-30px", fontFamily:"Poppins', sans-serif"}}> </p> */}
          {/* {testimonialsData[selected].review} */}
        </motion.p>

        <span style={{marginTop:"1px", marginBottom:"100px"}}>
          {" "}
          <span style={{ color: "var(--orange)" }}>
            <span>{testimonialsData[selected].name}</span>{" "}
          </span>
          <span>- {testimonialsData[selected].status}</span>
        </span>
      </div>
      {/* <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
        style={{zIndex:"-2"}}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          // src={testimonialsData[selected].image}
          style={{zIndex:"-1"}}
          alt=""
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ transition }}
        />

        <div className="arrows">
          <img
            onClick={() =>
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1)
            }
            src={leftArrow}
            alt="arrows-left"
          />
          <img
            src={rightArrow}
            alt="arrows-right"
            onClick={() =>
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1)
            }
          />
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Testimonais;
