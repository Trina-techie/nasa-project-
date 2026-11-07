import React from 'react';
import {FaReact} from  "react-icons/fa";
import {FaShuttleSpace, FaSpaceAwesome} from 'react-icons/fa6';
import downbg from "../../../assets/image.gif";
const ServiceData=[
    {
    title:"lorem",
    content:"loremipsum",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, quibusdam.",
    icon: <FaReact className="text-7xl"/>,
    aosDelay:"300",
    },
     {
    title:"lorem",
    content:"loremipsum",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, quibusdam.",
    icon: <FaShuttleSpace className="text-7xl"/>,
    aosDelay:"500",
    },
     {
    title:"lorem",
    content:"loremipsum",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, quibusdam.",
    icon: <FaSpaceAwesome className="text-7xl"/>,
    aosDelay:"700",
    },
];
const Services = () => {
  return (
    <div className='bg-black text-white relative z-50'>
        <div className="container">
            <div className='min-h-[400px]'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10'>
                    {ServiceData.map((data,index) => 
                        (
                            <div className='min-h-[180px] flex flex-col gap-4 justify-center items-center bg-gray-900 rounded-xl backdrop-blur-sm  text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto'>
                                {data.icon}
                                <h1>{data.title}</h1>
                                <p>{data.content}</p>
                                <p className='text-sm'>{data.description}</p>
                            </div>
                        ))
                    }
                </div>
                <img src={downbg} alt='' className='h-[150px]  w-full object-bottom mix-blend-screen translate-y-0 translate-x-0 relative z-[0]'/>
            </div>
        </div>
    </div>
  );
};

export default Services