import React from "react";
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
        <>
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 footer_col">
                            <h3>Mezone Entrepreneur</h3>
                            <p>Mezone Entrepreneur was founded in 2020 with the vision of securing the safety of the business, home, shop, warehouse of this country with simple, yet effective products.</p>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-12 footer_col">
                            <h3>Categories</h3>
                            <ul>
                                <li> <a href="/Allproducts"><span class='fa fa-angle-right'></span>Shutter Security</a></li>
                                <li> <a href="/Allproducts"><span class='fa fa-angle-right'></span> Door Security</a></li>
                                <li> <a href="/Allproducts"><span class='fa fa-angle-right'></span> Bike Security</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-12 footer_col">
                            <h3>Useful Link</h3>
                            <ul>
                                <li> <a href="/"><span class='fa fa-angle-right'></span> Home</a></li>
                                <li> <a href="/Allproducts"><span class='fa fa-angle-right'></span> Our Products</a></li>
                                <li> <a href="/aboutus"><span class='fa fa-angle-right'></span> About Us</a></li>
                                <li> <a href="/contactus"><span class='fa fa-angle-right'></span> Contact us</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12 footer_col">
                            <h3>Contact</h3>
                            <div>
                                <p>G-28, city mall plus, Shiv Hanuman mandir, Sanjay nagar, kanta chorahiya,
                                    jhotwara, Jaipur, Rajasthan</p>
                            </div>
                            <div className="">
                                <p><span className='fa fa-envelope'></span> <a href="mailto:mezoneentrepreneur06@gmail.com">mezoneentrepreneur06@gmail.com</a></p>
                                <p><span className='fa fa-phone'></span> <a href="callto:9460967837">+91 9460967837</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="row footer_second_row">
                        <div className="col-lg-6 col-md-4 col-sm-12 footer_logo">
                            <span>Copyright © 2018 - 2022 | www.mezoneentrepreneur.com | All Rights Reserved</span>
                        </div>

                        <div className="col-lg-6 col-md-4 col-sm-12 social_col">
                            <a className="social_icons" href="#"> <SocialIcon url="https://twitter.com/" /></a>
                            <a className="social_icons" href="#"><SocialIcon url="https://linkedin.com/" /></a>
                            <a className="social_icons" href="#"><SocialIcon url="https://facebook.com/" /></a>
                            <a className="social_icons" href="#"><SocialIcon url="https://whatsapp.com" /></a>
                        </div>
                    </div>
                    <div className="row developed_by_row">
                    <p>Developed by <a target="_blank" href="https://in.linkedin.com/in/akash-kumar-984b391b0"> Akash Choudhary</a></p>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Footer