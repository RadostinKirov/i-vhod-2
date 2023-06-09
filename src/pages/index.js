import { Inter } from 'next/font/google'
import Head from 'next/head'
import Footer from '../../components/layout/footer/footer'
import Header from '../../components/layout/header/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <>
        <div className="main-container">

              {/* ***** Main Banner Area Start ***** */}


        <section className="section main-banner" id="top" data-section="section1">
          <video autoPlay="" muted="" loop="" id="bg-video">
            <source src="assets/images/course-video.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay header-text">
            <div className="caption">
              <h6>Graduate School of Management</h6>
              <h2>
                <em>Your</em> Classroom
              </h2>
              <div className="main-button">
                <div className="scroll-to-section">
                  <a href="#section2">Discover more</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Main Banner Area End ***** */}
        <section className="features">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-12">
                <div className="features-post">
                  <div className="features-content">
                    <div className="content-show">
                      <h4>
                        <i className="fa fa-pencil" />
                        All Courses
                      </h4>
                    </div>
                    <div className="content-hide">
                      <p>
                        Curabitur id eros vehicula, tincidunt libero eu, lobortis mi.
                        In mollis eros a posuere imperdiet. Donec maximus elementum
                        ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula
                        libero.
                      </p>
                      <p className="hidden-sm">
                        Curabitur id eros vehicula, tincidunt libero eu, lobortis mi.
                        In mollis eros a posuere imperdiet.
                      </p>
                      <div className="scroll-to-section">
                        <a href="#section2">More Info.</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="features-post second-features">
                  <div className="features-content">
                    <div className="content-show">
                      <h4>
                        <i className="fa fa-graduation-cap" />
                        Virtual Class
                      </h4>
                    </div>
                    <div className="content-hide">
                      <p>
                        Curabitur id eros vehicula, tincidunt libero eu, lobortis mi.
                        In mollis eros a posuere imperdiet. Donec maximus elementum
                        ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula
                        libero.
                      </p>
                      <p className="hidden-sm">
                        Curabitur id eros vehicula, tincidunt libero eu, lobortis mi.
                        In mollis eros a posuere imperdiet.
                      </p>
                      <div className="scroll-to-section">
                        <a href="#section3">Details</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="features-post third-features">
                  <div className="features-content">
                    <div className="content-show">
                      <h4>
                        <i className="fa fa-book" />
                        Real Meeting
                      </h4>
                    </div>
                    <div className="content-hide">
                      <p>
                        Curabitur id eros vehicula, tincidunt libero eu, lobortis mi.
                        In mollis eros a posuere imperdiet. Donec maximus elementum
                        ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula
                        libero.
                      </p>
                      <p className="hidden-sm">
                        Curabitur id eros vehicula, tincidunt libero eu, lobortis mi.
                        In mollis eros a posuere imperdiet.
                      </p>
                      <div className="scroll-to-section">
                        <a href="#section4">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section why-us" data-section="section2">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Why choose Grad School?</h2>
                </div>
              </div>
              <div className="col-md-12">
                <div id="tabs">
                  <ul>
                    <li>
                      <a href="#tabs-1">Best Education</a>
                    </li>
                    <li>
                      <a href="#tabs-2">Top Management</a>
                    </li>
                    <li>
                      <a href="#tabs-3">Quality Meeting</a>
                    </li>
                  </ul>
                  <section className="tabs-content">
                    <article id="tabs-1">
                      <div className="row">
                        <div className="col-md-6">
                          <img src="assets/images/choose-us-image-01.png" alt="" />
                        </div>
                        <div className="col-md-6">
                          <h4>Best Education</h4>
                          <p>
                            Grad School is free educational HTML template with
                            Bootstrap 4.5.2 CSS layout. Feel free to use it for
                            educational or commercial purposes. You may want to make{" "}
                            <a
                              href="https://paypal.me/templatemo"
                              target="_parent"
                              rel="sponsored"
                            >
                              a little donation
                            </a>{" "}
                            to TemplateMo. Please tell your friends about us. Thank
                            you.
                          </p>
                        </div>
                      </div>
                    </article>
                    <article id="tabs-2">
                      <div className="row">
                        <div className="col-md-6">
                          <img src="assets/images/choose-us-image-02.png" alt="" />
                        </div>
                        <div className="col-md-6">
                          <h4>Top Level</h4>
                          <p>
                            You can modify this HTML layout by editing contents and
                            adding more pages as you needed. Since this template has
                            options to add dropdown menus, you can put many HTML
                            pages.
                          </p>
                          <p>
                            Suspendisse tincidunt, magna ut finibus rutrum, libero
                            dolor euismod odio, nec interdum quam felis non ante.
                          </p>
                        </div>
                      </div>
                    </article>
                    <article id="tabs-3">
                      <div className="row">
                        <div className="col-md-6">
                          <img src="assets/images/choose-us-image-03.png" alt="" />
                        </div>
                        <div className="col-md-6">
                          <h4>Quality Meeting</h4>
                          <p>
                            You are NOT allowed to redistribute this template ZIP file
                            on any template collection website. However, you can use
                            this template to convert into a specific theme for any
                            kind of CMS platform such as WordPress. For more
                            information, you shall{" "}
                            <a
                              rel="nofollow"
                              href="https://templatemo.com/contact"
                              target="_parent"
                            >
                              contact TemplateMo
                            </a>{" "}
                            now.
                          </p>
                        </div>
                      </div>
                    </article>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section coming-soon" data-section="section3">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-xs-12">
                <div className="continer centerIt">
                  <div>
                    <h4>
                      Take <em>any online course</em> and win $326 for your next class
                    </h4>
                    <div className="counter">
                      <div className="days">
                        <div className="value">00</div>
                        <span>Days</span>
                      </div>
                      <div className="hours">
                        <div className="value">00</div>
                        <span>Hours</span>
                      </div>
                      <div className="minutes">
                        <div className="value">00</div>
                        <span>Minutes</span>
                      </div>
                      <div className="seconds">
                        <div className="value">00</div>
                        <span>Seconds</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="right-content">
                  <div className="top-content">
                    <h6>
                      Register your free account and <em>get immediate</em> access to
                      online courses
                    </h6>
                  </div>
                  <form id="contact" action="" method="get">
                    <div className="row">
                      <div className="col-md-12">
                        <fieldset>
                          <input
                            name="name"
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                            required=""
                          />
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <fieldset>
                          <input
                            name="email"
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Your Email"
                            required=""
                          />
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <fieldset>
                          <input
                            name="phone-number"
                            type="text"
                            className="form-control"
                            id="phone-number"
                            placeholder="Your Phone Number"
                            required=""
                          />
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <fieldset>
                          <button type="submit" id="form-submit" className="button">
                            Get it now
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section courses" data-section="section4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Choose Your Course</h2>
                </div>
              </div>
              <div className="owl-carousel owl-theme">
                <div className="item">
                  <img src="assets/images/courses-01.jpg" alt="Course #1" />
                  <div className="down-content">
                    <h4>Digital Marketing</h4>
                    <p>
                      You can get free images and videos for your websites by visiting
                      Unsplash, Pixabay, and Pexels.
                    </p>
                    <div className="author-image">
                      <img src="assets/images/author-01.png" alt="Author 1" />
                    </div>
                    <div className="text-button-pay">
                      <a href="#">
                        Pay <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/courses-02.jpg" alt="Course #2" />
                  <div className="down-content">
                    <h4>Business World</h4>
                    <p>
                      Quisque cursus augue ut velit dictum, quis volutpat enim
                      blandit. Maecenas a lectus ac ipsum porta.
                    </p>
                    <div className="author-image">
                      <img src="assets/images/author-02.png" alt="Author 2" />
                    </div>
                    <div className="text-button-free">
                      <a href="#">
                        Free <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/courses-03.jpg" alt="Course #3" />
                  <div className="down-content">
                    <h4>Media Technology</h4>
                    <p>
                      Pellentesque ultricies diam magna, auctor cursus lectus pretium
                      nec. Maecenas finibus lobortis enim.
                    </p>
                    <div className="author-image">
                      <img src="assets/images/author-03.png" alt="Author 3" />
                    </div>
                    <div className="text-button-pay">
                      <a href="#">
                        Pay <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/courses-04.jpg" alt="Course #4" />
                  <div className="down-content">
                    <h4>Communications</h4>
                    <p>
                      Download free images and videos for your websites by visiting
                      Unsplash, Pixabay, and Pexels.
                    </p>
                    <div className="author-image">
                      <img src="assets/images/author-04.png" alt="Author 4" />
                    </div>
                    <div className="text-button-free">
                      <a href="#">
                        Free <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/courses-05.jpg" alt="" />
                  <div className="down-content">
                    <h4>Business Ethics</h4>
                    <p>
                      Pellentesque ultricies diam magna, auctor cursus lectus pretium
                      nec. Maecenas finibus lobortis enim.
                    </p>
                    <div className="author-image">
                      <img src="assets/images/author-05.png" alt="" />
                    </div>
                    <div className="text-button-pay">
                      <a href="#">
                        Pay <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/courses-01.jpg" alt="" />
                  <div className="down-content">
                    <h4>Photography</h4>
                    <p>
                      Quisque cursus augue ut velit dictum, quis volutpat enim
                      blandit. Maecenas a lectus ac ipsum porta.
                    </p>
                    <div className="author-image">
                      <img src="assets/images/author-01.png" alt="" />
                    </div>
                    <div className="text-button-free">
                      <a href="#">
                        Free <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/courses-02.jpg" alt="" />
                  <div className="down-content">
                    <h4>Web Development</h4>
                    <p>
                      Pellentesque ultricies diam magna, auctor cursus lectus pretium
                      nec. Maecenas finibus lobortis enim.
                    </p>
                    <div className="author-image">
                      <img src="assets/images/author-02.png" alt="" />
                    </div>
                    <div className="text-button-free">
                      <a href="#">
                        Free <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/courses-03.jpg" alt="" />
                  <div className="down-content">
                    <h4>Learn HTML CSS</h4>
                    <p>
                      You can get free images and videos for your websites by visiting
                      Unsplash, Pixabay, and Pexels.
                    </p>
                    <div className="author-image">
                      <img src="assets/images/author-03.png" alt="" />
                    </div>
                    <div className="text-button-pay">
                      <a href="#">
                        Pay <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/courses-04.jpg" alt="" />
                  <div className="down-content">
                    <h4>Social Media</h4>
                    <p>
                      Pellentesque ultricies diam magna, auctor cursus lectus pretium
                      nec. Maecenas finibus lobortis enim.
                    </p>
                    <div className="author-image">
                      <img src="assets/images/author-04.png" alt="" />
                    </div>
                    <div className="text-button-pay">
                      <a href="#">
                        Pay <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/courses-05.jpg" alt="" />
                  <div className="down-content">
                    <h4>Digital Arts</h4>
                    <p>
                      Quisque cursus augue ut velit dictum, quis volutpat enim
                      blandit. Maecenas a lectus ac ipsum porta.
                    </p>
                    <div className="author-image">
                      <img src="assets/images/author-05.png" alt="" />
                    </div>
                    <div className="text-button-free">
                      <a href="#">
                        Free <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/courses-01.jpg" alt="" />
                  <div className="down-content">
                    <h4>Media Streaming</h4>
                    <p>
                      Pellentesque ultricies diam magna, auctor cursus lectus pretium
                      nec. Maecenas finibus lobortis enim.
                    </p>
                    <div className="author-image">
                      <img src="assets/images/author-01.png" alt="" />
                    </div>
                    <div className="text-button-pay">
                      <a href="#">
                        Pay <i className="fa fa-angle-double-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section video" data-section="section5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <div className="left-content">
                  <span>our presentation is for you</span>
                  <h4>
                    Watch the video to learn more <em>about Grad School</em>
                  </h4>
                  <p>
                    You are NOT allowed to redistribute this template ZIP file on any
                    template collection website. However, you can use this template to
                    convert into a specific theme for any kind of CMS platform such as
                    WordPress. You may{" "}
                    <a
                      rel="nofollow"
                      href="https://templatemo.com/contact"
                      target="_parent"
                    >
                      contact TemplateMo
                    </a>{" "}
                    for details.
                    <br />
                    <br />
                    Suspendisse tincidunt, magna ut finibus rutrum, libero dolor
                    euismod odio, nec interdum quam felis non ante.
                  </p>
                  <div className="main-button">
                    <a
                      rel="nofollow"
                      href="https://fb.com/templatemo"
                      target="_parent"
                    >
                      External URL
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <article className="video-item">
                  <div className="video-caption">
                    <h4>Power HTML Template</h4>
                  </div>
                  <figure>
                    <a
                      href="https://www.youtube.com/watch?v=r9LtOG6pNUw"
                      className="play"
                    >
                      <img src="assets/images/main-thumb.png" />
                    </a>
                  </figure>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="section contact" data-section="section6">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Let’s Keep In Touch</h2>
                </div>
              </div>
              <div className="col-md-6">
                {/* Do you need a working HTML contact-form script?
          	
              Please visit https://templatemo.com/contact page */}
                <form id="contact" action="" method="post">
                  <div className="row">
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows={6}
                          className="form-control"
                          id="message"
                          placeholder="Your message..."
                          required=""
                          defaultValue={""}
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="button">
                          Send Message Now
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <div id="map">
                  <iframe
                    src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="422px"
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

            </div>
    </>

  )
}
