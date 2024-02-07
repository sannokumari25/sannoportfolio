import { useState } from "react";
import Header from "./Components/Header";
import"./App.css";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Services from "./Components/Services";
import Expertise from "./Components/Expertise";
import Footer from "./Components/Footer";

function App(){

  return(
    <>
    {/* <h1 className="text-3xl font-bold bg-slate-500 underline">welcome to website</h1>
    <button className="bg-orange-800 text-white px-4 py-1 rounded-full shadow-lg">Hire Me</button> */}

    <Header/>
    <Banner/>
    <About/>
    <Services/>
    <Expertise/>
    <Footer/>
    
  
  </>
  )
}
export default App;