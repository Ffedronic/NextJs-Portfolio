import Head from "next/head";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";

import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/AboutMe/AboutMe";
import Qualification from "@/components/Qualification/Qualification";
import Skills from "@/components/Skills/Skills";
import Portfolio from "@/components/Porfolio/Portfolio";
import Contact from "@/components/Contact/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Mon Folio</title>
        <meta
          name="description"
          content="Généré par Next.js et Félix Fedronic"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main data-spy="scroll" data-target=".navbar" data-offset="51">
        <NavBar />
        <Hero />
        <AboutMe />
        <Qualification />
        <Skills />
        <Portfolio />
       <Contact/>
        {/*<!-- Footer Start -->*/}
        <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
          <div className="container text-center py-5">
            <div className="d-flex justify-content-center mb-4">
              <a className="btn btn-light btn-social mr-2" href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <p className="m-0">
              &copy;{" "}
              <a className="text-white font-weight-bold" href="#">
                FF.DEV
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
