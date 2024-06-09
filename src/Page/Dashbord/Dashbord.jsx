import React, { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import UserContext from "../../context/UserContext";

function Dashbord() {
const {userdata}=useContext(UserContext)
console.log(userdata)
  const Normaluser = (
    <>
      <ul>
        <li>
          <Link to="/private/dashbord">MyProfile</Link>
        </li>
        <li>
          <Link to="/private/dashbord/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link to="/private/dashbord/userBougth">Property bought</Link>
        </li>
        <li>
          <Link to="/private/dashbord/userreview">My reviews</Link>
        </li>
      </ul>
    </>
  );

  const Admin = (
    <>
      <ul>
        <li>
          <Link>Admin Profile</Link>
        </li>
        <li>
          <Link>Manage Properties</Link>
        </li>
        <li>
          <Link>Manage Users</Link>
        </li>
        <li>
          <Link>Manage reviews</Link>
        </li>
      </ul>
    </>
  );

  const Agent = (
    <>
      <ul className="flex gap-4 flex-col">
        <li><Link to="/private/dashbord">Profile</Link></li>
        <li><Link to="/private/dashbord/addproperty">Add Property</Link></li>
        <li><Link to="/private/dashbord/myadded">My added properties</Link></li>
        <li><Link to="/private/dashbord/sold">My sold properties</Link></li>
        <li><Link to="/private/dashbord/requested">Requested properties</Link></li>
      </ul>
    </>
  );
  return (
    <div>
      <div className="bg-slate-50  flex flex-col sm:flex-row  ">
        <nav className="bg-white w-full   sm:h-screen  sm:w-80   flex flex-row sm:flex-col  gap-2  sm:gap-2 border-r border-slate-100 justify-between sm:justify-normal">
          <div className="logo text-lg sm:text-2xl font-bold text-center sm:h-10 my-4 sm:mt-6 flex items-center justify-center pl-2">
            Dashbord
          </div>
          <div className="user  hidden sm:flex items-center justify-center flex-col gap-4 border-b border-emerald-slate-50 py-4">
            <img
              className="w-10 rounded-full shadow-xl "
              src={userdata.userphoto}
            />

            <div className="font-bold">
             {userdata.userroll=="user"?Normaluser:<div></div>}
             {userdata.userroll=="agent"?Agent:<div></div>}
             {userdata.userroll=="admin"?Admin:<div></div>}
            </div>
          </div>
          <div className="sm:hidden flex justify-center items-center ">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1 bg-transparent border-none text-black">
              <CiMenuFries />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
               {userdata.userroll=="user"?Normaluser:<div></div>}
               {userdata.userroll=="agent"?Agent:<div></div>}
              </ul>
            </div>
          </div>
        </nav>
        <div className="right w-full flex gap-2 flex-col">
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
