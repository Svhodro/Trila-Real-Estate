import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Managereview = async () => {
  const responce = await fetch("https://trila-backend.vercel.app/allreview");
  const data = await responce.json();
  return data;
};

// useremail
// "rudrolipi@gmail.com"
// username
// "rudro"
// userimg
// "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?aut…"
// title
// "hamel-house"
// agent
// "Sporsho"
// productid
// "665aaa223f2c33ddaca8bf7c"
// review
// "this property  peaceful and the price are low for buy I will recommend…"
// time
// "12:19 am"
// date
// "2024/6/4"

function ManageReview() {
  const notify = () => toast("Delete  Sucsessfull!");
  const { isLoading, error, data } = useQuery({
    queryKey: ["Managepro"],
    queryFn: Managereview,
  });

  if (isLoading) {
    return (
      <div className={`w-full h-screen flex justify-center items-center`}>
        <span className="loading loading-ring loading-lg size-56"></span>
      </div>
    );
  }

  //
  // status
  //

  return (
    <div>
      <div>
        <div className="w-full flex justify-center items-center flex-wrap  gap-4 sm:gap-6">
          {/*   ✅ Product card 1 - Starts Here 👇 */}
          {data.map((res) => {
            const handleDelete = () => {
              axios.delete(`https://trila-backend.vercel.app/deletereview/${res._id}`)
              .then(res=>{
                const responce=res.data
                if (responce) {
                  notify()
                }
              })
            };

            return (
              <div className="w-48 sm:w-72 h-full mt-8 bg-white shadow-md  duration-500 hover:scale-105 hover:shadow-xl my-2">
                <a href="#">
                  <img
                    src={res.userimg}
                    className="h-40 sm:h-60 w-full object-cover "
                  />
                  <div className="px-4 py-3 w-full">
                    <p className="text-lg font-bold text-black truncate block capitalize">
                      {res.useremail}
                    </p>

                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-black cursor-auto ">
                        {res.username}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className=" font-semibold text-black cursor-auto ">
                        {res.review}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-black cursor-auto ">
                        {res.date}
                      </p>
                    </div>
                    <div>
                      <button className="btn btn-sm btn-error">delete</button>
                    </div>
                    <div></div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ManageReview;
