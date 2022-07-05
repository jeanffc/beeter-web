import React from 'react'

import Header from '../components/Header';
import HeroHome from '../components/HeroHome';
import Footer from '../components/Footer';
import Services from '../components/Services';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <Services />
        {/* 
        <Works />
        <About /> 
        */}
      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  )
}

export default Home;
