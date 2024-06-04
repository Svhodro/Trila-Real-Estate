import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Allproduct from "../../Components/AllProduct/Allproduct";
import UserContext from "../../context/UserContext";

function Properties() {
  const [courentdata, setCorentData] = useState([]);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [alldata, setalldata] = useState(true);
  const [hidden, setHidden] = useState();
  const { setdetails } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {

    axios.get("https://trila-backend.vercel.app/allstate").then((res) => {
      setHidden("hidden");
      setData(res.data);
    });
  });
  const filteredData = data.filter((data) =>
    data.Propertylocation.toLowerCase().includes(searchQuery.toLowerCase())
  );
  useEffect(() => {
    searchQuery ? setalldata(false) : setalldata(true);
  });
  return (
    <div>
      <div className="px-6 sm:px-16  ">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          value={searchQuery}
          className="input input-bordered w-full bg-white "
        />
      </div>
      <div className="flex justify-between items-center">
        <p className="sm:text-2xl pl-2 sm:pl-10 py-6">Properties</p>
        <div className="dropdown dropdown-end pl-2 sm:pr-6 py-6 ">
          <div tabIndex={0} role="button" className="btn m-1">
            sort
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <p>$0-$2000 </p>
            </li>
            <li>
              <a>$2001-$3000</a>
            </li>
          </ul>
        </div>
      </div>
      {alldata ? (
        <Allproduct />
      ) : (
        <div>
          <div className="w-full flex justify-center items-center flex-wrap  gap-4 sm:gap-6">
            {/*   ✅ Product card 1 - Starts Here 👇 */}
            {filteredData.map((res) => {
              const handleDetails = () => {
                navigate("/private/details");
                setdetails(res);
              };
              if (res.status == "verified") {
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
                        <div className="flex justify-start items-center">
                          <button
                            className="btn bg-transparent text-black"
                            onClick={handleDetails}
                          >
                            details
                          </button>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              }
            })}
          </div>
          {/* next section */}

          <div
            className={`w-full h-screen flex justify-center items-center ${hidden}`}
          >
            <span className="loading loading-ring loading-lg size-56"></span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Properties;
