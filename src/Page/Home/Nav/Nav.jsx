import React, { useState, useEffect, useContext } from "react";
// import { FaShoppingCart } from "react-icons/fa";
import logo from "/amazon.png";
import { FiSearch } from "react-icons/fi";
// import { FaMapLocationDot } from "react-icons/fa6";
// import UserContext from '../../../context/UserContext';
import { BiSolidCartAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

function Nav() {
  const navigate = useNavigate();
  //     // item
  //     const [contry, setContry] = useState()
  //     useEffect(() => {
  //         fetch('http://ip-api.com/json/?fields=61439')
  //             .then(res => res.json())
  //             .then(res => setContry(res?.country))

  //     })
  //     // context
  //     const {user}=useContext(UserContext)
  //   const useritem=<>
  //        {user?<p className='font-bold'>Logout</p>:<p className='font-bold'>Signin</p>}
  //   </>
  const vare = JSON.parse(localStorage.getItem("userdata"));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div className="bg-black flex justify-between w-full text-white py-2">
        <div className="px-4 w-2/6 sm:w-1/6 flex justify-center items-center">
          {/* logo */}
          <Link to="/">
            <img src={logo} alt="logo" className="w-16 sm:w-32" />
          </Link>
        </div>
        <div className="md:w-2/6 lg:w-3/6 sm:flex justify-center items-center hidden ">
          {/* searchbar-part */}
          <input
            type="text"
            placeholder="Type here"
            className="input bg-slate-200 input-bordered w-full h-10 rounded-none "
          />
          <button className=" bg-orange-400 rounded-none  text-white h-10 px-4 py-2">
            <FiSearch className="size-5 text-slate-950" />
          </button>
        </div>
        <div className="flex justify-end gap-2 sm:gap-5 px-8 w-4/6 sm:w-3/6 ">
          {/* Login and text section */}
          <div className="login flex flex-col">
            <p>Hello</p>
            {vare ? (
              <p className="font-bold cursor-pointer" onClick={handleLogout}>
                LogOut
              </p>
            ) : (
              <Link to="/Login">
                <p className="font-bold">Login</p>
              </Link>
            )}
          </div>
          <div className="order sm:flex flex-col hidden">
            <p>Return</p>
            <p className="font-bold">&Order</p>
          </div>
          <div className="prime sm:flex flex-col hidden">
            <p>Your</p>
            <p className="font-bold">Prime</p>
          </div>
          <div className="cart flex gap-2">
            <p>
              <Link to={"/private/Chackout"}>
                <BiSolidCartAlt className="size-8" />
              </Link>
            </p>
            <p className="text-xl font-bold">0</p>
          </div>
        </div>
      </div>

      <div className="flex bg-black  justify-center items-center sm:hidden ">
        {/* searchbar-part */}

        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full h-10 rounded-none bg-slate-300 "
        />
        <button className=" bg-orange-400 rounded-none  text-white h-10 px-4 py-2">
          <FiSearch className="size-5 text-slate-950" />
        </button>
      </div>
      {/* extra section on navber */}
      <div className="flex  justify-start pl-2 items-center w-full h-10 bg-slate-800 gap-4 md:text-white ">
        <div className="flex justify-start pl-8 items-center w-full h-10 bg-slate-800 gap-4 text-white  ">
          <Link to="/products">
            <div className="flex items-center gap-2q size-12">
              <IoMenu className="size-12 " />
              <p>All</p>
            </div>
          </Link>
        <div className="hidden md:flex justify-start  items-center w-full h-10 bg-slate-800 gap-4 text-white ">
          <p>Today's Delals</p>
          <p>Customer Service</p>
          <p>Registry</p>
          <p>GiftCards</p>
          <p>Sell</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
