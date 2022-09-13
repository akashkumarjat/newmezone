import React from 'react'
import shutter_cateImg from '../assets/img/shutter-security.png'
import door_cateImg from '../assets/img/door-security.png'
import vehicle_cateImg from '../assets/img/vehicle-security.png'



const Category = () => {
    return (
        <>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='section_heading_row'>
                                <h1 className='Section_headings'>Category</h1>
                            </div>
                        </div>
                    </div>

                    <div className='row cate_boxes_row'>
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                            <div className='product_box'>
                                <img className='img-fluid' src={shutter_cateImg} alt="" />
                                <div className='product_box_content'>
                                    <h2 className='services_section_headings'>Shutter Security</h2>
                                    <p className='product_description'>Shutter Security System(GSM) is an innovative safety product in this security era. It comes with dual functionalities, which gets activated in case of unauthorized entry through the shutter. First, it gives you the alert via phone call. Second, it instantly raises loud siren. </p>
                                    <button className='order_now_btn'> <a href="callto:9460967837">Order Now</a></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                            <div className='product_box'>
                                <img className='img-fluid' src={door_cateImg} alt="" />
                                <div className='product_box_content'>
                                    <h2 className='services_section_headings'>Door Security</h2>
                                    <p className='product_description'>We are engaged in offering Door Siren with GSM that is a new innovative safety product in security epoch. This system works on batter thus does not require any wiring or any maintenance. This consists of 3 batteries in the auto dialling system which requires change in batter after a year’s time.  </p>
                                    <button className='order_now_btn'> <a href="callto:9460967837">Order Now</a></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                            <div className='product_box'>
                                <img className='img-fluid' src={vehicle_cateImg} alt="" />
                                <div className='product_box_content'>
                                    <h2 className='services_section_headings'>Vehicle Security</h2>
                                    <p className='product_description'>First Time in India. Siren Alert with Engine Locking System. If Theft Attempt this system start siren and lock the engine so that no one can start it. Our organization holds years of understanding in presenting a wide gamut of car safety system and Bike , motorcycle security sestem.
                                    </p>
                                    <button className='order_now_btn'> <a href="callto:9460967837">Order Now</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category