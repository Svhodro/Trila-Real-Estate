import React, { useState, useEffect, useContext } from "react";
import logo from "/amazon.png";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import UserContext from "../../../context/UserContext";
import axios from "axios";

function Nav() {
  const { user, setroll, roll, setuserdata } = useContext(UserContext);
  const navigate = useNavigate();
  //
  const vare = JSON.parse(localStorage.getItem("userData"));

  const handleLogout = () => {
    localStorage.clear();    
    navigate("/");
    window.location.reload();
  };
  const navitem = (
    <>
      <li>
        <Link to="/">
          <p>Home</p>
        </Link>
      </li>
      <li>
        <Link to="/private/properties">
          <p> All properties</p>
        </Link>
      </li>
      <li>
        <Link to="/private/dashbord">
          <p> Dashboard</p>
        </Link>
      </li>
    </>
  );
  const [data, setData] = useState([]);
  const [userinfo, setuserinfo] = useState([]);
  useEffect(() => {
   
    axios.get("https://trila-backend.vercel.app/user").then((res) => {
      setData(res.data);
    });

    data.map((res) => {
      if (vare?.email == res.useremail) {
        setuserinfo(res);
        setuserdata(res);
        setroll(res.userroll);
      }
    });
  });

  return (
    <>
      {/* extra section on navber */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 text-base z-[1] font-bold p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navitem}
            </ul>
          </div>
          <div>
            {/* logo */}
            <Link to="/">
              <img src={logo} alt="logo" className="w-24 sm:w-32" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-base">
            {navitem}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <div className="hidden sm:flex 1">
            <p>
              Hello <br /> {userinfo?.username}
            </p>
          </div>
          <div className="login flex flex-col pr-2">
            {user ? (
              <p className="font-bold cursor-pointer" onClick={handleLogout}>
                LogOut
              </p>
            ) : (
              <Link to="/Login">
                <p className="font-bold">Login</p>
              </Link>
            )}
          </div>
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-offset-base-200 ring-offset-2">
              <img src={userinfo?.userphoto} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
