import bannerBackground from "../assets/download (12).jpeg"
const Expertise = () => {
    return (
        <>
                <h1 className=" mb-16 text-4xl font-bold underline text-center">My Expertise</h1>
            <div className="flex mt-2">
                {/* boxed section */}

                <div
                    style={
                        {
                            backgroundImage: `url(${bannerBackground})`,
                            backgroundsize: "cover",
                        }
                    }
                    className="box- container items-center flex py-16 ">
                    <div className="flex justify-center text-white">
                        {/* text container */}
                        <div className="w-2/3 text-center space-y-3">
                            <h1 className="text-3xl font-bold">I Love these technologies</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum temporibus enim error perferendis debitis dolorem magnam deserunt, fugit, ut inventore sint corporis, nemo dolores nulla laudantium nisi iusto quam adipisci?</p>
                            <button className=" text-2xl px-4 py-2 bg-orange-500 rounded-fullshadow-lg">Hire Me</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    {/* skills container */}
                    <div className="w-2/3 flex justify-center h-fit space-x-3 mt-1 flex-wrap">
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">Core Java</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">J2EE</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">Hibernate(ORM Tool)</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">Spring Framework</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">SpringBoot Framework</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">Spring Security</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">JavaScript</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">ReactJs</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">NextJs</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">Tailwind CSS</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">Angular</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">State Management</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">SQL</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">Html</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">Aws</p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Expertise