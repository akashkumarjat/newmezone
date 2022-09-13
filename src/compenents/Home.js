import React from 'react'
import Slider from './Slider'
import Category from './Category';
import Products from './Products';
import Whyus from './Whyus';
import OurClients from './OurClients';


const Home = () => {
  return (
    <>
      <Slider />
      <Whyus/>
      <Category />
      <Products />
      <OurClients/>
    </>
  )
}

export default Home