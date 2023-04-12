import React from "react";

function AboutMe() {
  return (
    <div className="container-fluid py-5" id="about">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            A Propos
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            A Propos
          </h1>
        </div>
        <div className="row align-items-center">
         
          <div className="col-lg-12">
            <h3 className="mb-4">Développeur Web && Développeur Front-End</h3>
            <p><strong>
              Passionné par la culture web et les nouvelles technologies, je
              souhaite intégrer un premier emploi en tant que développeur web
              dans une société spécialisée dans la conception de solutions
              digitales.</strong>
            </p>
            <div className="row mb-3">
              <div className="col-sm-6 py-2">
                <h6>
                  Nom: <span className="text-secondary">Félix Fedronic</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Date de Naissance: <span className="text-secondary">1 Mars 1985</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Diplôme: <span className="text-secondary">Licence</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Experience: <span className="text-secondary">2 ans</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Email:{" "}
                  <span className="text-secondary">fedronicfelix@gmail.com</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Address:{" "}
                  <span className="text-secondary">
                  Bâtiment F, Appartement 65, 7 Avenue des Pyrénées
                  </span>
                </h6>
              </div>
            </div>
            <a href="/documents/felix_fedronic_dev_fullstack.pdf" className="btn btn-outline-primary">
              En Savoir Plus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
