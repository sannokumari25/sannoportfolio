import  Typed from "typed.js";
import{useRef}from"react";
import{useEffect}from"react";
import bannerImage from "../assets/Screenshot_2022-02-03-23-29-03-25.png"
import bannerBackground from "../assets/download (12).jpeg"
const Banner=()=>{

 const el = useRef(null);

 useEffect(()=>{
    const typed = new Typed(el.current, {
        strings: ["Frontend Developer","Android Developer","Backend Developer"], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 100,
        typeSpeed: 50,
        backSpeed: 10,
        backDelay: 100,
        loop:true,
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };
 },[])
    return(
           <div className="main-container flex  items-center">
       
            {/* first dabba */}

 
        <div  style={
            {
               backgroundImage:`url(${bannerBackground})`,
               backgroundsize:"cover",
            }
            } 
        className="w-fit flex items-center justify-center text-white">
                {/* text */}
         <div className="w-2/3 space-y-2 ms-10">     
        <h3 className="text-3xl font-semibold">Hi,I am</h3>
        <h1 className=" text-5xl font-bold">Sanno Kumari</h1>
        <h2 className="text-3xl ">I am <span className="font-bold underline" ref={el}></span></h2>
        <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ut laboriosam, aperiam molestias corporis commodi? Repellat cupiditate veritatis quaerat architecto at eligendi in. Sed, ea illo ipsa fugiat excepturi, nulla reiciendis placeat quisquam nostrum fuga dignissimos, ullam iusto veritatis nobis minus adipisci nemo cumque et nesciunt exercitationem corporis! Sed, vitae.
        </p>
       
       <div className="flex icons-container space-x-5">
        <a href="hover:bg-orange-600 border cursor-pointer px-3 py-3 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800">
       <i className="fa-brands text-4xl fa-facebook"></i>
       </a>
       <a href="hover:bg-orange-600 border cursor-pointer px-3 py-3 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800">
       <i className="fa-brands text-4xl fa-instagram"></i>
       </a>
       <a href="hover:bg-orange-600 border cursor-pointer px-3 py-3 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800">
       <i className="fa-brands text-4xl fa-youtube"></i>
       </a>
       <a href="hover:bg-orange-600 border cursor-pointer px-3 py-3 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800">
       <i className="fa-brands text-4xl fa-linkedin"></i>
       </a>
       </div>
        <br/>
        <a className=" text-2xl px-3 py-2 bg-orange-500 rounded-full shadow-lg" href="/contact">Contact Me</a>
            </div>
            </div>
   {/* second dabba */}
            <div className="border-non p-10 mr-8 ml-8  flex w-fit justify-center">
                {/* image */}
                <img className="rounded-full shadow-lg h-36 w-48" src={bannerImage} alt=""/>
            </div>
        </div>
    )
}
export default Banner;