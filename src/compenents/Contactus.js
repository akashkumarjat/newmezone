import React from 'react'


function Contactus() {

  return (
    <>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 services_top_heading_banner'>
              <div className="categories_top_banner_row categories_top_banner_row_content">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-5 col-md-12 col-sm-12'>
              <div className='contact_infor_col'>
                <h3>Contact Information</h3>
                <p>Fill up the form and our Team will get back to you within 24 Hours.</p>
                <div className='info_col'>
                  <div className='info_col_icon'>
                    <i class='fa fa-phone'></i>
                  </div>
                  <div className='info_col_detail'>
                    <a href="callto:9460967837">+91 9460967837</a>
                  </div>
                </div>

                <div className='info_col'>
                  <div className='info_col_icon'>
                    <i class='fa fa-envelope'></i>
                  </div>
                  <div className='info_col_detail'>
                    <a href="mailto:mezoneentrepreneur06@gmail.com">mezoneentrepreneur06@gmail.com</a>
                  </div>
                </div>

                <div className='info_col'>
                  <div className='info_col_icon'>
                    <i class='fa fa-home'></i>
                  </div>
                  <div className='info_col_detail'>
                    <a href="">G-28, city mall plus, Shiv Hanuman mandir, Sanjay nagar, kanta chorahiya, jhotwara, Jaipur, Rajasthan</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-7 col-md-12 col-sm-12'>
              <form action="https://formspree.io/f/xeqdedny" method="POST">


                <div className='row'>
                  <div className='col-lg-6'>
                    <div className='input_box_div'>
                      <label>Full Name: </label>
                      <input type="text" name="name" required autoComplete='off' placeholder='Enter Your Full Name' />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='input_box_div'>
                      <label>Email: </label>
                      <input type="email" name="email" required autoComplete='off' placeholder='Enter Your Email' />
                    </div>
                  </div>
                </div>

                <div className='col-lg-12'>
                  <div className='input_box_div'>
                    <label>Phone: </label>
                    <input type="number" name="phone" required autoComplete='off' placeholder='Enter Your Mobile Number' />

                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='input_box_div'>
                    <label>Message: </label>
                    <textarea rows="5" cols="50" type="text" name="message" required autoComplete='off' placeholder='Enter Your Message' />
                  </div>
                </div>

                <div className='submit_form_div'>
                  <button className='submit_form_btn' type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>




        </div>
        <div className='col-lg-12 col-md-12 col-sm-12 map_row'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.7118978183566!2d75.74155991464595!3d26.944346483113982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3113ab0185b%3A0x9afff4da56ba0ded!2sKanta%20Chauraha%2C%20Sindhi%20Colony%2C%20Jhotwara%2C%20Jaipur%2C%20Rajasthan%20302012!5e0!3m2!1sen!2sin!4v1662827549202!5m2!1sen!2sin"
            width="100%"
            height="450"
            frameBorder="0"

            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />

        </div>
      </section>

    </>
  )
}

export default Contactus