import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Partners from './components/Partners/Partners';
import Services from './components/Services/Services';
import Carousel from './components/Carousel/Carousel';



const App = () => {
  return (
    <div className='overflow-x-hidden bg-white dark:bg-black
    duration-300'>
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Carousel />
    </div>
  )
}

export default App