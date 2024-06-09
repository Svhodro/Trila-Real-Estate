import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";

function ChackpotFrom() {
  const {payment,setpayment} = useContext(UserContext)
  const [Secret,setSecret]=useState()
    const stripe = useStripe();
    const elements = useElements();
    useEffect(()=>{
      axios.post('https://trila-backend.vercel.app/create-payment-intent',{price:payment.OfferPrice})
      .then(res=>{
        setSecret(res.data)      
      })
     
    })
    const handlepayment=()=>{
      const data = {        
        status: "bought",       
      };
      axios.put(`https://trila-backend.vercel.app/updateoffer/${payment._id}`,data)
    }
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <div className="w-full flex justify-center items-center flex-col">
        <h1> Payment </h1>
    <form onSubmit={handleSubmit} className="w-2/4" >
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {Secret?<button type="submit" disabled={!stripe} className="btn btn-info btn-sm my-4" onClick={handlepayment}>
        Pay
      </button>:<button type="submit" onClick={handlepayment} disabled={!Secret } className=" btn btn-info btn-sm my-4">
        Pay
      </button>}
      
    </form>
    </div>
  );
}

export default ChackpotFrom;
