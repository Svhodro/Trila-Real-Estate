import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../../context/UserContext";
import { MdFormatListNumbered } from "react-icons/md";

function Offer() {
  const { offer, userdata } = useContext(UserContext);
  const [offerprice, setofferprice] = useState();
  const [date, setdate] = useState();

  const handleReg = (e) => {
    e.preventDefault();
    const price = e.target.price.value;
    const date = e.target.date.value;
    setdate(date);
    setofferprice(price);
  };

  const handileoffer = () => {
    // the property price is low then the beauty but is sound's good
    const Amaountsring = offer.Pricerange;
    const words = Amaountsring.split("-");
    const price = Number(words[0]);

    if (price <= offerprice) {
      const data = {
        Agentname: offer.Agentname,
        OfferPrice: offerprice,
        propertyimg: offer.Propertyimage,
        location: offer.Propertylocation,
        title: offer.Propertytitle,
        Productid: offer.productid,
        status: "pending",
        Buyingdate:date,
        useremail: offer.useremail,
        username: userdata.username,
      };

      try {
        axios
          .post("https://trila-backend.vercel.app/addoffer",data)
          .then((res) => {});
      } catch (error) {
        console.log(error);
      }
    } else {
    }
  };

  return (
    <div>
      <div className="hero w-full h-full bg-base-200">
        <div className="hero-content  w-3/4 flex-col-reverse ">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              className="card-body "
              onSubmit={(e) => {
                handleReg(e);
              }}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">property title</span>
                </label>
                <input
                  type="text"
                  placeholder={offer.Propertytitle}
                  className="input input-bordered"
                  name="name"
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Buyer email</span>
                </label>
                <input
                  type="email"
                  placeholder={offer.useremail}
                  className="input input-bordered"
                  name="email"
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Buyer name</span>
                </label>
                <input
                  type="text"
                  placeholder={userdata.username}
                  className="input input-bordered"
                  name="url"
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">buying date</span>
                </label>
                <input
                  type="date"
                  className="input input-bordered"
                  name="date"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Offer Amount</span>
                </label>
                <input
                  type="number"
                  className="input input-bordered"
                  name="price"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Agent Name</span>
                </label>
                <input
                  type="text"
                  placeholder={offer.Agentname}
                  className="input input-bordered"
                  name="url"
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Property location</span>
                </label>
                <input
                  type="text"
                  placeholder={offer.Propertylocation}
                  className="input input-bordered"
                  name="url"
                  readOnly
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handileoffer}>
                  Offer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
