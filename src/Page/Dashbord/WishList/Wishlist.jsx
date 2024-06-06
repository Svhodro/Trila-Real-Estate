import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UserContext from "../../../context/UserContext";

function Wishlist() {
  // offer,setoffer

  const [hidden, setHidden] = useState();
  const [data, setData] = useState([]);
  const vare = JSON.parse(localStorage.getItem("userData"));
  useEffect(() => {
    try {
      axios.get("https://trila-backend.vercel.app/allwish").then((res) => {
        setHidden("hidden");
        setData(res.data);
      });
    } catch (error) {}
  });
  const filteredData = data.filter((data) =>
    data.useremail.toLowerCase().includes(vare.email)
  );
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="sm:text-2xl pl-2 sm:pl-10 py-6">Wishlist</p>
      </div>
      <div>
        <div className="w-full flex justify-center items-center flex-wrap  gap-4 sm:gap-6">
          {/*   ✅ Product card 1 - Starts Here 👇 */}
          {filteredData.map((res) => {
            const handleoffer = () => {
              setoffer(res);
            };
            const handledelete = () => {
              const data = { id: res._id };
              axios.delete(
                `https://trila-backend.vercel.app/deletewish/${res._id}`
              );
            };
            return (
              <div className="w-48 sm:w-72 bg-white shadow-md  duration-500 hover:scale-105 hover:shadow-xl my-2">
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
                    <p>Agent</p>
                    <div className="flex items-center gap-2">
                      <div className="avatar">
                        <div className="w-8 rounded">
                          <img
                            src={res.Agentimage}
                            alt="Tailwind-CSS-Avatar-component"
                          />
                        </div>
                      </div>
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
                      <button className="btn" onClick={handleoffer}>
                        {" "}
                        <Link to="/private/dashbord/Offer">Make an offer</Link>
                      </button>
                    </div>
                    <div className="my-2">
                      <button className="btn " onClick={handledelete}>
                        Remove
                      </button>
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
  );
}

export default Wishlist;
