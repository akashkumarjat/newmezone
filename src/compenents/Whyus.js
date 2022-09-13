import React from 'react'
import team from "../assets/img/icons/team.png";
import quality from "../assets/img/icons/quality.png";
import timelyDelivery from "../assets/img/icons/timely-delivery.png";
import care from "../assets/img/icons/care.png";



function Whyus() {

    return (
        <>
            <section className='why_choose_section why_choose_bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className="why_choose_section_heading">
                                <h2 className='Section_headings'>Why Choose Us</h2>
                            </div>
                        </div>
                    </div>
                   
                    <div className='row '>
                        <div className='col-lg-3 col-md-6 col-sm-12 why_boxes'>
                            <div className=''>
                                <div className='team_icons'>
                                <img className='img-fluid icons' src={team}/>
                                </div>
                                <h1>Experienced Team</h1>
                                <p>We have a vast experience in our domain and all team members are highly experienced professionals.</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 why_boxes'>
                            <div className=''>
                            <div className='team_icons'>
                                <img className='img-fluid icons' src={quality}/>
                                </div>   <h1>Quality Service</h1>
                                <p>Quality Management System committed to provide a high quality service and we never compromises on this.</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 why_boxes'>
                            <div className=''>
                            <div className='team_icons'>
                                <img className='img-fluid icons' src={timelyDelivery}/>
                                </div> <h1>Timely Delivery</h1>
                                <p>We don’t settle for anything but the timely delivery with quality service and we clearly communicate deadline to our customer too.</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 why_boxes'>
                            <div className=''>
                            <div className='team_icons'>
                                <img className='img-fluid icons' src={care}/>
                                </div>  <h1>We Care</h1>
                                <p>Here at krisent we don’t justget to know business, we take a deep interest in it and genuinely want to help your business each its potential goal.</p>
                            </div>
                        </div>
                    </div>
</div>

               
            </section>

        </>
    )
}

export default Whyus