import React from 'react'
import Shutter_Siren_Standard from "../assets/img/non-gsm-shutter.jpg"
import GSM_Shutter_PLUS from "../assets/img/gsm-siren-2-number.png"
import GSM_Shutter_Power from "../assets/img/GSM-Shutter-POWER.jpg"
import GSM_Shutter_Multi from "../assets/img/shutter_multi.png"
import Door_Siren_Non_GSM from "../assets/img/gsm-door-security-siren.png"
import GSM_Door_PLUS from "../assets/img/Gsm-Door-plus.jpg"
import GSM_Door_Multi from "../assets/img/Gsm-Door-Security-Device-MULTI-Add-extra-16-Wireless-Device.jpg"
import GSM_PIR_PLUS from "../assets/img/Gsm-PIR-Security-Device-Plus.jpg"
import GSM_PIR_Multi from "../assets/img/Gsm-PIR-Security-Device-Plus.jpg"
import Lady_Baton from "../assets/img/lady-baton.png"
import Guard_Shock_Stick from "../assets/img/Guard-Safety-Stick-Electric-With-Torch.jpg"
import Car_Safety_Device from "../assets/img/bike-safty.png"
import bikesafty from "../assets/img/bike-safty.png"
import Vehicle_Tyre_Sealant from "../assets/img/tyre-sealant.png"


const Allproducts = () => {
    return (
        <>
            <section className='All_products_section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 services_top_heading_banner'>
                            <div className="categories_top_banner_row categories_top_banner_row_content">
                                <h2>Our Products</h2>
                                <p>The Mezone Entrepreneur is provide the best security products in world. We sell our products with full confidence and customer's trust. Our Products is provide full security.</p>
                            </div>
                        </div>
                    </div>


                    {/* product 1 */}
                    <div className='row products_row' id='shutter'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <h2 className='products_heading'>Shutter Siren Standard (Non-GSM)</h2>
                            <p className='products_desc_para'>GSM Shutter Security Siren (Standard) is a typically designed tailor made safety device for the total protection of unauthorized entry into your Shops, warehouse etc. by breaking open the shutter, even by few inches.</p>
                            <ul className='products_features'>
                                <li>Hard acoustic siren </li>
                                <li>Arm and Disarm by key </li>
                                <li>Dry battery operated </li>
                                <li>Standby Battery life up to 4 Year </li>
                                <li>Low Battery alert </li>
                            </ul>
                            <button className='call_now_btn'><a href="callto:9460967837">Call Now</a></button>
                        </div>

                        <div className='col-lg-6 col-md-12 col-sm-12 prod_img_col_right'>
                            <img className='img-fluid prod_img' src={Shutter_Siren_Standard} alt='' />
                        </div>
                    </div>

                    {/* product 2 */}
                    <div className='row products_row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1'>
                            <img className='img-fluid prod_img' src={GSM_Shutter_PLUS} alt='' />
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 padding_left_80 order-1 order-lg-2'>
                            <h2 className='products_heading'>GSM Shutter PLUS</h2>
                            <h3 className='products_sub_heading'>Alert on 5 number calling ,SMS & App </h3>
                            <p className='products_desc_para'>Mezone GSM Shutter Security Siren (Plus) is a typically designed tailor made safety device for the total protection of unauthorized entry into your shops, warehouse etc. by breaking open the shutter, even by few inches. It gives direct alert on registered 5 mobile numbers via SMS and Call.</p>
                            <ul className='products_features'>
                                <li>No dry battery for Siren  </li>
                                <li>Battery & Signal Strength SMS when arm and disarm  </li>
                                <li>Battery backup up to 12-15 days</li>
                                <li>Password protected </li>
                                <li>Disarm via Call(Press 1 on dial pad), SMS & App</li>
                                <li>Low battery SMS alert</li>
                                <li>Auto Arm & Disarm feature available </li>
                            </ul>
                            <button className='call_now_btn'><a href="callto:9460967837">Call Now</a></button>
                        </div>
                    </div>


                    {/* product 3 */}
                    <div className='row products_row'>

                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <h2 className='products_heading'>GSM Shutter POWER</h2>
                            <h3 className='products_sub_heading'>PIR Motion & fire Safety with Alert 5 number calling, SMS & App</h3>
                            <p className='products_desc_para'>Mezone GSM Shutter Security Siren (Plus) is a typically designed tailor made safety device for the total protection of unauthorized entry into your shops, warehouse etc. by breaking open the shutter, even by few inches. And it protect your shops, warehouse etc. from Motion & fire. It gives direct alert on registered 5 mobile numbers via SMS and Call.</p>
                            <ul className='products_features'>
                                <li>No dry battery for Siren  </li>
                                <li>Battery & Signal Strength SMS when arm and disarm  </li>
                                <li>Battery backup up to 12-15 days</li>
                                <li>Password protected </li>
                                <li>Disarm via Call(Press 1 on dial pad), SMS & App</li>
                                <li>Low battery SMS alert</li>
                                <li>Auto Arm & Disarm feature available </li>
                                <li>Detect intrusion if any shutter get cut from mid by any mode like gas cutter </li>
                                <li>SMS adjust sensitivity of sensor as per your environment </li>
                                <li>Pet immune sensor</li>
                            </ul>
                            <button className='call_now_btn'><a href="callto:9460967837">Call Now</a></button>

                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 prod_img_col_right'>
                            <img className='img-fluid prod_img' src={GSM_Shutter_Power} alt='' />
                        </div>
                    </div>


                    {/* product 4 */}
                    <div className='row products_row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1'>
                            <img className='img-fluid prod_img' src={GSM_Shutter_Multi} alt='' />
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 padding_left_80 order-1 order-lg-2'>
                            <h2 className='products_heading'>GSM Shutter MULTI</h2>
                            <h3 className='products_sub_heading'>Add upto 16 Wireless Device</h3>
                            <p className='products_desc_para'>The Mezone Multi-Shutter Siren is designed, tailor-made safety device for the total protection of unauthorized entry into your offices, warehouse etc. by breaking open the door, even by few inches. It immediately notifies the user by sending a direct alert to 5 registered mobile numbers via Call & SMS. Can connect up to 5 shutters and comes with the main device and 1 sensor.</p>
                            <ul className='products_features'>
                                <li>No dry battery for Siren  </li>
                                <li>Battery & Signal Strength SMS when arm and disarm  </li>
                                <li>Battery backup up to 12-15 days</li>
                                <li>Password protected </li>
                                <li>Disarm via Call(Press 1 on dial pad), SMS & App</li>
                                <li>Low battery SMS alert</li>
                                <li>Auto Arm & Disarm feature available </li>
                                <li>Add upto 10 normal sensor (Like Door, Shutter, PIR, glass break detector, etc)</li>
                                <li>Add upto 4 all active sensor (Like Smoke, Panic button, etc) </li>
                                <li>Add upto 2 remotes (Activate, Deactivate, panic on and panic off) </li>
                            </ul>
                            <button className='call_now_btn'><a href="callto:9460967837">Call Now</a></button>

                        </div>
                    </div>


                    {/* product 5 */}
                    <div className='row products_row'>

                        <div className='col-lg-6 col-md-12 col-sm-12 '>
                            <h2 className='products_heading'>Door Siren (Non-GSM)</h2>
                            <p className='products_desc_para'>We the pioneers in advanced security systems are engaged in offering DOOR SIREN That gives a total freedom from all hassles of electric wirings. This works on battery so one does not need to worry about power cut or in case the intruder on purpose cuts the electricity connection.</p>
                            <ul className='products_features'>
                                <li>Hard acoustic siren </li>
                                <li>Arm and Disarm by key </li>
                                <li>Dry battery operated </li>
                                <li>Standby Battery life up to 4 Year </li>
                                <li>Low Battery alert </li>
                            </ul>
                            <button className='call_now_btn'><a href="callto:9460967837">Call Now</a></button>

                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 prod_img_col_right'>
                            <img className='img-fluid prod_img' src={Door_Siren_Non_GSM} alt='' />
                        </div>
                    </div>



                    {/* product 6 */}
                    <div className='row products_row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1'>
                            <img className='img-fluid prod_img' src={GSM_Door_PLUS} alt='' />
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 padding_left_80 order-1 order-lg-2'>
                            <h2 className='products_heading'>GSM Door PLUS</h2>
                            <h3 className='products_sub_heading'>Alert 5 number calling ,SMS & App</h3>
                            <p className='products_desc_para'>Mezone GSM Shutter Security Siren (Plus) is a typically designed tailor made safety device for the total protection of unauthorized entry into your home etc. by breaking open the door, even by few inches. It gives direct alert on registered 5 mobile numbers via SMS and Call.</p>
                            <ul className='products_features'>
                                <li>No dry battery for Siren  </li>
                                <li>Battery & Signal Strength SMS when arm and disarm  </li>
                                <li>Battery backup up to 12-15 days</li>
                                <li>Password protected </li>
                                <li>Disarm via Call(Press 1 on dial pad), SMS & App</li>
                                <li>Low battery SMS alert</li>
                                <li>Auto Arm & Disarm feature available </li>
                            </ul>
                            <button className='call_now_btn'><a href="callto:9460967837">Call Now</a></button>

                        </div>
                    </div>




                    {/* product 7 */}
                    <div className='row products_row'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <h2 className='products_heading'>GSM Door MULTI</h2>
                            <h3 className='products_sub_heading'>Add up to 16 Wireless Device</h3>
                            <p className='products_desc_para'>The Mezone Multi-door Siren is designed, tailor-made safety device for the total protection of unauthorized entry into your offices, home etc. by breaking open the door, even by few inches. It immediately notifies the user by sending a direct alert to 5 registered mobile numbers via Call & SMS. Can connect up to 5 doors and comes with the main device and 1 sensor.</p>
                            <ul className='products_features'>
                                <li>No dry battery for Siren  </li>
                                <li>Battery & Signal Strength SMS when arm and disarm  </li>
                                <li>Battery backup up to 12-15 days</li>
                                <li>Password protected </li>
                                <li>Disarm via Call(Press 1 on dial pad), SMS & App</li>
                                <li>Low battery SMS alert</li>
                                <li>Auto Arm & Disarm feature available </li>
                                <li>Add up to 10 normal sensor (Like Door , Shutter, PIR , glass break detector, etc) </li>
                                <li>Add upto 4 all active sensor (Like Smoke, Panic button, etc) </li>
                                <li>Add upto 2 remotes (Activate, Deactivate, panic on and panic off) </li>

                            </ul>
                            <button className='call_now_btn'><a href="callto:9460967837">Call Now</a></button>

                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 prod_img_col_right'>
                            <img className='img-fluid prod_img1' src={GSM_Door_Multi} alt='' />
                        </div>
                    </div>




                    {/* product 8 */}
                    <div className='row products_row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1'>
                            <img className='img-fluid prod_img1' src={GSM_PIR_PLUS} alt='' />
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 padding_left_80 order-1 order-lg-2'>
                            <h2 className='products_heading'>GSM PIR PLUS (Quad Element PIR Technology) (H.F.S. Model)</h2>
                            <h3 className='products_sub_heading'>Alert 5 number calling, SMS & App</h3>
                            <p className='products_desc_para'>PIR & Fire Siren Plus is a typically designed tailor made safety device for the total protection of your premises if any movement or fire detected in your premises within the range of sensor. It gives direct alert on registered 5 mobile numbers via SMS and Call.</p>
                            <ul className='products_features'>
                                <li>No dry battery for Siren  </li>
                                <li>Battery & Signal Strength SMS when arm and disarm  </li>
                                <li>Battery backup up to 12-15 days</li>
                                <li>Password protected </li>
                                <li>Disarm via Call(Press 1 on dial pad), SMS & App</li>
                                <li>Low battery SMS alert</li>
                                <li>Auto Arm & Disarm feature available </li>
                                <li>Pet Immune & Sensitivity Adjustable  </li>
                            </ul>
                            <button className='call_now_btn'><a href="callto:9460967837">Call Now</a></button>

                        </div>
                    </div>


                    {/* product 9 */}
                    <div className='row products_row'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <h2 className='products_heading'>GSM PIR MULTI (Quad Element PIR Technology) (H.F.S. Multi)</h2>
                            <h3 className='products_sub_heading'>Add up to 16 Wireless Device</h3>
                            <p className='products_desc_para'>We are a renowned entity that has successively built a repute, trustworthiness and keenness in meeting customer’s scale requirements, owing to this we are engaged in offering PIR Sensor Motion GSM Alarm, and a wireless sensor that is sleek and smart with trouble free installation. This uses advanced high infrared detector and a smart technical design to ensure that the detector has high sensitivity and steadiness. Additionally, the highly operational arming and dis- alarming through key board bring a noteworthy convenience to the users.</p>
                            <ul className='products_features'>
                                <li>Battery & Signal Strength SMS when arm and disarm  </li>
                                <li>Battery backup up to 12-15 days</li>
                                <li>Password protected </li>
                                <li>Disarm via Call(Press 1 on dial pad), SMS & App</li>
                                <li>Low battery SMS alert</li>
                                <li>Auto Arm & Disarm feature available </li>
                                <li>Pet Immune & Sensitivity Adjustable  </li>
                                <li>Add upto 10 normal sensor (Like Door, Shutter, PIR, glass break detector, etc) </li>
                                <li>Add upto 4 all active sensor (Like Smoke, Panic button, etc) </li>
                                <li>Add upto 2 remotes (Activate, Deactivate, panic on and panic off) </li>
                            </ul>
                            <button className='call_now_btn'><a href="callto:9460967837">Call Now</a></button>

                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 prod_img_col_right'>
                            <img className='img-fluid prod_img1' src={GSM_PIR_Multi} alt='' />
                        </div>
                    </div>

                    {/* product 10 */}
                    <div className='row products_row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1'>
                            <img className='img-fluid prod_img' src={Lady_Baton} alt='' />
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 padding_left_80 order-1 order-lg-2'>
                            <h2 className='products_heading'>Lady Baton</h2>
                            <p className='products_desc_para'>This provides self safe guarding during any attack by any intruder by passing a heavy current through the device. This is safe in use for the user as it is light in weight and made up of industry standard components. Additionally, this is easy to carry and fits into the ladies purse.</p>
                            <ul className='products_features'>
                                <li>Very compact in size </li>
                                <li>Very easy to keep in ladies purse</li>
                                <li>Very easy to handle and carry</li>
                                <li>Gives out heavy current </li>
                                <li>With it's help a lady can handle 2 to 3 persons in panic situation</li>
                                <li>Cost effective yet thoughtfully priced</li>
                            </ul>
                            <button className='call_now_btn'><a href="callto:9460967837">Call Now</a></button>

                        </div>
                    </div>


                    {/* product 11 */}
                    <div className='row products_row'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <h2 className='products_heading'>Guard Shock Stick (With Inbuilt Torch)</h2>
                            <p className='products_desc_para'>Guard Shock Stick with built-in Torch Function, 120db Siren, built-in Charger, Safety Pin plus Double Shock feature (Point Shock Prongs Double Side Shock Plates). Guard Shock Stick is a excellent new self defence heavy duty stun baton to keep in your car for Anti Smash Grab, ideal to keep next to your bed at night for self defence against intruders.</p>
                            <ul className='products_features'>
                                <li>Source voltage : 7.2V </li>
                                <li>Current consumption : 2.5A (for electric shock) to 0.8A (for illumination) </li>
                                <li>Size : Φ34×483 (mm) </li>
                                <li>Material : Aluminium alloy </li>
                            </ul>
                            <button className='call_now_btn'><a href="callto:9460967837">Call Now</a></button>

                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 prod_img_col_right'>
                            <img className='img-fluid prod_img1' src={Guard_Shock_Stick} alt='' />
                        </div>
                    </div>


                   


                    {/* product 13 */}
                    <div className='row products_row'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <h2 className='products_heading'>GPS Tracker</h2>
                            <h3 className='products_sub_heading'>(Bike, Car, Bus & Truck)</h3>

                            <p className='products_desc_para'>Our GPS devices are manufactured in India with a suite of applications designed for a simple operation. We enable organizations that seek geo-aware application or dynamic transactional tracking like one required for on-demand services to leverage ready-to-use applications tailored to their business needs. In our basic model of GPS devices (890-IN) has itself the most advanced features.</p>
                            <ul className='products_features'>
                                <li>Engine locking mechanism </li>
                                <li>Remote Controlled locking  </li>
                                <li>Remote Controlled ignition  </li>
                                <li>Water resistant </li>
                                <li>Easy Installation </li>
                            </ul>
                            <button className='call_now_btn'><a href="callto:9460967837">Call Now</a></button>

                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 prod_img_col_right'>
                            <img className='img-fluid prod_img' style={{maxWidth: "80%"}} src={bikesafty} alt='' />
                        </div>
                    </div>


                    {/* product 14 */}
                    <div className='row products_row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1'>
                            <img className='img-fluid prod_img' src={Vehicle_Tyre_Sealant} alt='' />
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 padding_left_80 order-1 order-lg-2'>
                            <h2 className='products_heading'>Vehicle Tyre Sealant & Coolant</h2>
                            <h3 className='products_sub_heading'>Pro and Ultra Pro Plus</h3>
                        
                            <p className='products_desc_para'>Vehicle Tyre Sealant & Coolant is a Unique Gel based formula to FIX punctures instantly caused by nails, thorns on the go, it will make your tubeless tyre puncture FREE, it also contains coolant which reduce the rate of heat produced in tyre during driving and hence increase the tyre life by ~20%, it also contains Anti-Rust which will not impact its working even in RUST wheels, It is safe to use because of 0% share of harmful chemical</p>
                            <ul className='products_features'>
                                
                                <li>Easy to put in Tyre</li>
                                <li>Extend to Tyre Life</li>
                                <li>Keep Tyres Cool</li>
                                <li>Reduce the risk the Blast</li>
                                <li>Suitable for all transporting vehicles</li>
                                <li>Reduce fuel consumption, seal punctures in moving vehicles</li>

                            </ul>
                            <button className='call_now_btn'><a href="callto:9460967837">Call Now</a></button>

                        </div>
                    </div>





                </div>
            </section>
        </>
    )
}

export default Allproducts