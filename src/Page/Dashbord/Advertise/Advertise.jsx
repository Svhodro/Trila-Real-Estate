import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageAdvatice = async () => {
  const responce = await fetch("https://trila-backend.vercel.app/allstate");
  const data = await responce.json();
  return data;
};

function Advertise() {
  const Advaticee = () => toast("Sucsessfully Added!");

  const { isLoading, error, data } = useQuery({
    queryKey: ["ManageAddd"],
    queryFn: ManageAdvatice,
  });
  if (isLoading) {
    return (
      <div className={`w-full h-screen flex justify-center items-center`}>
        <span className="loading loading-ring loading-lg size-56"></span>
      </div>
    );
  }
  return (
    <div>
      <div className="w-full flex justify-center items-center flex-wrap  gap-4 sm:gap-6">
        {/*   ✅ Product card 1 - Starts Here 👇 */}
        {data.map((res) => {
          const handleAdd = () => {
            const data = {
              Propertyimage: res.Propertyimage,
              Propertytitle: res.Propertytitle,
              Propertylocation: res.Propertylocation,
              Agentname: res.Agentname,
              Agentimage: res.Agentimage,
              status: res.status,
              Pricerange: res.Pricerange,
            };
            axios
              .post("https://trila-backend.vercel.app/addAdvice", data)
              .then((res) => {
                const data = res.data;
                if (data) {
                    Advaticee()
                }
              });
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
                        onClick={handleAdd}
                      >
                        Advertise
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            );
          }
        })}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Advertise;
