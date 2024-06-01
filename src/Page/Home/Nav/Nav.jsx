import React, { useState, useEffect, useContext } from "react";
import logo from "/amazon.png";
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
  const navitem = (
    <>
      <li>
        
        <Link to='/'>
          <p>Home</p>
        </Link>
      </li>
      <li>
       
        <Link to='/private/properties'>
          <p> All properties</p>
        </Link>
      </li>
      <li>
        
        <Link to='/private/properties'>
          <p> Dashboard</p>
        </Link>
      </li>
    </>
  );

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
          <div >
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
        <div className="navbar-end gap-2">
          <div>
          <p >Hello <br /> sporsho</p>
          </div>
          <div className="login flex flex-col">
            
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
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
