import React from "react";

function Hero() {
  return (
    <div
      className="container-fluid bg-primary d-flex align-items-center mb-5 py-5"
      id="home"
      style={{ minHeight: 100 }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
            <img
              className="img-fluid w-100 rounded-circle shadow-sm"
              src="/img/profile.jpg"
              alt="mon profil"
            />
          </div>
          <div className="col-lg-7 text-center text-lg-left">
            <h3 className="text-white font-weight-normal mb-3">Je suis</h3>
            <h2
              className="display-3 text-uppercase text-primary mb-2"
              style={{ WebkitTextStroke: "2px #ffffff" }}
            >
              Félix Fedronic
            </h2>
            <h1 className="typed-text-output d-inline font-weight-lighter text-white"></h1>
            <div className="typed-text d-none">
              Développeur Web, Développeur Front End
            </div>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
              <a href="/documents/felix_fedronic_dev_fullstack.pdf" className="btn btn-outline-light mr-5">
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
