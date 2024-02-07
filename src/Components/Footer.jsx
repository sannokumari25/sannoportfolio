import React from 'react'

const Footer = () => {
  return<>
     <div className=" border py-5 bg-gray-100 flex justify-between px-64">
        <div>
           <p>@2023 Sanno Kumari <span></span>All Rights Reserved</p>
        </div>
        <div className="space-x-5">
            <a href="/about" className="hover:underline">About</a>
            <a href="/about" className="hover:underline">Privacy Policy</a>
            <a href="/about" className="hover:underline">Licensing{""}</a>
            <a href="/about" className="hover:underline">contact</a>
        </div>
     </div>
  </>
    
  
}

export default Footer