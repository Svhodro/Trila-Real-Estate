import React from "react";

function Homebanner() {
  return (
    <div className="overflow-hidden h-[300px] sm:h-[500px]  w-full">
      <div className="group flex justify-center items-center h-full relative w-full ">
        <div
          className="hero h-full"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/4506270/pexels-photo-4506270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <div className="hero-overlay bg-opacity-75"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hii..There</h1>
              <p className="mb-5">
                We provide the best offer to provide the realestate site and your dream selling price
              </p>             
            </div>
          </div>
        </div>
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine " />
      </div>
    </div>
  );
}

export default Homebanner;
