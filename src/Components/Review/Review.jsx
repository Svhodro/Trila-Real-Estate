import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

const reviewData=async()=>{
  const responce =await fetch('https://trila-backend.vercel.app/latestreview')
  const data = await responce.json()
   return data
 }

function Review() {
  const {isLoading,error,data} = useQuery({ queryKey: ['reviewproperty'], queryFn: reviewData })
  

  if (isLoading) {
    return  <div
      className={`w-full h-screen flex justify-center items-center`}
    >
      <span className="loading loading-ring loading-lg size-56"></span>
    </div>
  }

  return (
    <div className="my-4">
      <p className="sm:text-2xl pl-2 sm:pl-10 py-6 ">Latest User review</p>
      <div className="flex justify-center items-center flex-wrap">
        <div className="w-full flex justify-center items-center flex-col  gap-4 sm:gap-6">
          {/*   ✅ Product card 1 - Starts Here 👇 */}
          {data.map((res) => {
            return (
              <div className="w-full flex justify-center items-center">
                <div className="w-2/3 flex flex-col gap-4 text-slate-900 bg-slate-200 rounded-lg p-4">
                  {/* Profile and Rating */}
                  <div className="flex justify justify-between">
                    <div className="flex gap-2">
                      <div className="w-7 h-7 text-center rounded-full bg-red-500">
                        <img src={res.userimg} className="size-8 rounded-badge" />
                      </div>
                      <span className="text-lg font-bold">{res.username}</span>
                    </div>
                    
                  </div>
                  <div>
                    <p className="font-extralight text-lg">Review:</p>
                  {res.review}
                  </div>
                  <div>
                  <p className="font-extralight text-lg">Property:</p>
                  {res.title}
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Review;
