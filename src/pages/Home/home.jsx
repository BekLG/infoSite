import React from 'react'
import Navbar from '../../components/ui/NavBar';
import HeroSection from './heroSection';
import WhatWeDo from './whatWeDo';
import GetInvolved from './getInvolved';
//<<<<<<< master
//import WhoWeAre from './whoWeAreSection'
//import Partners from './partners'
//import Footer from './footer';
//import NewsAndMediaSection from './newsAndMedia';
//=======
//import SocialsFeed from './socialsFeed';
//import WhoWeAre from './whoWeAreSection';
//import Partners from './partners';
//>>>>>>> master
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhoWeAre />
      <GetInvolved />
      <SocialsFeed />
      <WhatWeDo />
      <Partners />
      <NewsAndMediaSection />
      <Footer />
      
      
      
    
    </div>
  )
}

export default Home;