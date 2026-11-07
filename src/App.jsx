import React from 'react';
import bgVideo from "./assets/earth-back.mp4";
import Navbar from './assets/components/Navbar/Navbar';
import Hero from './assets/components/Hero/Hero';
import Services from './assets/components/Services/Services';
import Banner from './assets/components/Banner/Banner';
import Banner2 from './assets/components/Banner/Banner2';
import Footer from './assets/components/Footer/footer';
import Search from './assets/components/Search/Search';

const App = () => {
  return (
    <div className='bg-black'>
      <div className='h-700px relative'>
        <video  autoPlay loop muted className='fixed right-0 top-0 h-700px w-full object-cover z-1'>
          <source src={bgVideo} type='video/mp4'></source>
        </video>
        <Navbar/>
        <Hero/>
      </div>
      <Services/>
      <Banner/>
      <Banner2/>
      <Search/>
      <Footer/>
    </div>
  )
};

export default App;
