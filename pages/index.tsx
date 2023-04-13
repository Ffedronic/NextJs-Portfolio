import Head from "next/head";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";

import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/AboutMe/AboutMe";
import Qualification from "@/components/Qualification/Qualification";
import Skills from "@/components/Skills/Skills";
import Portfolio from "@/components/Porfolio/Portfolio";

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
        <Qualification/>
        <Skills/>
      <Portfolio/>
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
                Contactez Moi
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
