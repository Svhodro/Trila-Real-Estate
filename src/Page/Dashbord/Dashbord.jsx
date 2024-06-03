import React from "react";
import { Link, Outlet } from "react-router-dom";

function Dashbord() {
  const Normaluser = (
    <>
      <ul>
        <li>
          <Link to="/private/dashbord/profile">MyProfile</Link>
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
      <ul>
        <li>Profile</li>
        <li>Add Property</li>
        <li>My added properties</li>
        <li>My sold properties</li>
        <li>Requested properties</li>
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
              src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
            />
            <div className="font-bold">
             {Normaluser}
            </div>
          </div>
          <div className="sm:hidden flex justify-center items-center ">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                Click
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                {Normaluser}
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
