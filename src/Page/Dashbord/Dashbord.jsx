import React from "react";

function Dashbord() {
  return (
    <div>
      <div className="bg-slate-50  flex flex-col sm:flex-row">
        <nav className="bg-white w-full   sm:h-screen  sm:w-80   flex flex-row sm:flex-col  gap-2  sm:gap-2 border-r border-slate-100">
          <div className="logo text-lg sm:text-2xl font-bold text-center sm:h-10 my-4 sm:mt-6 flex items-center justify-center pl-2">
           Dashbord
          </div>
          <div className="user  hidden sm:flex items-center justify-center flex-col gap-4 border-b border-emerald-slate-50 py-4">
            <img
              className="w-10 rounded-full shadow-xl "
              src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
            />
            
           
          </div>
      
        </nav>
        <div className="right w-full flex gap-2 flex-col">         
          <div className="p-4">
            <h1 className="text-xl font-semibold text-slate-500 page-title">
              Page Name
            </h1>
          </div>
        </div>       
      </div>
    </div>
  );
}

export default Dashbord;
