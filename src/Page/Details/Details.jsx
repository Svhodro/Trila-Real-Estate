import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Details() {
  const [wish,setwish]=useState([])
  const [userwish,setuserwish]=useState([])
  const { details } = useContext(UserContext);
  const vare = JSON.parse(localStorage.getItem("userData"))
  const notify = () => toast("already added");
  useEffect(()=>{
  axios.get('https://trila-backend.vercel.app/allwish')
  .then(res=> {
    const data=res.data
    const filtered = data.filter(user => user.useremail == vare.email);
    setwish(filtered)

  })
  
  
//  console.log(typeof(vare.email));


  })
  const handlewish = () => {
    const filtered = wish.filter(user => user.productid == details._id);
    if (filtered) {
      notify()
    }else{
    const data = {
      useremail: vare.email,
      Agentimage: details.Agentimage,
      Agentname: details.Agentname,
      Pricerange: details.Pricerange,
      Propertyimage: details.Propertyimage,
      Propertylocation: details.Propertylocation,
      Propertytitle: details.Propertytitle,
      status: details.status,
      productid:details._id
    };
    axios.post('https://trila-backend.vercel.app/addwish', data);
    }
   
  };
  
  return (
    <div className="sm:h-screen flex justify-center items-center p-8 overflow-hidden">
      <div>
        <div className="card sm:card-side bg-base-100 shadow-xl ">
          <figure>
            <img src={details.Propertyimage} alt="Album" />
          </figure>
          <div className="card-body text-xl ">
            <p>{details.Propertytitle}</p>
            <hr />
            <p>dasscription:</p>
            <p>
              all the property in our webpage are shown that will very clean and
              for properly saleing perpuse only
            </p>
            <hr />
            <p>{details.Pricerange}</p>
            <hr />
            <p>agent: {details.Agentname}</p>
            <hr />

            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={handlewish}>
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
        <div className="card-actions justify-center my-6">
          <button className="btn btn-primary">Review</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Details;
