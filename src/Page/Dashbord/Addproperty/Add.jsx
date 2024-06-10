import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Add() {
  const { userdata } = useContext(UserContext);
  const notify = () => toast("Add Sucsessfully");
  const handleadd = (e) => {
    e.preventDefault();
    // useremail
    // username
    // userphoto
    // userroll


    const data = {
      Pricerange: e.target.price.value,
      Propertylocation: e.target.location.value,
      Propertyimage: e.target.url.value,
      Propertytitle: e.target.propertytitle.value,
      Agentname: userdata.username,
      Agentemail: userdata.useremail,
     Agentimage:userdata.userphoto,
      status:'pending'
    };
    
   
      axios.post("https://trila-backend.vercel.app/addproperty",data)
      .then(res=>{
        const responce=res.data
        if (responce) {
          notify()
        }
      })
     
        
    
    // console.log(userdata);
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
                  placeholder="title"
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
                  placeholder="location"
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
                  className="input input-bordered"
                  name="Agentemail"
                  readOnly
                />
              </div>           

              <div className="form-control mt-6">
               
                <button className="btn btn-primary">Add property</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
