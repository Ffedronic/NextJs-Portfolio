import React from "react";

function AboutMe() {
  return (
    <div className="container-fluid py-5" id="about">
      <div className="container">
        <article className="position-relative d-flex align-items-center justify-content-center">
          <h2
            className="display-2 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            A Propos
          </h2>
          <h1 className="position-absolute text-uppercase text-primary">
            A Propos
          </h1>
        </article>
        <h3 className="mb-4 text-center">Développeur Web && Développeur Front-End</h3>
        <div className="row justify-content-lg-between mt-5">
          <div className="col-lg-6 p-lg-2">
            <p className=" text-justify">
              Passionné par le développement web et les technologies liées à
              l'interface utilisateur, mon objectif est de devenir un
              développeur front-end compétent et polyvalent, capable de
              concevoir et de mettre en œuvre des interfaces utilisateur
              attrayantes et fonctionnelles.
            </p>
            <p className=" text-justify">
              {" "}
              Ces 2 dernières années, j'ai suivi diverses formations en
              développement web et d'applications, curieux, inspiré et passionné
              par les technologies front-end. J'aime travailler sur des projets
              de conception et de développement d'interfaces utilisateur, en me
              concentrant sur l'amélioration de l'expérience utilisateur et sur
              la création d'interfaces claires et faciles à utiliser.
            </p>
            <p className=" text-justify">
              {" "}
              Je souhaiterais travailler au sein de la DSI de la Banque et de
              l'Assurance en tant que Concepteur Développeur FrontEnd , où je
              pourrai continuer à apprendre et à développer mes compétences en
              tant que développeur front-end.
            </p>
            <p className=" text-justify">
              {" "}
              Je suis convaincu que ma passion, mon désir d'apprendre et ma
              détermination à devenir un développeur front-end accompli me
              permettront d'atteindre mes objectifs professionnels et de
              réaliser mes projets.
            </p>
          </div>
          <aside className="col-lg-5">
            <div className="row mb-3">
              <dl className="col-sm-6 py-2">
                <dt>Nom:</dt>
                <dd>
                  <span className="text-secondary">Félix Fedronic</span>
                </dd>
              </dl>
              <dl className="col-sm-6 py-2">
                <dt>Date de Naissance: </dt>
                <dd>
                  <span className="text-secondary">1 Mars 1985</span>
                </dd>
              </dl>
              <div className="col-sm-6 py-2">
                <dt>Diplôme le plus élevé:</dt>
                <dd>
                  <span className="text-secondary">Licence</span>
                </dd>
              </div>
              <div className="col-sm-6 py-2">
                <dt>Experience: </dt>
                <dd>
                  <span className="text-secondary">2 ans</span>
                </dd>
              </div>
              <div className="col-sm-6 py-2">
                <dt> Email: </dt>
                <dd>
                  <span className="text-secondary">
                    fedronicfelix@gmail.com
                  </span>
                </dd>
              </div>
              <div className="col-sm-6 py-2">
                <dt> Addresse: </dt>
                <dd>
                  <span className="text-secondary">
                    Bâtiment F, Appartement 65, 7 Avenue des Pyrénées, 31240 L'Union
                  </span>
                </dd>
              </div>
            </div>
            <a
              href="/documents/felix_fedronic_dev_fullstack.pdf"
              className="btn btn-outline-primary"
            >
              En Savoir Plus
            </a>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
