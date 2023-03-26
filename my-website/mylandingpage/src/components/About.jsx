import React from 'react'
import laptop from '../assets/laptop.jpg'
const About = () => {
  return (
    <div name="About" className='w-full bg-white px-4 py-16 '>
         <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
            <img className='w-[500px]  mx-auto my-4' src={laptop} alt="/" />
                   <div className='flex justify-center flex-col'>
                      <p className='text-[#00df9a] font-bold '>Stay Healthy and happy with us</p>
                      <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage your work and health</h1>
                      <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laboriosam eveniet velit beatae nam, 
                        nobis delectus in dignissimos tempora ex quibusdam laborum doloribus dicta ullam, 
                        enim et dolore mollitia aspernatur!
                     </p>
                     <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a] '>Know More</button>
                   </div>
         </div>
    </div>
  )
}

export default About