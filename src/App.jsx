import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Partners from './components/Partners/Partners';
import Services from './components/Services/Services';
import Carousel from './components/Carousel/Carousel';
import Blog from './components/BlogComp/Blog';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'

const App = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 100,
      delay: 100
    });
    AOS.refresh();
  }, [])

  return (
    <div className='overflow-x-hidden bg-white dark:bg-black
    duration-300'>
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Carousel />
      <Blog />
      <Footer />
    </div>
  )
}

export default App