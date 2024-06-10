import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Review from "../../Components/Review/Review";

function Details() {
  const [wish, setwish] = useState([]);
  const [review, setreview] = useState();
  const [userwish, setuserwish] = useState([]);
  const navigate = useNavigate();
  const { details, userdata } = useContext(UserContext);
  const vare = JSON.parse(localStorage.getItem("userData"));
  const notify = () => toast("already added");
  const reviewnotish = () => toast("added to review");

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  useEffect(() => {
    axios.get("https://trila-backend.vercel.app/allwish").then((res) => {
      const data = res.data;
      const filtered = data.filter((user) => user.useremail == vare.email);
      setwish(filtered);
    });
    if (details == null) {
      navigate("/");
    }
    //  console.log(typeof(vare.email));
  });
  const handlewish = () => {
    const filtered = wish.filter((user) => user.productid == details._id);
    console.log(filtered)
   
    
    if (filtered[0]==undefined) {     
      const data = {
        useremail: vare.email,
        Agentimage: details.Agentimage,
        Agentname: details.Agentname,
        Pricerange: details.Pricerange,
        Propertyimage: details.Propertyimage,
        Propertylocation: details.Propertylocation,
        Propertytitle: details.Propertytitle,
        status: details.status,
        productid: details._id,
      };
      axios.post("https://trila-backend.vercel.app/addwish", data);
    } else{
      notify();
    }
  };

  const handlereview = (e) => {
    const text = e.target.value;
    setreview(text);
  };
  const Addreview = () => {
    
    const datee = new Date();
    const year = datee.getFullYear();
    const month = datee.getMonth() + 1;
    const day = datee.getDate();
    const withSlashes = [year, month, day].join('/');
    const Courentdate = withSlashes;
    const time = formatAMPM(new Date());
    const data = {
      useremail: vare.email,
      username: userdata.username,
      userimg: userdata.userphoto,
      title: details.Propertytitle,
      agent: details.Agentname,
      productid: details._id,
      review: review,
      time:time,
      date:Courentdate
    };
    axios
      .post("https://trila-backend.vercel.app/addreview", data)
      .then((res) => {
        const data=res.data
        if (data) {
          reviewnotish()
        }
    
      });
  };

  return (
    <div className="sm:h-screen flex justify-center items-center p-8 overflow-hidden">
      <div>
        <div className="card sm:card-side bg-base-100 shadow-xl ">
          <figure>
            <img src={details?.Propertyimage} alt="Album" />
          </figure>
          <div className="card-body text-xl ">
            <p>{details?.Propertytitle}</p>
            <hr />
            <p>dasscription:</p>
            <p>
              all the property in our webpage are shown that will very clean and
              for properly saleing perpuse only
            </p>
            <hr />
            <p>{details?.Pricerange}</p>
            <hr />
            <p>agent: {details?.Agentname}</p>
            <hr />

            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={handlewish}>
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
        <div className="card-actions justify-center my-6">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Add a review
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box flex justify-center items-center gap-2 flex-col">
              <p>give your review</p>
              <textarea
                placeholder="Bio"
                className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                onChange={(e) => handlereview(e)}
              ></textarea>
              <button className="btn" onClick={Addreview}>
                Add review
              </button>
              <div className="modal-action ">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">x</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Details;
