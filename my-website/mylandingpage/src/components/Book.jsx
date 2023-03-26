import React from 'react'

const Book = () => {
  return (
    <div name="Trial" className='w-full py-16 text-white bg-black'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 '>
               <div className='lg:col-span-2 my-5'>
                  <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Book Your Session now!</h1>
                   <p>Have a great sessions with trainers.</p>
               </div>
               <div className='my-4'>
                     <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input type="email" placeholder='Enter Email'  className='p-3  flex w-full rounded-md text-black '/>
                        <button className='text-black bg-[#00df9a] rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 '>Book Now</button>
                     </div>
               </div>
            </div>
    </div>
  )
}

export default Book