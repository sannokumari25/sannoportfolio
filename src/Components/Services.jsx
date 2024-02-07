import { useState } from "react";

const Services=()=>{
    useState([
        {
         id:"",
         title:"",
         descrption:"",
         actionButton:{
            title:"",
            link:"",
         }

        }
    ])
    return(
    <>
    <div className="main-container py-14">
      <h1 className="text-4xl font-bold text-center underline">My Services</h1>
      <div className="services-container space-x-5 px-10 flex mt-12">
      <div className="bg-slate-100 hover:bg-gray-100 cursor-pointer p-5 text-center shadow-lg rounded-xl service1 space-y-3">
      <i class="text-4xl fa-brands fa-aws"></i>

        <h1 className="text-2xl">Web Development</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolorem eum molestiae atque soluta ex animi nesciunt neque. Dignissimos, officia.</p>
        <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">Check</button>
      </div>
      <div className="bg-slate-100 hover:bg-gray-100 cursor-pointer p-5 space-y-3  text-center shadow-lg rounded-xl">
      <i class="text-4xl fa-solid fa-mobile"></i>
      <h1 className="text-2xl">Android Development</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolorem eum molestiae atque soluta ex animi nesciunt neque. Dignissimos, officia.</p>
        <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">Check</button>
      </div>
      <div className= "bg-slate-100 hover:bg-gray-100 cursor-pointer space-y-3 p-5 text-center shadow-lg rounded-xl">
      <i class=" text-4xl fa-solid fa-server"></i>
      <h1 className="text-2xl">Backend  Development</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolorem eum molestiae atque soluta ex animi nesciunt neque. Dignissimos, officia.</p>
        <button className="px-3 py-2 bg-orange-500  text-2xl rounded-full shadow-lg">Check</button>
      </div>
    </div>
    </div>
    </>
    )
}
export default Services

