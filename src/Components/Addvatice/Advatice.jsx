import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

function Advatice() {
  const [data, setData] = useState([]);
  const [courentdata, setCorentData] = useState([]);
  const [hidden, setHidden] = useState();
  const navigate=useNavigate()
  const {setdetails}=useContext(UserContext)
  useEffect(() => {
    axios.get("https://trila-backend.vercel.app/somestate").then((res) => {
      setHidden("hidden");
      setData(res.data);
    });
  });
  return (
    <div>
     <p className="sm:text-2xl pl-2 sm:pl-10 py-6">Advertisement</p>
      <div className="w-full flex justify-center items-center flex-wrap  gap-4 sm:gap-6">
        {/*   ✅ Product card 1 - Starts Here 👇 */}
        {data.map((res) => {
          const handleDetails = () => {         
            navigate("/private/details");
            setdetails(res)
          };

          return (
            <div
              className="w-48 sm:w-72 bg-white shadow-md  duration-500 hover:scale-105 hover:shadow-xl my-2"
              
            >
              <a href="#">
                <img
                  src={res.Propertyimage}
                  className="h-40 sm:h-60 w-full object-cover "
                />
                <div className="px-4 py-3 w-full">
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {res.Propertytitle}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto ">
                      range: {res.Pricerange}                      
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto ">
                      location: {res.Propertylocation}
                      
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-base  font-semibold text-black cursor-auto my-3">
                      status: {res.status}
                      
                    </p>
                  </div>
                  <div className="flex justify-start items-center">
                    <button className="btn bg-transparent text-black" onClick={handleDetails}>details</button>
                  </div>
                </div>
              </a>
              
            </div>
          );
        })}
      </div>
      {/* next section */}

      <div
        className={`w-full h-screen flex justify-center items-center ${hidden}`}
      >
        <span className="loading loading-ring loading-lg size-56"></span>
      </div>
    </div>
  );
}

export default Advatice;
