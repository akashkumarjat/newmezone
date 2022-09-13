import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slider from "../assets/img/slide1.png"
import sliderone from "../assets/img/slide2.png"
import slidertwo from "../assets/img/slide3.png"


import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <section className="slider_section">

        <Carousel>
        <Carousel.Item interval={1000000000}> 
            <img
              className="img-fluid"
              src={slider}
              alt="slider3"
            />

            <Carousel.Caption>
              <h1 className="Carousel_Caption">We are provide Top Class  Security Solution</h1>
              <button className="blue_btn"><a href="">Call Now</a></button>
            </Carousel.Caption>
          </Carousel.Item>

        
        <Carousel.Item>
            <img
              className="img-fluid"
              src={slidertwo}
              alt="slider2"
            />

            <Carousel.Caption>
              <h1 className="Carousel_Caption">Protecting your Best Moments </h1>
              <button className="blue_btn"><a href="">Call Now</a></button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid"
              src={sliderone}
              alt="slider1"
            />
            <Carousel.Caption>
              <h1 className="Carousel_Caption">We Care About Your Protection</h1>
              <button className="blue_btn"><a href="">Call Now</a></button>
            </Carousel.Caption>
          </Carousel.Item>
         
       
        </Carousel>

      </section>
    </>
  )
}

export default Header