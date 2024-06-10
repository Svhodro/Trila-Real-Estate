import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserReview() {
  const notify = () => toast("Delete  Sucsessfull!");
  const [hidden, setHidden] = useState();
  const [data, setData] = useState([]);  
  const vare = JSON.parse(localStorage.getItem("userData"));
  useEffect(() => {
    try {
      axios.get("https://trila-backend.vercel.app/allreview").then((res) => {
        setHidden("hidden");
        setData(res.data);
      });
    } catch (error) {}
  });
  const filteredData = data.filter((data) =>
    data.useremail.toLowerCase().includes(vare.email)
  );
 
  return (
    <div className="flex justify-center flex-col gap-2 items-center flex-wrap">
      {filteredData.map((res) => {
        
         
          const handleDelete=()=>{
            
            const data={id:res._id}            
            axios.delete(`https://trila-backend.vercel.app/deletereview/${res._id}`)
            .then(res=>{
              const data=res.data
              if (data) {
                notify()
              }
              
            })
          }
      
        return (
          <div>
            <div className="card w-96 bg-base-300 shadow-xl ">
              <div className="card-body">
                <h2 className="card-title">{res.title}</h2>
                <p>Agent: {res.agent}</p>
                <p>Review: <br /> {res.review}</p>
                <p>Date: {res.date}/{res.time}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary" onClick={handleDelete}>delete</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div
        className={`w-full h-screen flex justify-center items-center ${hidden}`}
      >
        <span className="loading loading-ring loading-lg size-56"></span>
      </div>
      <ToastContainer />
    </div>
  );
}

export default UserReview;
