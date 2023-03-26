import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'
const Services = () => {
  return (
    <div name="Services" className='w-full py-[10rem] px-4 bg-white text-black'>
         <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-8  rounded-lg hover:scale-105 duration-300 '>
                <img  className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="/"/>
                <h2 className='text-2xl font-bold text-center py-8'>Personal Trainer</h2>
                <p className='text-center text-4xl font-bold '>$150</p>
                <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8 '>Perfect Timing</p>
                  <p className='py-2 border-b mx-8  '>Healthy Diet</p>
                  <p className='py-2 border-b mx-8  '>Single person only</p>
                  
                </div>
                <button className='text-black bg-[#00df9a] rounded-md font-bold w-[200px] my-6 mx-auto px-6 py-3 '>Buy Session</button>
            </div>

             {/*card-2  */}
                
             <div className='w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300 bg-gray-100'>
                <img  className='w-20 mx-auto mt-[-3rem] bg-transparent' src={double} alt="/"/>
                <h2 className='text-2xl font-bold text-center py-8'>Sharing Trainer upto 2</h2>
                <p className='text-center text-4xl font-bold '>$250</p>
                <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8 '>Perfect Timing</p>
                  <p className='py-2 border-b mx-8  '>Healthy Diet</p>
                  <p className='py-2 border-b mx-8  '>Upto 2 persons only</p>
                  
                </div>
                <button className='text-black bg-[#00df9a] rounded-md font-bold w-[200px] my-6 mx-auto px-6 py-3 '>Buy Session</button>
            </div>
             {/* card-3 */}
             <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img  className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="/"/>
                <h2 className='text-2xl font-bold text-center py-8'>Group Trainer</h2>
                <p className='text-center text-4xl font-bold '>$100</p>
                <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8 '>Perfect Timing</p>
                  <p className='py-2 border-b mx-8  '>Healthy Diet</p>
                  <p className='py-2 border-b mx-8  '>Create your journey with Group</p>
                  
                </div>
                <button className='text-black bg-[#00df9a] rounded-md font-bold w-[200px] my-6 mx-auto px-6 py-3 '>Buy Session</button>
            </div>
         </div> 
       
    </div>
  )
}

export default Services