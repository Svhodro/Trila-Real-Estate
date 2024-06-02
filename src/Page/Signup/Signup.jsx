import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "../../context/UserContext";
import app from "../../firebase/firebase";
import axios from "axios";

function Signup() {

  const navigate = useNavigate();
  const {user,setuser} = useContext(UserContext);
  const notify = () => toast("Registration Sucsess! Plz login");
  const checkPassword = (password) => {
    // Check if the password length is at least 6 characters
    if (password.length < 6) {
        setalart(true)
        return false;
    }
    // Check if the password contains at least one capital letter
    if (!/[A-Z]/.test(password)) {
        setalart(true)
        return false;
    }
    // Check if the password contains at least one special character
    if (!/[!@#$%^&*()_+]/.test(password)) {
        setalart(true)
        return false;
    }
    // All conditions met, password is valid
    setalart(false)
    return true;
}
  const handleReg = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.pass.value;
    const photourl = e.target.url.value;
    const username = e.target.name.value;
    const roll='user';
    const valid = checkPassword(password)
    const fullinfo={email,photourl,username,roll}
    // console.log(email,password,username,photourl)
    if(valid){
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;  
          // ...
          axios.post('https://trila-backend.vercel.app/adduser',fullinfo)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
    
       

  };
  // passwor validation
 

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col-reverse ">
          <div className="text-center lg:text-left text-2xl flex justify-center items-center">
            <p className="py-6">Go to login page -</p>
            <Link to="/login" className="text-lime-400">          
              Login page
            </Link>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              className="card-body"
              onSubmit={(e) => {
                handleReg(e);
              }}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">UserName</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoUrl"
                  className="input input-bordered"
                  name="url"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="pass"
                  required
                />
                 {alart ? <div role="alert" className="alert alert-error py-2 my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Invalid password. </span>
                        </div> : <h1 className='hidden'></h1>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
