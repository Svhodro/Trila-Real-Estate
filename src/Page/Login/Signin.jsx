import React, { useState, useEffect, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from "../../context/UserContext";
import app from "../../firebase/firebase";

function Signin() {
const {user,setuser}=useContext(UserContext)
    const navigate = useNavigate()
  const notify = () => toast("User Login  Sucsessfull!");
  const errormassage = () => toast("email or password invalid");
   // context 
  const [data, setData] = useState([]);  

  // login function

  const HandleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.pass.value;   
    // new function
    const auth = getAuth(app);
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    localStorage.setItem('userData',JSON.stringify(user))
    const data=localStorage.getItem('userData')
    if (data) {
      setuser(true)
    }
    notify()
    navigate('/')
    // ...
  })
  .catch((error) => {
   
    errormassage()
  });
  // old function
  
  }
  
  return (
    <div>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col-reverse ">
        <div className="text-center lg:text-left">
          <div className="flex justify-center items-center p-4 gap-2">
            <p className="text-2xl ">Login with </p>
            <button className="btn btn-circle btn-outline" >
              <FcGoogle className="size-6" />
            </button>
          </div>
          <div className="flex justify-center text-2xl">

            <p className="text-2xl text-slate-400">Go to Register page <Link to="/regis" className="text-slate-200"> Register</Link> </p>
            
          </div>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={(e) => {
            HandleLogin(e);
          }}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <ToastContainer />
  </div>
  )
}

export default Signin