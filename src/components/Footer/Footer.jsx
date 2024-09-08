import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterLinks = [
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Features",
    link: "/#features",
  },
  {
    title: "Works",
    link: "/#works",
  },
  {
    title: "Career",
    link: "/#career",
  },
];
const HelpLinks = [
  {
    title: "Customer Support",
    link: "/#support",
  },
  {
    title: "Delivery Details",
    link: "/#delivery-details",
  },
  {
    title: "Terms & Conditions",
    link: "/#terms",
  },
  {
    title: "Privacy Policy",
    link: "/#policy",
  },
];
const ResourcesLinks = [
  {
    title: "Free Ebooks",
    link: "/#ebooks",
  },
  {
    title: "How To Blog",
    link: "/#blogs",
  },
  {
    title: "Subscribe TCJ",
    link: "https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ?sub_confirmation=1",
  },
];


const Footer = () => {
  return (<>
    <div className='bg-black/95 text-white'>
        <div className='container'>
            <div className='grid md:grid-cols-3 py-5'>
            {/*company */}
            <div className='py-8 px-4'>
                <h1 className='sm:text-3xl text-xl font-bold
                sm:text-left text-justify mb-3 flex items-center gap-3'>Neural-Edge</h1>
                <p className='text-sm'>
                    efefefefefefeeeeeeeeeeefefef
                    feeeeeeeeeeeeeeeeeeeefffffffff
                    efffffffffffffffffefeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    e4444444444444ffffffffffffffffffff
                </p>
                <br/>
                <div className='flex items-center gap-4 mt-6'>
                    <a href='#'>
                        <FaInstagram className='text-2xl
                        hover:text-primary duration-300'/>
                    </a>
                    <a href='#'>
                        <FaFacebook className='text-2xl
                        hover:text-primary duration-300'/>
                    </a>
                    <a href='#'>
                        <FaLinkedin className='text-2xl
                        hover:text-primary duration-300'/>
                    </a>
                </div>
            </div>
            {/* Links Nav */}
            <div className='grid grid-cols-2 sm:grid-cols-3
            col-span-2 md:pl-10'>
                <div>
                    <div className='py-8 px-4'>
                     <h1 className='text-xl font-bold mb-3'>Company</h1>
                     <ul className='space-y-3'>
                        {FooterLinks.map((link) => (
                            <li key={link.title} className='hover:translate-x-1
                            hover:text-primary duration-300 space-x-1
                            text-gray-400 text-sm'>
                            <a href={link.link} className=''>
                                {link.title}
                            </a>
                        </li>
                        ))}
                      </ul>
                    </div>
                </div>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold mb-3'>Help</h1>
                        <ul className='space-y-3'>
                            {HelpLinks.map((link) => (
                                <li key={link.title} className='hover:translate-x-1
                                hover:text-primary duration-300 space-x-1
                                text-gray-400 text-sm'>
                                <a href={link.link} className=''>
                                    {link.title}
                                </a>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold mb-3'>Resources</h1>
                        <ul className='space-y-3'>
                            {ResourcesLinks.map((link) => (
                                <li key={link.title} className='hover:translate-x-1
                                hover:text-primary duration-300 space-x-1
                                text-gray-400 text-sm'>
                                <a href={link.link} className=''>
                                    {link.title}
                                </a>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer