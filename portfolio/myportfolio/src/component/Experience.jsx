import React from 'react'
import icon1 from '../assets/icon5.png'
import icon2 from '../assets/icon5.png'
import icon3 from '../assets/icon5.png'
import icon4 from '../assets/icon5.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon5.png'
import icon7 from '../assets/icon5.png'
import icon8 from '../assets/icon5.png'

const Experience = () => {

    const exp=[
        {
            id:1,
            src:icon1,
            title:"HTML"
           

        },
        {
            id:2,
            src:icon2,
            title:"Css"
           

        },
        {
            id:3,
            src:icon3,
            title:"Bootstrap"
           

        },
        {
            id:4,
            src:icon4,
            title:"Javascript"

        },
        {
            id:5,
            src:icon5,
            title:"React Js"

        }, {
            id:6,
            src:icon6,
            title:"MongoDb"

        }, {
            id:7,
            src:icon7,
            title:"Node Js"

        }, {
            id:8,
            src:icon8,
            title:"Github"

        }
    ]
  return (
    
            <div name="experience" className="bg-gradient-to-b from-gray-800 to-black   w-full text-white md:h-screen">
           <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
               <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                <p className="py-6">These are the technoloy i've worked with</p>
               </div>

               <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                 {
                    exp.map(({id,src,title})=>(
                        <div key={id} className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
                        <img src={src} alt="icons"  className="w-20 mx-auto"/>
                        <p className="mt-4">{title}</p>
                    </div>
                    ))
                 }

               
               </div>
           </div>
    </div>
  )
}

export default Experience