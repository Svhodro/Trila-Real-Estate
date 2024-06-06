import { button } from '@material-tailwind/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Bougth() {
  const [hidden, setHidden] = useState();
  const [pay, setpay] = useState();
  const [data, setData] = useState([]);
  const vare = JSON.parse(localStorage.getItem("userData"));
  useEffect(() => {
    try {
      axios.get("https://trila-backend.vercel.app/Alloffer").then((res) => {
        setHidden("hidden");
        setData(res.data);
      });
    } catch (error) {
      
    }
   
  });
  const filteredData = data.filter((data) =>
    data.useremail.toLowerCase().includes(vare.email)
  );
  return (
    <div>
    <div className="flex justify-between items-center">
      <p className="sm:text-2xl pl-2 sm:pl-10 py-6">My bougth</p>
    </div>
    <div>
      <div className="w-full flex justify-center items-center flex-wrap  gap-4 sm:gap-6">
        {/*   ✅ Product card 1 - Starts Here 👇 */}
        {filteredData.map((res) => {        
                 const handleoffer=()=>{
                  setoffer(res)
                 }
          return (
            <div className="w-48 sm:w-72 bg-white shadow-md  duration-500 hover:scale-105 hover:shadow-xl my-2">
              <a href="#">
                <img
                  src={res.propertyimg}
                  className="h-40 sm:h-60 w-full object-cover "
                />
                <div className="px-4 py-3 w-full">
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {res.title}
                  </p>
                 
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto ">
                     offerprice: {res.OfferPrice}
                    </p>
                  </div>
                  <p>Agent</p>
                  <div className="flex items-center gap-2">
                   
                    <p className="text-base  font-semibold text-black cursor-auto my-3">
                      {res.Agentname}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-base  font-semibold text-black cursor-auto my-3">
                      status: {res.status}
                    </p>
                  </div>
               <div>
                <div>
                {res.status=='accepted'?<button><Link>Pay</Link></button>:<div></div>}
                </div>
                
                
               </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
    {/* next section */}
    <div
      className={`w-full h-screen flex justify-center items-center ${hidden}`}
    >
      <span className="loading loading-ring loading-lg size-56"></span>
    </div>
  </div>
  )
}

export default Bougth