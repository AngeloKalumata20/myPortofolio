import React from "react";

const Slides = () => {
    return(
    <div id="fullpage" className="fullpage-default">

            <div className="section animated-row" data-section="slide01">
                <div className="section-inner">
                    <div className="welcome-box">
                        <span className="welcome-first animate" data-animate="fadeInUp">Hello, welcome to my</span>
                        <h1 className="welcome-title animate" data-animate="fadeInUp">Website</h1>
                        <p class="animate" data-animate="fadeInUp">Ini Adalah Website Portofolio saya, saya adalah sebuah fullstack programmer dan UI/UX. saya memiliki rasa ingin Tau yang mendalam. Terima Kasih</p>
                        {/* <div className="scroll-down next-section animate" data-animate="fadeInUp">
                            <img src="images/mouse-scroll.png" alt="Mouse Scroll"/>
                            <span>Scroll Down</span>
                        </div> */}
                    </div>
                </div>
            </div>

        <div className="section animated-row" data-section="slide02">
            <div className="section-inner">
                <div className="about-section">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 wide-col-laptop">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="about-contentbox">
                                        <div className="animate" data-animate="fadeInUp">
                                            <span>About Me</span>
                                            <h2>Who am i?</h2>
                                            <p>Nama saya Angelo Kalumata, seorang Full Stack Developer yang juga memiliki keahlian dalam bidang UI/UX. Saya berpengalaman dalam mengembangkan aplikasi web dan mobile yang tidak hanya efisien dan berkinerja tinggi tetapi juga memiliki desain antarmuka yang intuitif dan user-friendly. Dengan pemahaman mendalam tentang prinsip-prinsip desain dan interaksi pengguna, saya selalu berusaha untuk menciptakan pengalaman pengguna yang optimal dalam setiap proyek yang saya kerjakan.</p>
                                        </div>
                                        <div className="facts-list owl-carousel">
                                            <div className="item animate" data-animate="fadeInUp">
                                                <div className="counter-box">
                                                    <i className="fa fa-trophy counter-icon" aria-hidden="true"></i><span class="count-number">32</span> Awards Won
                                                </div>
                                            </div>
                                            <div className="item animate" data-animate="fadeInUp">
                                                <div className="counter-box">
                                                    <i className="fa fa-graduation-cap counter-icon" aria-hidden={true}></i><span class="count-number">4</span> Degrees
                                                </div>
                                            </div>
                                            <div className="item animate" data-animate="fadeInUp">
                                                <div className="counter-box">
                                                    <i className="fa fa-desktop counter-icon" aria-hidden={true}></i><span class="count-number">12</span> Working Years
                                                </div>
                                            </div>
                                            <div className="item animate" data-animate="fadeInUp">
                                                <div className="counter-box">
                                                    <i className="fa fa-support counter-icon" aria-hidden={true}></i><span class="count-number">6</span> Team Members
                                                </div>
                                            </div>
                                            <div className="item animate" data-animate="fadeInUp">
                                                <div className="counter-box">
                                                    <i className="fa fa-certificate counter-icon" aria-hidden={true}></i><span class="count-number">2</span> Certificates
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <figure class="about-img animate" data-animate="fadeInUp"><img src="images/IMG_5895.JPG" class="rounded" alt=""/></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="section animated-row" data-section="slide03">
            <div className="section-inner">
                <div className="row justify-content-center">
                    <div className="col-md-8 wide-col-laptop">
                        <div className="title-block animate" data-animate="fadeInUp">
                            <span>Services</span>
                            <h2>What I Do?</h2>
                        </div>
                        <div className="services-section">
                            <div className="services-list owl-carousel">
                                <div className="item animate" data-animate="fadeInUp">
                                    <div className="service-box">
                                        <span className="service-icon"><i class="fa fa-bookmark" aria-hidden={true}></i></span>
                                        <h3>Bootstrap Themes</h3>
                                        <p>Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam. </p>
                                    </div>
                                </div>
                                <div className="item animate" data-animate="fadeInUp">
                                    <div className="service-box">
                                        <span className="service-icon"><i class="fa fa-cloud" aria-hidden={true}></i></span>
                                        <h3>HTML5 Coding</h3>
                                        <p>Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam. </p>
                                    </div>
                                </div>
                                <div className="item animate" data-animate="fadeInUp">
                                    <div className="service-box">
                                        <span className="service-icon"><i class="fa fa-desktop" aria-hidden={true}></i></span>
                                        <h3>Fully Responsive</h3>
                                        <p>Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam. </p>
                                    </div>
                                </div>
                                <div className="item animate" data-animate="fadeInUp">
                                    <div className="service-box">
                                        <span className="service-icon"><i class="fa fa-mobile" aria-hidden={true}></i></span>
                                        <h3>Mobile Ready</h3>
                                        <p>Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam. </p>
                                    </div>
                                </div>
                                <div className="item animate" data-animate="fadeInUp">
                                    <div className="service-box">
                                        <span className="service-icon"><i class="fa fa-comments" aria-hidden={true}></i></span>
                                        <h3>Fast Support</h3>
                                        <p>Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam. </p>
                                    </div>
                                </div>
                                <div className="item animate" data-animate="fadeInUp">
                                    <div className="service-box">
                                        <span className="service-icon"><i class="fa fa-database" aria-hidden={true}></i></span>
                                        <h3>24-hour Up Time</h3>
                                        <p>Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam. </p>
                                    </div>
                                </div>
                                <div className="item animate" data-animate="fadeInUp">
                                    <div className="service-box">
                                        <span className="service-icon"><i class="fa fa-bell" aria-hidden={true}></i></span>
                                        <h3>Instant Upgrades</h3>
                                        <p>Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam. </p>
                                    </div>
                                </div>
                                <div className="item animate" data-animate="fadeInUp">
                                    <div className="service-box">
                                        <span className="service-icon"><i class="fa fa-camera" aria-hidden={true}></i></span>
                                        <h3>Always Monitoring</h3>
                                        <p>Nullam auctor, justo vitae accumsan ultrices, arcu ex molestie massa, eu maximus enim tortor vitae quam. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="section animated-row" data-section="slide04">
            <div className="section-inner">
                <div className="row justify-content-center">
                    <div className="col-md-7 wide-col-laptop">
                        <div className="title-block animate" data-animate="fadeInUp">
                            <span>My Skills</span>
                            <h2>What i’m good?</h2>
                        </div>
                        <div className="skills-row animate" data-animate="fadeInDown">
                            <div className="row">
                                <div className="col-md-8 offset-md-2">   
                                    <div className="skill-item">
                                        <h6>HTML CSS</h6>
                                        <div className="skill-bar">
                                            <span>70%</span>
                                            <div className="filled-bar"></div>
                                        </div>          
                                    </div>
                                    <div className="skill-item">
                                        <h6>PSD Design</h6>
                                        <div className="skill-bar">
                                            <span>90%</span>
                                            <div className="filled-bar-2"></div>
                                        </div>          
                                    </div>
                                    <div className="skill-item">
                                        <h6>Social Media</h6>
                                        <div className="skill-bar">
                                            <span>70%</span>
                                            <div className="filled-bar"></div>
                                        </div>          
                                    </div>
                                    <div className="skill-item last-skill">
                                        <h6>Leadership</h6>
                                        <div className="skill-bar">
                                            <span>90%</span>
                                            <div className="filled-bar-2"></div>
                                        </div>          
                                    </div>                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="section animated-row" data-section="slide06">
            <div className="section-inner">
                <div className="row justify-content-center">
                    <div className="col-md-8 wide-col-laptop">
                        <div className="title-block animate" data-animate="fadeInUp">
                            <span>My Picture</span>
                            <h2>Here is My Photo</h2>
                        </div>
                        <div className="gallery-section">
                            <div className="gallery-list owl-carousel">
                                <div className="item animate" data-animate="fadeInUp">
                                    <div className="portfolio-item">
                                        <div className="thumb">
                                            <img src="images/item-1.jpg" alt=""/>
                                        </div>
                                        {/* <div className="thumb-inner animate" data-animate="fadeInUp">
                                            <h4>templatemo is the best</h4>
                                            <p>Please tell your friends about it. Templatemo is the best website to download free Bootstrap themes.</p>
                                        </div> */}
                                    </div>
                                </div>
                                {/* <div className="item animate" data-animate="fadeInUp">
                                    <div className="portfolio-item">
                                        <div className="thumb">
                                            <img src="images/item-3.jpg" alt=""/>
                                        </div>
                                        <div className="thumb-inner animate" data-animate="fadeInUp">
                                            <h4>templatemo is the best</h4>
                                            <p>Please tell your friends about it. Templatemo is the best website to download free Bootstrap layouts.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item animate" data-animate="fadeInUp">
                                    <div className="portfolio-item">
                                        <div className="thumb">
                                            <img src="images/item-1.jpg" alt=""/>
                                        </div>
                                        <div className="thumb-inner animate" data-animate="fadeInUp">
                                            <h4>templatemo is the best</h4>
                                            <p>Please tell your friends about it. Templatemo is the best website to download free Bootstrap templates.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item animate" data-animate="fadeInUp">
                                    <div className="portfolio-item">
                                        <div className="thumb">
                                            <img src="images/item-2.jpg" alt=""/>
                                        </div>
                                        <div className="thumb-inner animate" data-animate="fadeInUp">
                                            <h4>templatemo is the best</h4>
                                            <p>Please tell your friends about it. Templatemo is the best website to download Bootstrap CSS templates.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item animate" data-animate="fadeInUp">
                                    <div className="portfolio-item">
                                        <div className="thumb">
                                            <img src="images/item-3.jpg" alt=""/>
                                        </div>
                                        <div className="thumb-inner animate" data-animate="fadeInUp">
                                            <h4>templatemo is the best</h4>
                                            <p>Please tell your friends about it. Templatemo is the best website to download free Bootstrap templates.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item animate" data-animate="fadeInUp">
                                    <div className="portfolio-item">
                                        <div className="thumb">
                                            <img src="images/item-1.jpg" alt=""/>
                                        </div>
                                        <div className="thumb-inner animate" data-animate="fadeInUp">
                                            <h4>templatemo is the best</h4>
                                            <p>Please tell your friends about it. Templatemo is the best website to download free Bootstrap templates.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item animate" data-animate="fadeInUp">
                                    <div className="portfolio-item">
                                        <div className="thumb">
                                            <img src="images/item-2.jpg" alt=""/>
                                        </div>
                                        <div className="thumb-inner animate" data-animate="fadeInUp">
                                            <h4>templatemo is the best</h4>
                                            <p>Please tell your friends about it. Templatemo is the best website to download free Bootstrap templates.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item animate" data-animate="fadeInUp">
                                    <div className="portfolio-item">
                                        <div className="thumb">
                                            <img src="images/item-3.jpg" alt=""/>
                                        </div>
                                        <div className="thumb-inner animate" data-animate="fadeInUp">
                                            <h4>templatemo is the best</h4>
                                            <p>Please tell your friends about it. Templatemo is the best website to download free Bootstrap templates.</p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="section animated-row" data-section="slide05">
            <div className="section-inner">
                <div className="row justify-content-center">
                    <div className="col-md-8 wide-col-laptop">
                        <div className="title-block animate" data-animate="fadeInUp">
                            <span>TESTIMONIALS</span>
                            <h2>what THEY SAY?</h2>
                        </div>
                        <div className="col-md-8 offset-md-2">
                            <div className="testimonials-section">
                                <div className="testimonials-slider owl-carousel">
                                    <div className="item animate" data-animate="fadeInUp">
                                        <div className="testimonial-item">
                                            <div className="client-row">
                                                <img src="images/profile-01.jpg" class="rounded-circle" alt="profile 1"/>
                                            </div>
                                            <div className="testimonial-content">
                                                <h4>Sandar</h4>
                                                <p>"Ut varius leo eu mauris lacinia, eleifend posuere urna gravida. Aenean a mattis lacus."</p>
                                                <span>Managing Director</span>
                                            </div>                                           
                                        </div>
                                    </div>
                                    <div className="item animate" data-animate="fadeInUp">
                                        <div className="testimonial-item">
                                            <div className="client-row">
                                                <img src="images/profile-01.jpg" class="rounded-circle" alt="profile 2"/>
                                            </div>
                                            <div className="testimonial-content">
                                                <h4>Shinn</h4>
                                                <p>"Nam iaculis, leo nec facilisis sollicitudin, dui massa tempus odio, vitae malesuada ante elit vitae eros."</p>
                                                <span>CEO and Founder</span>
                                            </div>                                           
                                        </div>
                                    </div>
                                    <div className="item animate" data-animate="fadeInUp">
                                        <div className="testimonial-item">
                                            <div className="client-row">
                                                <img src="images/profile-01.jpg" class="rounded-circle" alt="profile 3"/>
                                            </div>
                                            <div className="testimonial-content">
                                                <h4>Marlar</h4>
                                                <p>"Etiam efficitur, tortor facilisis finibus semper, diam magna fringilla lectus, et fringilla felis urna posuere tortor."</p>
                                                <span>Chief Marketing Officer</span>
                                            </div>                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        <div className="section animated-row" data-section="slide07">
            <div className="section-inner">
                <div className="row justify-content-center">
                    <div className="col-md-7 wide-col-laptop">
                        <div className="title-block animate" data-animate="fadeInUp">
                            <span>Contact</span>
                            <h2>Get In Touch!</h2>
                        </div>
                        <div className="contact-section">
                            <div className="row">
                                <div className="col-md-6 animate" data-animate="fadeInUp">
                                    <div className="contact-box">
                                        <div className="contact-row">
                                            <i className="fa fa-map-marker"></i> 123 New Street Here, Wonderful City 10220
                                        </div>
                                        <div className="contact-row">
                                            <i className="fa fa-phone"></i> 090 080 0210
                                        </div>
                                        <div className="contact-row">
                                            <i className="fa fa-envelope"></i> info@company.co
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 animate" data-animate="fadeInUp">
                                    <form id="ajax-contact" method="post" action="#">
                                        <div className="input-field">
                                            <input type="text" class="form-control" name="name" id="name" required placeHolder="Name"/>
                                        </div>
                                        <div className="input-field">
                                            <input type="email" class="form-control" name="email" id="email" required placeHolder="Email"/>
                                        </div>
                                        <div className="input-field">
                                            <textarea class="form-control" name="message" id="message" required placeHolder="Message"></textarea>
                                        </div>
                                        <button class="btn" type="submit">Submit</button>
                                    </form>
                                    <div id="form-messages" className="mt-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Slides;