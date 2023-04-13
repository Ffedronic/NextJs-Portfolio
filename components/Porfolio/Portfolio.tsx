import Link from "next/link";
import React from "react";

function Portfolio() {
  return (
    <div className="container-fluid pt-5 pb-3" id="portfolio">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            GitHub
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            Mon GitHub
          </h1>
        </div>
        <div className="row text-center">
          <div className="col-12">
            <Link href={"https://github.com/Ffedronic?tab=repositories"} target="_blank">
              <img
                height={250}
                width={250}
                src="https://guillaume-richard.fr/wp-content/uploads/2020/08/Octocat-github.png"
                alt="github"
              />
            </Link>
            <h5 className="text-primary">Cliquez sur Octocat !</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
