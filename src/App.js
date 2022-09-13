import React from 'react'
import Home from './compenents/Home';
import Header from './compenents/Header'
import "./assets/index.css";
import Footer from './compenents/Footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Allproducts from './compenents/Allproducts';
import Contactus from './compenents/Contactus';
import Aboutus from './compenents/Aboutus';

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/Allproducts' element={< Allproducts />} />
          <Route path='/contactus' element={< Contactus />} />
          <Route path='/Aboutus' element={< Aboutus />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}
export default App