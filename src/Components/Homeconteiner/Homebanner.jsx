import React from 'react'
import "./index.css"
function Homebanner() {
    return (



        <div className='overflow-hidden imggas w-full'>
           

                <div className="group flex justify-center items-center relative w-full ">
                    <img src="https://images.unsplash.com/photo-1556382363-8967ad2b37f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-[300px] sm:h-[500px] md:h-[600px] ' />
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine " />
               
            </div>
        </div>


    )
}

export default Homebanner