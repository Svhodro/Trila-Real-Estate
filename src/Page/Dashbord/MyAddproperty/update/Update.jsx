import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../../../context/UserContext";

function Update() {
  const { userdata, update } = useContext(UserContext);
  const handleadd = (e) => {
    e.preventDefault();
    const title = e.target.propertytitle.value;
    const location = e.target.location.value;
    const img = e.target.url.value;    
    const pricerange = e.target.price.value;
    const data = {
      poptitle:title,
      proplocation:location,
      image:img,
      agentname:userdata.username,
      agentemail:userdata.useremail,
      price:pricerange
    };
    axios.put(`https://trila-backend.vercel.app/updatestate/${update._id}`,data)
  
    
  };

  return (
    <div>
      <div className="hero w-full min-h-screen h-full bg-base-200">
        <div className="hero-content  w-3/4 flex-col-reverse ">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              className="card-body "
              onSubmit={(e) => {
                handleadd(e);
              }}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">property title</span>
                </label>
                <input
                  type="text"
                  placeholder={update.Propertytitle}
                  className="input input-bordered"
                  name="propertytitle"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Property location</span>
                </label>
                <input
                  type="text"
                  placeholder={update.Propertylocation}
                  className="input input-bordered"
                  name="location"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">property img</span>
                </label>
                <input
                  type="text"
                  placeholder={update.Propertyimage}
                  className="input input-bordered"
                  name="url"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Agent name</span>
                </label>
                <input
                  type="text"
                  placeholder={userdata.username}
                  className="input input-bordered"
                  name="agentname"
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">price range</span>
                </label>
                <input
                  type="text"
                  placeholder={update.Pricerange}
                  className="input input-bordered"
                  name="price"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Agent email</span>
                </label>
                <input
                  type="text"
                  placeholder={userdata.useremail}
                  className="input input-bordered"
                  name="Agentemail"
                  readOnly
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Update;
