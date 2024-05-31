import React, { useContext } from 'react'
import { FaAmazon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';
function Category() {
const {setCategory}=useContext(UserContext)
const navigate=useNavigate()
const handleKid=()=>{
    navigate('/products')
    setCategory('kid')
}
const handleWoman=()=>{
    navigate('/products')
    setCategory('woman')
}
const handleMan=()=>{
    navigate('/products')
    setCategory('man')
}
const handleTopsale=()=>{
    navigate('/products')
    setCategory('topsale')
}
const handlePlant=()=>{
    navigate('/products')
    setCategory('plant')
}
const handleBook=()=>{
    navigate('/products')
    setCategory('book')
}


    return (
        <div className='w-full flex flex-col  gap-3'>
            <div >
                <div className='flex justify-center w-full gap-3 px-4'>
                    {/* 1st-card */}
                    <div className="rounded overflow-hidden shadow-lg bg-gray-950" onClick={handleWoman}>

                        {/* effect */}
                        <div className="group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer">

                            <img

                                alt="An image"
                                width={428}
                                height={428}
                                className="rounded-md object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125 w-full md:h-60 "
                                src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            />
                        <div className="absolute bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80  " />
                            <div className='w-full h-full  absolute justify-center items-center  flex '>
                                <FaAmazon className='absolute size-8 text-slate-300 z-10  ' />
                            </div>
                        </div>
                        <div className="px-6 sm:py-4 my-4">
                            <div className="font-bold sm:text-xl text-base ">Woman</div>
                        </div>
                    </div>
                    {/* 2st-card */}
                    <div className=" rounded overflow-hidden shadow-lg bg-gray-950" onClick={handleMan}>
                        {/* effect */}
                        <div className="group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer">

                            <img

                                alt="An image"
                                width={428}
                                height={428}
                                className="rounded-md object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125 w-full md:h-60 "
                                src="https://images.pexels.com/photos/3799205/pexels-photo-3799205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            />
                            <div className="absolute bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
                            <div className='w-full h-full  absolute justify-center items-center  flex '>
                                <FaAmazon className='absolute size-8 text-slate-300 z-10  ' />
                            </div>
                        </div>
                        <div className="px-6 sm:py-4 my-4" >
                            <div className="font-bold text-base sm:text-xl ">Man</div>

                        </div>

                    </div>
                </div>
                <div className='flex justify-center w-full   md:flex-row sm:p-4 gap-2 items-center px-4 my-4'>
                    {/* 1st-card */}
                    <div className=" rounded overflow-hidden shadow-lg bg-gray-950" onClick={handleBook}>

                        {/* effect */}
                        <div className="group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer">

                            <img

                                alt="An image"
                                width={428}
                                height={428}
                                className="rounded-md object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125 w-full md:h-60 "
                                src="https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            />
                            <div className="absolute bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
                            <div className='w-full h-full  absolute justify-center items-center  flex '>
                                <FaAmazon className='absolute size-8 text-slate-300 z-10  ' />
                            </div>
                        </div>

                        <div className="px-6 sm:py-4 my-4" >
                            <div className="font-bold text-base sm:text-xl ">Book's</div>

                        </div>

                    </div>
                    {/* 2st-card */}
                    <div className="rounded overflow-hidden shadow-lg bg-gray-950" onClick={handleKid}>

                        {/* effect */}
                        <div className="group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer">

                            <img

                                alt="An image"
                                width={428}
                                height={428}
                                className="rounded-md object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125 w-full md:h-60 "
                                src="https://images.pexels.com/photos/20283274/pexels-photo-20283274/free-photo-of-small-girl-in-a-dress-leaning-against-her-arm.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            />
                            <div className="absolute bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
                            <div className='w-full h-full  absolute justify-center items-center  flex '>
                                <FaAmazon className='absolute size-8 text-slate-300 z-10  ' />
                            </div>
                        </div>

                        <div className="px-6 sm:py-4 my-4" >
                            <div className="font-bold text-base sm:text-xl ">Kid's </div>

                        </div>

                    </div>
                    {/* 3st-card */}
                    <div className="q rounded overflow-hidden shadow-lg bg-gray-950" onClick={handleTopsale} >
                        {/* effect */}
                        <div className="group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer ">

                            <img

                                alt="An image"
                                width={428}
                                height={428}
                                className="rounded-md object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125 w-full md:h-60 "
                                src="https://images.pexels.com/photos/5858407/pexels-photo-5858407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            />
                            <div className="absolute bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
                            <div className='w-full h-full  absolute justify-center items-center  flex '>
                                <FaAmazon className='absolute size-8 text-slate-300 z-10  ' />
                            </div>

                        </div>
                        <div className="px-6 sm:py-4 my-4" >
                            <div className="font-bold text-base sm:text-xl ">Top  </div>

                        </div>

                    </div>
                </div>
                <div className='flex justify-center w-full px-4'>
                    {/* 1st-card */}
                    <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-gray-950" onClick={handlePlant}>
                        {/* effect */}
                        <div className="group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer">

                            <img

                                alt="An image"
                                width={428}
                                height={428}
                                className="rounded-md object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125 w-full md:h-60 "
                                src="https://images.pexels.com/photos/20266193/pexels-photo-20266193/free-photo-of-shih-tzu-puppies.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            />
                            <div className="absolute bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
                            <div className='w-full h-full  absolute justify-center items-center  flex '>
                                <FaAmazon className='absolute size-8 text-slate-300 z-10  ' />
                            </div>
                        </div>

                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Plant For You </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Category