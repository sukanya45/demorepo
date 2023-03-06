import React from 'react'


const AboutPage = () => {
  return (
    // main-div
    <div name="About" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">  
       
       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>

               <p className="text-xl mt-17">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, ipsum aspernatur ex quasi animi voluptatibus. Maiores obcaecati cum voluptatum tempore neque deserunt asperiores sed culpa consequatur numquam. Incidunt natus sapiente dolore assumenda ratione 
                impedit cum beatae cupiditate amet possimus repellendus ea doloribus 
                eligendi provident quia, eius quasi? Facere, beatae aut?
                </p>

                <br/>

                <p className="text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, ipsum aspernatur ex quasi animi voluptatibus. Maiores obcaecati cum voluptatum tempore neque deserunt asperiores sed culpa consequatur numquam. Incidunt natus sapiente dolore assumenda ratione 
                impedit cum beatae cupiditate amet possimus repellendus ea doloribus 
                eligendi provident quia, eius quasi? Facere, beatae aut?
                </p>

       </div>
    </div>
  )
}

export default AboutPage 