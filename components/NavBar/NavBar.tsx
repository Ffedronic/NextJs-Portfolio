import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
      <a href="index.html" className="navbar-brand ml-lg-3">
        <h1 className="m-0 display-5">
          <span className="text-primary">Free</span>Folio
        </h1>
      </a>
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
        <div className="navbar-nav m-auto py-0">
          <Link href="#home" className="nav-item nav-link active">
            Accueil
          </Link>
          <Link href="#about" className="nav-item nav-link">
            A Propos
          </Link>
          <Link href="#qualification" className="nav-item nav-link">
            Qualification
          </Link>
          <Link href="#skill" className="nav-item nav-link">
            Compétences
          </Link>
          <Link href="#portfolio" className="nav-item nav-link">
            Portfolio
          </Link>
          <Link href="#contact" className="nav-item nav-link">
            Contact
          </Link>
        </div>
        <a href="" className="btn btn-outline-primary d-none d-lg-block">
          Recrutez Moi
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
