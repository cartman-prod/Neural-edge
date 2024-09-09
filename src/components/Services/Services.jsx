import React from 'react'
import { FaCameraRetro } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';
import { SlNote } from'react-icons/sl';

const skillsData = [
    {
      name: "App Development",
      icon: <FaCameraRetro className="text-4xl text-primary" />,
      link: "#",
      description:
        "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
      aosDelay: "0",
    },
    {
      name: "Web Designing",
      icon: <GiNotebook className="text-4xl text-primary" />,
      link: "#",
      description:
        "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
      aosDelay: "300",
    },
    {
      name: "Graphic Designing",
      icon: <SlNote className="text-4xl text-primary" />,
      link: "#",
      description:
        "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
      aosDelay: "500",
    },
    {
      name: "Digital Marketing",
      icon: <SlNote className="text-4xl text-primary" />,
      link: "#",
      description:
        "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
      aosDelay: "700",
    },
  ];

const Services = () => {
  return (
    <>
    <div className='bg-gray-100 dark:bg-black dark:text-white
    py-12 sm:grid sm:place-items-center'>
    <div className='container'>
    {/* header section */}
    <div className='pb-12 text-center space-y-3'>
        <h1 data-aos='fade-up' className='text-3xl font-semibold
        text-violet-950 dark:text-primary'>Explore Our Services</h1>
        <p data-aos='fade-up' data-aos-delay='300'>We are self-service data analytics software
            that lets you create visually</p>
    </div>
    {/* card section */}
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
        {skillsData.map(({ icon, name, description}) => (
            <div data-aos='fade-up' data-aos-delay={skillsData.aosDelay} key={name} className='card flex flex-col items-center space-y-4 
            sm:space-y-4 p-4'>
                <div className='flex items-center justify-center'>
                    {icon}
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <h2 className='text-xl font-semibold text-primary'>
                        {name}
                    </h2>
                    <p className='text-sm text-gray-600 dark:text-gray-600'>
                        {description}
                    </p>
                </div>
            </div>
        ))}
    </div>
    {/* button section */}
    <div data-aos='fade-up' data-aos-delay='300' data-aos-offset='0' className='text-center mt-4 sm:mt-8'>
        <button className='btn-primary'>Learn More</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default Services