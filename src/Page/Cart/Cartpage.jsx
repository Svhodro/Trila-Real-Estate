import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Cartpage() {
    const [data, setData] = useState([])
    const [usercart, setUsercart] = useState([])
    const [hidden, setHidden] = useState()
    const [userData, setuserData] = useState([])
    const [total, settotal] = useState(0)
    useEffect(() => {
        axios.get('https://amazon-clone-backend-roan.vercel.app/usercart')
            .then(res => {
                setHidden('hidden')
                setData(res.data)
                setuserData(JSON.parse(localStorage.getItem('userdata')))
            })



    })



    //     ProductId
    // : 
    // "664e1afad59b62088e287127"
    // catagory
    // : 
    // "man"
    // img
    // : 
    // "https://images.unsplash.com/photo-1511105612320-2e62a04dd044?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    // price
    // : 
    // 466
    // title
    // : 
    // "Jince"
    // user
    // : 
    // "rudrolipi@gmail.com"
    // _id
    // : 
    // "6650ee6ea0971f2d27777ef2"

    return (
        <div className='w-full min-h-screen  '>
            <div class="h-full   pt-20 pb-6 ">

                <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">

                    <div class="rounded-lg md:w-2/3 ">
                        <h1 class="mb-10 text-start text-3xl pl-4 font-bold">Shopping Cart</h1>
                        <hr className='py-3 border-slate-600 ' />
                        {/* cart part */}
                        {data.map(res => {
                            if (res.user == userData.email) {
                             
                                return <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                    <img src={res.img} alt="product-image" class="w-full rounded-lg sm:w-40" />
                                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                        <div class="mt-5 sm:mt-0">
                                            <h2 class="text-lg font-bold text-gray-900">{res.title}</h2>
                                           
                                        </div>
                                        <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                            <div class="flex items-center border-gray-100">
                                                <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                                <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                                                <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                            </div>
                                            <div class="flex items-center space-x-4">
                                                <p class="text-sm">{res.price}</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        })}


                    </div>
                    {/* Show part */}
                    <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                      
                        <div class="flex justify-between">
                            <p class="text-gray-700">Shipping</p>
                            <p class="text-gray-700">${total}</p>
                        </div>
                        <hr class="my-4" />
                        <div class="flex justify-between">
                            <p class="text-lg font-bold">Total</p>
                            <div class="">
                                <p class="mb-1 text-lg font-bold">$134.98 USD</p>
                                <p class="text-sm text-gray-700">including VAT</p>
                            </div>
                        </div>
                        <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                    </div>
                </div>
            </div>


            {/* next section */}

            <div className={`w-full h-screen flex justify-center items-center ${hidden}`} >
                <span className="loading loading-ring loading-lg size-56"></span>
            </div>
        </div>
    )
}

export default Cartpage