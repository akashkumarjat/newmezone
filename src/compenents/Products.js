import React from 'react'

const Products = () => {
    return (
        <>
            <section className='our_products_section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 our_products_heading_top'>
                            <h1 className='Section_headings'>Our Products</h1>
                        </div>
                        <div className='col-lg-8 content_col'>
                            <p> Mezone Entrepreneur is provide the best security products in all world. We are known as the security solution leader in the security market. Our products is giving best performance compare with other products.</p>

                        </div>
                    </div>

                    <div className='row products_col_row'>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <a href='./Allproducts'>
                                <div className='products_col_outer_div'>
                                    <div className='products_icon_bg'>
                                        <span className='fa fa-bell'></span>
                                    </div>
                                    <div className='products_details_outer_div'>
                                        <h3>Shutter Siren System</h3>
                                        <p>GSM Shutter Security Siren (Standard) is a typically designed tailor made safety device for the total protection of unauthorized entry into your Shops, warehouse etc. by breaking open the shutter, even by few inches.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <a href='./Allproducts'>
                                <div className='products_col_outer_div'>
                                    <div className='products_icon_bg'>
                                        <span className='fa fa-door-open'></span>
                                    </div>
                                    <div className='products_details_outer_div'>
                                        <h3>Door Siren System</h3>
                                        <p>We the pioneers in advanced security systems are engaged in offering DOOR SIREN That gives a total freedom from all hassles of electric wirings. This works on battery so one does not need to worry about power cut or in case the intruder on purpose cuts the electricity connection.</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <a href='./Allproducts'>
                                <div className='products_col_outer_div'>
                                    <div className='products_icon_bg'>
                                        <span className='fa fa-map-marker'></span>
                                    </div>
                                    <div className='products_details_outer_div'>
                                        <h3>GPS Tracker</h3>
                                        <p>The GPS Tracker Device is the best for all type of vehicles like two wheeler, four wheeler (Truck, Bus) anti theft alarm system which can safeguard your bikes and scooters. It is made compatible with Bike/Electric Scooter, Field service agent, Collection agent, Medical representative, Bike Rental. </p>

                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <a href='./Allproducts'>
                                <div className='products_col_outer_div'>
                                    <div className='products_icon_bg'>
                                        <span className='fa fa-motorcycle'></span>
                                    </div>
                                    <div className='products_details_outer_div'>
                                        <h3>Tyre Sealant & Coolant</h3>
                                        <p>Vehicle Tyre Sealant & Coolant is a Unique Gel based formula to FIX punctures instantly caused by nails, thorns on the go, it will make your tubeless tyre puncture FREE, it also contains coolant which reduce the rate of heat produced in tyre during driving.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products