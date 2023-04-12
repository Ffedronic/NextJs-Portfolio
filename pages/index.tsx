import Head from "next/head";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";

import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/AboutMe/AboutMe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Mon Folio</title>
        <meta name="description" content="Généré par Next.js et Félix Fedronic" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        data-spy="scroll"
        data-target=".navbar"
        data-offset="51"
      >
        <NavBar/>
        <Hero/>
        <AboutMe/>


        {/*<!-- Qualification-Start -->*/}
        <div className="container-fluid py-5" id="qualification">
          <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
              <h1
                className="display-1 text-uppercase text-white"
                style={{ WebkitTextStroke: "1px #dee2e6" }}
              >
                Quality
              </h1>
              <h1 className="position-absolute text-uppercase text-primary">
                Education & Expericence
              </h1>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h3 className="mb-4">My Education</h3>
                <div className="border-left border-primary pt-2 pl-4 ml-2">
                  <div className="position-relative mb-4">
                    <i
                      className="far fa-dot-circle text-primary position-absolute"
                      style={{ top: "2px", left: "-32px" }}
                    ></i>
                    <h5 className="font-weight-bold mb-1">Master In CSE</h5>
                    <p className="mb-2">
                      <strong>Cambridge University</strong> |{" "}
                      <small>2000 - 2050</small>
                    </p>
                    <p>
                      Tempor eos dolore amet tempor dolor tempor. Dolore ea
                      magna sit amet dolor eirmod. Eos ipsum est tempor dolor.
                      Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit
                      ipsum stet lorem diam
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="mb-4">My Experience</h3>
                <div className="border-left border-primary pt-2 pl-4 ml-2">
                  <div className="position-relative mb-4">
                    <i
                      className="far fa-dot-circle text-primary position-absolute"
                      style={{ top: "2px", left: "-32px" }}
                    ></i>
                    <h5 className="font-weight-bold mb-1">Web Designer</h5>
                    <p className="mb-2">
                      <strong>Soft Company</strong> | <small>2000 - 2050</small>
                    </p>
                    <p>
                      Tempor eos dolore amet tempor dolor tempor. Dolore ea
                      magna sit amet dolor eirmod. Eos ipsum est tempor dolor.
                      Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit
                      ipsum stet lorem diam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- Skill-Start -->*/}
        <div className="container-fluid py-5" id="skill">
          <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
              <h1
                className="display-1 text-uppercase text-white"
                style={{ WebkitTextStroke: "1px #dee2e6" }}
              >
                Skills
              </h1>
              <h1 className="position-absolute text-uppercase text-primary">
                My Skills
              </h1>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">HTML</h6>
                    <h6 className="font-weight-bold">95%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      aria-valuenow={95}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">CSS</h6>
                    <h6 className="font-weight-bold">85%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">PHP</h6>
                    <h6 className="font-weight-bold">90%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Javascript</h6>
                    <h6 className="font-weight-bold">90%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Angular JS</h6>
                    <h6 className="font-weight-bold">95%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-dark"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">Wordpress</h6>
                    <h6 className="font-weight-bold">85%</h6>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- Portfolio-Start -->*/}
        <div className="container-fluid pt-5 pb-3" id="portfolio">
          <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
              <h1
                className="display-1 text-uppercase text-white"
                style={{ WebkitTextStroke: "1px #dee2e6" }}
              >
                Gallery
              </h1>
              <h1 className="position-absolute text-uppercase text-primary">
                My Portfolio
              </h1>
            </div>
            <div className="row">
              <div className="col-12 text-center mb-2">
                <ul className="list-inline mb-4" id="portfolio-flters">
                  <li
                    className="btn btn-sm btn-outline-primary m-1 active"
                    data-filter="*"
                  >
                    All
                  </li>
                  <li
                    className="btn btn-sm btn-outline-primary m-1"
                    data-filter=".first"
                  >
                    Design
                  </li>
                  <li
                    className="btn btn-sm btn-outline-primary m-1"
                    data-filter=".second"
                  >
                    Development
                  </li>
                  <li
                    className="btn btn-sm btn-outline-primary m-1"
                    data-filter=".third"
                  >
                    Marketing
                  </li>
                </ul>
              </div>
            </div>
            <div className="row portfolio-container">
              <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                <div className="position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid rounded w-100"
                    src="/img/portfolio-1.jpg"
                    alt=""
                  />
                  <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                    <a href="/img/portfolio-1.jpg" data-lightbox="portfolio">
                      <i
                        className="fa fa-plus text-white"
                        style={{ fontSize: "60px" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                <div className="position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid rounded w-100"
                    src="/img/portfolio-2.jpg"
                    alt=""
                  />
                  <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                    <a href="img/portfolio-2.jpg" data-lightbox="portfolio">
                      <i
                        className="fa fa-plus text-white"
                        style={{ fontSize: "60px" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                <div className="position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid rounded w-100"
                    src="/img/portfolio-3.jpg"
                    alt=""
                  />
                  <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                    <a href="img/portfolio-3.jpg" data-lightbox="portfolio">
                      <i
                        className="fa fa-plus text-white"
                        style={{ fontSize: "60px" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                <div className="position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid rounded w-100"
                    src="/img/portfolio-4.jpg"
                    alt=""
                  />
                  <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                    <a href="img/portfolio-4.jpg" data-lightbox="portfolio">
                      <i
                        className="fa fa-plus text-white"
                        style={{ fontSize: "60px" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                <div className="position-relative overflow-hidden mb-2">
                  <img
                    className="img-fluid rounded w-100"
                    src="/img/portfolio-5.jpg"
                    alt=""
                  />
                  <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center" />
                  <a href="img/portfolio-5.jpg" data-lightbox="portfolio">
                    <i
                      className="fa fa-plus text-white"
                      style={{ fontSize: "60px" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
              <div className="position-relative overflow-hidden mb-2">
                <img
                  className="img-fluid rounded w-100"
                  src="/img/portfolio-6.jpg"
                  alt=""
                />
                <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                  <a href="img/portfolio-6.jpg" data-lightbox="portfolio">
                    <i
                      className="fa fa-plus text-white"
                      style={{ fontSize: "60px" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- Contact Start -->*/}{" "}
        <div className="container-fluid py-5" id="contact">
          <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
              <h1
                className="display-1 text-uppercase text-white"
                style={{ WebkitTextStroke: "1px #dee2e6" }}
              >
                Contact
              </h1>
              <h1 className="position-absolute text-uppercase text-primary">
                Contact Me
              </h1>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="contact-form text-center">
                  <div id="success"></div>
                  <form name="sentMessage" id="contactForm" noValidate={true}>
                    <div className="form-row">
                      <div className="control-group col-sm-6">
                        <input
                          type="text"
                          className="form-control p-4"
                          id="name"
                          placeholder="Your Name"
                          required={true}
                          data-validation-required-message="Please enter your name"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                      <div className="control-group col-sm-6">
                        <input
                          type="email"
                          className="form-control p-4"
                          id="email"
                          placeholder="Your Email"
                          required={true}
                          data-validation-required-message="Please enter your email"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="control-group">
                      <input
                        type="text"
                        className="form-control p-4"
                        id="subject"
                        placeholder="Subject"
                        required={true}
                        data-validation-required-message="Please enter a subject"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group">
                      <textarea
                        className="form-control py-3 px-4"
                        rows={5}
                        id="message"
                        placeholder="Message"
                        required={true}
                        data-validation-required-message="Please enter your message"
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                    <div>
                      <button
                        className="btn btn-outline-primary"
                        type="submit"
                        id="sendMessageButton"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- Footer Start -->*/}
        <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
          <div className="container text-center py-5">
            <div className="d-flex justify-content-center mb-4">
              <a className="btn btn-light btn-social mr-2" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-light btn-social mr-2" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-light btn-social mr-2" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="btn btn-light btn-social" href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="d-flex justify-content-center mb-3">
              <a className="text-white" href="#">
                Privacy
              </a>
              <span className="px-3">|</span>
              <a className="text-white" href="#">
                Terms
              </a>
              <span className="px-3">|</span>
              <a className="text-white" href="#">
                FAQs
              </a>
              <span className="px-3">|</span>
              <a className="text-white" href="#">
                Help
              </a>
            </div>
            <p className="m-0">
              &copy;{" "}
              <a className="text-white font-weight-bold" href="#">
                Domain Name
              </a>
              . All Rights Reserved. Designed by{" "}
              <a
                className="text-white font-weight-bold"
                href="https://htmlcodex.com"
              >
                HTML Codex
              </a>
            </p>
          </div>
        </div>
        {/*<!-- Scroll to Bottom -->*/}
        <i className="fa fa-2x fa-angle-down text-white scroll-to-bottom"></i>
        {/*<!-- Back to Top -->*/}
        <a href="#" className="btn btn-outline-dark px-0 back-to-top">
          <i className="fa fa-angle-double-up"></i>
        </a>
      </main>
    </>
  );
}
