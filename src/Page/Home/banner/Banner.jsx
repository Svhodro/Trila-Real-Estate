import React from 'react'


function Banner() {
    return (
        <div className='w-full px-6 mb-4 '>

            <div className="group flex justify-center items-center relative   w-full h-full cursor-pointer text-4xl overflow-hidden rounded-lg">
                <div className="hero h-[150px] md:h-[200px] lg:h-[300px] rounded-lg" style={{ backgroundImage: 'url(https://www.ecomback.com/wp-content/uploads/2020/12/amazon-A_banner.jpg)' }} >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                        <h1 className="mb-5 text-xl sm:text-4xl font-bold">Today we will give <br /> 30% <br /> discount</h1>
                            <h1 className="mb-5 hidden sm:block sm:text-2xl font-bold">Amazon</h1>
                        </div>
                    </div>
                </div>

                {/* shine box */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            </div>

        </div>

    )
}

export default Banner