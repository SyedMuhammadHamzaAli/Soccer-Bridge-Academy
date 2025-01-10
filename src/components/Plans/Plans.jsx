import React, { useState } from "react";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import "./Plans.css";
import PaymentModal from "./PaymentModal";

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleJoinNow = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>

      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text spacing2">READY TO START</span>
        <span className="spacing2">YOUR TRAINING</span>
        <span className="stroke-text spacing2">NOW WITH US</span>
      </div>

      {/* Plans card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features" key={i}>
              {plan.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            {/* <div>
              <span>See More Benefits --</span>
            </div> */}
            <button className="btn" onClick={() => handleJoinNow(plan)}>
              Join Now
            </button>
          </div>
        ))}
      </div>

      {/* Payment Modal */}
      {selectedPlan && (
        <PaymentModal
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}
    </div>
  );
};

export default Plans;

