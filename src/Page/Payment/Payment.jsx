import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ChackpotFrom from "./ChackpotFrom";
const stripePromise = loadStripe(
  "pk_test_51PPEcLKztv8p0nMgAH9UVd2IHBEXGdFk3f1zkN8m8cYy82QJXHWfI8vBkQc10bxFJKB4RO3DkMwjjvex8N1WLzlP00K2z1zEQa"
);

function Payment() {
  
  return (
    <div>   
      <Elements stripe={stripePromise}>
        <ChackpotFrom />
      </Elements>
    </div>
  );
}

export default Payment;
