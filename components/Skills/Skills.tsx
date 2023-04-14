import React from "react";

function Skills() {
  return (
    <div className="container-fluid py-5" id="skill">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center overflow-hidden">
          <h1
            className="display-2 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            Compétences
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            Mes Compétences
          </h1>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">Langages</h5>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">
                  <span>
                    <img
                      className=" mr-1"
                      width={40}
                      height={40}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                    />
                  </span>
                  HTML
                </h6>
                <h6 className="font-weight-bold">90%</h6>
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
                <h6 className="font-weight-bold">
                  <span>
                    <img
                      className="mr-1"
                      width={40}
                      height={40}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                    />
                  </span>
                  CSS
                </h6>
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
                <h6 className="font-weight-bold">
                  <span>
                    <img
                      className="mr-1"
                      width={40}
                      height={40}
                      src="data:image/png;base64,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"
                    />
                  </span>
                  Javascript
                </h6>
                <h6 className="font-weight-bold">85%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">
                  <span>
                    <img
                      className="mr-1"
                      width={40}
                      height={40}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/800px-PHP-logo.svg.png"
                    />
                  </span>
                  PHP
                </h6>
                <h6 className="font-weight-bold">80%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">
                  <span>
                    <img
                      className="mr-1"
                      width={40}
                      height={40}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/800px-Sql_data_base_with_logo.png?20210130181641"
                    />
                  </span>
                  SQL
                </h6>
                <h6 className="font-weight-bold">80%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">Frameworks</h5>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">
                  <span>
                    <img
                      className=" mr-1"
                      width={40}
                      height={40}
                      src="https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/1827/thumb_bigger_formation-next-js.png"
                    />
                  </span>
                  Next.js
                </h6>
                <h6 className="font-weight-bold">90%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">
                  <span>
                    <img
                      className="mr-1"
                      width={40}
                      height={40}
                      src="https://www.a5sys.com/wp-content/uploads/2021/10/symfony_logo_vertical.png.webp"
                    />
                  </span>
                  Symfony
                </h6>
                <h6 className="font-weight-bold">80%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">
                  <span>
                    <img
                      className="mr-1"
                      width={40}
                      height={40}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/langfr-1024px-Angular_full_color_logo.svg.png"
                    />
                  </span>
                  Angular
                </h6>
                <h6 className="font-weight-bold">80%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">
                  <span>
                    <img
                      className="mr-1"
                      width={30}
                      height={30}
                      src="https://s.w.org/style/images/about/WordPress-logotype-wmark.png"
                    />
                  </span>
                  Wordpress
                </h6>
                <h6 className="font-weight-bold">80%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">
                  <span>
                    <img
                      className="mr-1"
                      width={40}
                      height={40}
                      src="https://avatars.githubusercontent.com/u/67109815?s=280&v=4"
                    />
                  </span>
                  Tailwind Css
                </h6>
                <h6 className="font-weight-bold">80%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">
                  <span>
                    <img
                      className="mr-1"
                      width={40}
                      height={40}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
                    />
                  </span>
                  Bootstrap
                </h6>
                <h6 className="font-weight-bold">80%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">Backend</h5>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">
                  <span>
                    <img
                      className=" mr-2"
                      width={40}
                      height={40}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
                    />
                  </span>
                  Node.js
                </h6>
                <h6 className="font-weight-bold">80%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">
                  <span>
                    <img
                      className="mr-1"
                      width={40}
                      height={40}
                      src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"
                    />
                  </span>
                  MongoDB
                </h6>
                <h6 className="font-weight-bold">80%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">
                  <span>
                    <img
                      className="mr-1"
                      width={40}
                      height={40}
                      src="https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png"
                    />
                  </span>
                  MySQL
                </h6>
                <h6 className="font-weight-bold">80%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">
                  <span>
                    <img
                      className="mr-1"
                      width={40}
                      height={40}
                      src="https://w7.pngwing.com/pngs/398/821/png-transparent-firebase-google-google-i-o-icon-thumbnail.png"
                    />
                  </span>
                  FireBase
                </h6>
                <h6 className="font-weight-bold">80%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">
                  <span>
                    <img
                      className="mr-1"
                      width={60}
                      height={40}
                      src="https://d1.awsstatic.com/acs/characters/Logos/Docker-Logo_Horizontel_279x131.b8a5c41e56b77706656d61080f6a0217a3ba356d.png"
                    />
                  </span>
                  Docker
                </h6>
                <h6 className="font-weight-bold">80%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">
                  <span>
                    <img
                      className="mr-1"
                      width={40}
                      height={40}
                      src="https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/10/formation-git.png"
                    />
                  </span>
                  Git
                </h6>
                <h6 className="font-weight-bold">80%</h6>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
