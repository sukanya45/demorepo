import React from 'react'

const Home = () => {
  return (
    <div name="Home" className='text-white bg-black'>
<div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
                           <p className='text-[#00df9a] font-bold '>Let's get started</p>
                <h1 className='md:text-5xl sm:text-6xl text-3xl font-bold md:py-6'>Get Your free session</h1>
                <div>
                    <p className='md:text-2xl sm:text-3xl text-xl font-bold text-gray-600'>Let's have a memorable journey of your fitness</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto  px-6 py-3 text-black '>Know More</button>
           </div>
    </div>
  )
}

export default Home