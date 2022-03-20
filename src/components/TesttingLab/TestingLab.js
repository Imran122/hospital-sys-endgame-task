import React from "react";
import bloodtest from "../../image/bloodtest.jpg";
import covid from "../../image/covid.jpg";
import urin from "../../image/urin.jpg";
import "./TestingLab.css";
const TestingLab = () => {
  return (
    <div>
      <nav class="bg-dark navbar-dark"></nav>
      <section id="header" class="jumbotron text-center">
        <h1 class="display-3">FOREST</h1>
        <p class="lead">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </section>

      <section id="gallery">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mb-4">
              <div class="card">
                <img src={bloodtest} alt="" class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">Sunset</h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                    eum similique repellat a laborum, rerum voluptates ipsam eos
                    quo tempore iusto dolore modi dolorum in pariatur. Incidunt
                    repellendus praesentium quae!
                  </p>
                  <a href="" class="btn btn-outline-success btn-sm">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="card">
                <img src={covid} alt="" class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">Sunset</h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                    eum similique repellat a laborum, rerum voluptates ipsam eos
                    quo tempore iusto dolore modi dolorum in pariatur. Incidunt
                    repellendus praesentium quae!
                  </p>
                  <a href="" class="btn btn-outline-success btn-sm">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="card">
                <img src={urin} alt="" class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">Sunset</h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                    eum similique repellat a laborum, rerum voluptates ipsam eos
                    quo tempore iusto dolore modi dolorum in pariatur. Incidunt
                    repellendus praesentium quae!
                  </p>
                  <a href="" class="btn btn-outline-success btn-sm">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestingLab;
