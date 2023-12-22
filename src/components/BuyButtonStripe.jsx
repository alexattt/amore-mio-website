import React from "react";

const BuyButtonStripe = ({ buyBtnId }) => {
  return (
    <stripe-buy-button
      buy-button-id={buyBtnId}
      publishable-key="pk_live_51OQFsLLschlgqcbQkseQfKohgRLUzJS8JnkQEkEIV1QLqb3Y9DM3kd1dreMAlCPg5uD6JlBgMBRf5nrM2i57NtRb00JcXkirOT"
    ></stripe-buy-button>
  );
};

export default BuyButtonStripe;
