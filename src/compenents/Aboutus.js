import React from 'react'
import { SocialIcon } from 'react-social-icons';
import team1 from '../assets/img/team/team-html-1.jpg'
import team2 from '../assets/img/team/team-html-4.jpg'
import team3 from '../assets/img/team/team1.jpg'
import team4 from '../assets/img/team/team4-1.jpg'


import about_img from '../assets/img/about-us-page-right-img.png'
import OurClients from './OurClients';
const Aboutus = () => {
    return (
        <>
            <section className='about_us_page'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className="why_choose_section_heading">
                                <h2 className='Section_headings'>About Us</h2>
                                <p className='about_us_heading_desc_para'>Mezone Entrepreneur was founded in 2020 with the vision of securing the safety of the business, home, shop, warehouse of this country with simple, yet effective products.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row about_row '>
                        <div className='col-lg-6 col-md-6 col-sm-12 about_detail_col'>
                            <h2>guranteed your safety
                                with highly security Product </h2>
                            <p>Mezone Entrepreneur was founded in 2020 with the vision of securing the safety of the business, home, shop, warehouse of this country with simple, yet effective products.</p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <img className='img-fluid about_img' src={about_img} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-webcoderskull padding-lg">
                <div className="container">
                    <div className="row why_choose_section_heading">
                        <h2 className='our_team'>Our Team</h2>
                    </div>


                    <ul className="row">
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight" >
                                <figure><img src={team1} className="img-responsive" alt="" /></figure>
                                <h3><a href="#">Depesh Choudhary</a></h3>
                                <p>CEO & Founder</p>
                                <ul className="follow-us clearfix">
                                    <li><a href="#"><SocialIcon url="https://facebook.com/" /></a></li>
                                    <li><a href="#"><SocialIcon url="https://twitter.com/" /></a></li>
                                    <li><a href="#"><SocialIcon url="https://linkedin.com/" /></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight" >
                                <figure><img src={team2} className="img-responsive" alt="" /></figure>
                                <h3><a href="#">Mr Rajeev Agarwal</a></h3>
                                <p>Team Member</p>
                                <ul className="follow-us clearfix">
                                    <li><a href="#"><SocialIcon url="https://facebook.com/" /></a></li>
                                    <li><a href="#"><SocialIcon url="https://twitter.com/" /></a></li>
                                    <li><a href="#"><SocialIcon url="https://linkedin.com/" /></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight" >
                                <figure><img src={team3} className="img-responsive" alt="" /></figure>
                                <h3><a href="http://www.webcoderskull.com/">Pradeep Singh</a></h3>
                                <p>Team Member</p>
                                <ul className="follow-us clearfix">
                                    <li><a href="#"><SocialIcon url="https://facebook.com/" /></a></li>
                                    <li><a href="#"><SocialIcon url="https://twitter.com/" /></a></li>
                                    <li><a href="#"><SocialIcon url="https://linkedin.com/" /></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight" >
                                <figure><img src={team4} className="img-responsive" alt="" /></figure>
                                <h3><a href="http://www.webcoderskull.com/">Akash Choudhary</a></h3>
                                <p>Team Member</p>
                                <ul className="follow-us clearfix">
                                    <li><a href="#"><SocialIcon url="https://facebook.com/" /></a></li>
                                    <li><a href="#"><SocialIcon url="https://twitter.com/" /></a></li>
                                    <li><a href="#"><SocialIcon url="https://linkedin.com/" /></a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <OurClients />
            </section>
        </>
    )
}

export default Aboutus