import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaymentModal = ({ plan, onClose }) => {
  const handleApprove = (details) => {
    alert(`Transaction completed by ${details.payer.name.given_name}`);
    onClose();
  };

  return (
    <div className="payment-modal">
      <div className="modal-content">
        <h2>Choose Payment Method</h2>
        <p>You have selected the {plan.name} for ${plan.price}</p>


        {/* Add your ClientID */}
        <PayPalScriptProvider
          options={{ "client-id": "" }} 
        >
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: "USD",  
                      value: plan.price,
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then(handleApprove);
            }}
          />
        </PayPalScriptProvider>

        <button className="btn close-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;

