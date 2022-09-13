import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import client1 from "../assets/img/clients/614467bc9385d.png";
import client2 from "../assets/img/clients/614b1f9f54fe7.png";
import client3 from "../assets/img/clients/614b291ace650.webp";
import client4 from "../assets/img/clients/download (1).png";
import client5 from "../assets/img/clients/download.jfif";
import client6 from "../assets/img/clients/1.png";
import client7 from "../assets/img/clients/2.webp";
import client8 from "../assets/img/clients/3.webp";
import client9 from "../assets/img/clients/4.png";
import client10 from "../assets/img/clients/5.webp";
import client11 from "../assets/img/clients/6.webp";







function OurClients() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    return (
        <>
            <section className='our_clients'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className="why_choose_section_heading">
                                <h2 className='Section_headings'>Our Valuable Clients</h2>
                            </div>
                        </div>

                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <Carousel swipeable={false}
                                draggable={false}
                                showDots={false}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={2000}>
                                <div><img className='img-fluid client_img' src={client1} /></div>
                                <div><img className='img-fluid client_img' src={client2} /></div>

                                <div><img className='img-fluid client_img' src={client3} /></div>
                                <div><img className='img-fluid client_img' src={client4} /></div>
                                <div><img className='img-fluid client_img' src={client5} /></div>
                                <div><img className='img-fluid client_img' src={client6} /></div>
                                <div><img className='img-fluid client_img' src={client7} /></div>

                                <div><img className='img-fluid client_img' src={client8} /></div>
                                <div><img className='img-fluid client_img' src={client9} /></div>
                                <div><img className='img-fluid client_img' src={client10} /></div>
                                <div><img className='img-fluid client_img' src={client11} /></div>
                                <div><img className='img-fluid client_img' src={client6} /></div>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurClients