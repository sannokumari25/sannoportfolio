import { useState } from "react";
import bannerImage from "../assets/Screenshot_2022-02-03-23-29-03-25.png"
const About = () => {
    const [data, setData] = useState({
        image: bannerImage,
        title: "Java full Stack Developer",
        desc1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et tempore id nostrum. Quo, provident molestias expedita laudantium obcaecati repudiandae?`,
        desc2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus nemo alias itaque ipsum possimus vel, id fuga dolor culpa! Consequuntur eum reprehenderit tempore. Consectetur ut voluptatum ducimus commodi ipsam`,
        actionButton:{
            title:"Read More..",
            link:'/read more',

        }
    });
    return (
        <>
            <div className="main-container bg-gray-100 border py-16 ">
                <h1 className="text-center pb-16 text-4xl underline font-bold">About Me</h1>

                <div className="flex" items-center>
                    {/* image container */}
                    <div className=" mr-20 ml-20">
                        <img src={data.image} alt="sanno kumari" className="h-fit rounded-full w- h-52 w-72" />
                    </div>
                    {/* text container */}
                    <div className="w-full flex justify-center">
                        <div className="space-y-5 w-2/3">
                            <h1 className="text-3xl font-semibold">{data.title}</h1>
                            <p>{
                                data.desc1
                            }
                            </p>
                            <p>
                                {
                                    data.desc2
                                }
                            </p>

                            <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">{data.actionButton.title}</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};
export default About