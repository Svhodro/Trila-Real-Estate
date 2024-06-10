import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../../context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Soldproperty() {
  const notifyreject = () => toast("reject Sucsessfull!");
  const notifyaccept = () => toast("accept Sucsessfull!");
  const [hidden, setHidden] = useState();
  const [data, setData] = useState([]);
  const { userdata, setupdate } = useContext(UserContext);
  useEffect(() => {
    axios.get("https://trila-backend.vercel.app/Alloffer").then((res) => {
      setHidden("hidden");
      setData(res.data);
    });
  }, []);

  let price = 0;
  return (
    <div>
      
   
    <div>
      <div className="w-full flex justify-center items-center flex-wrap  gap-4 sm:gap-6">
        {/*   ✅ Product card 1 - Starts Here 👇 */}
        {data.map((res) => {
          const handlereject = () => {
            const data = {
              status: "rejected",
            };
            axios.put(`http://localhost:5000/updateoffer/${res._id}`, data)
            .then(res=>{
              const responce=res.data
                        if (responce) {
                          notifyreject();
                        }
                     
            })
          };
          const handleaccept = () => {
            const data = {
              status: "accepted",
            };
            axios.put(`http://localhost:5000/updateoffer/${res._id}`, data)
            .then(res=>{
              const responce=res.data
                        if (responce) {
                          notifyaccept();
                        }
                     
            })
          };
          if (res.Agentname == userdata.username && res.status == "bought") {
            price = price + Number(res.OfferPrice);

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
                        offer-price: {res.OfferPrice}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-black cursor-auto ">
                        location: {res.location}
                      </p>
                    </div>
                    <p>
                      Buyer-email: <br /> {res.useremail}
                    </p>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-black cursor-auto ">
                        Buyer-name: {res.username}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <p className="text-base  font-semibold text-black cursor-auto my-3">
                        status: {res.status}
                      </p>
                    </div>
                    <div className="flex justify-start items-center flex-col gap-3">
                      {res.status == "pending" ? (
                        <div className="flex gap-2 w-full">
                          <button
                            className="btn bg-transparent text-black "
                            onClick={handleaccept}
                          >
                            Accept
                          </button>
                          <button
                            className="btn bg-transparent text-black"
                            onClick={handlereject}
                          >
                            Reject
                          </button>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </a>
              </div>
               
            );
          }
        })}
         <ToastContainer />
      </div>
      {/* next section */}

      <div
        className={`w-full h-screen flex justify-center items-center ${hidden}`}
      >
        <span className="loading loading-ring loading-lg size-56"></span>
      </div>
    </div>
    <div>
          <h1 className="text-xl p-2 font-bold"> total sold price:{price}</h1>
        </div>
    </div>
  );
}

export default Soldproperty;
