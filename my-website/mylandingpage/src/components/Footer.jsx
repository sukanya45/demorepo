import React from 'react'
import {
      FaDribbbleSquare,
      FaInstagramSquare,
      FaGithubSquare,
      FaTwitterSquare,
      FaFacebookSquare
      
    }from 'react-icons/fa'
const Footer = () => {
  return (
    <div name="Contact" className='w-full bg-black mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
          <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Healthyme.</h1>
            <p>To Get in Touch With us :</p>
            <p>infoHealthyme@gmail.com</p>
            <p className='py-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, consequatur illum. Tempore incidunt ipsum nesciunt dolore facilis unde quam 
                earum consequuntur voluptatibus obcaecati! Maiores eum, harum libero ratione magni fuga?</p>
                <h1 className='w-full text-3xl font-medium text-[#00df9a] mt-2'>Follow us on</h1>
            <div className='flex justify-between md:w-[75%] my-6 '>
               <FaDribbbleSquare size={30}/>
               <FaFacebookSquare size={30}/>
               <FaGithubSquare size={30}/>
               <FaInstagramSquare size={30}/>
               <FaTwitterSquare size={30}/>    
            </div>   
          </div>
    </div>
  )
}

export default Footer