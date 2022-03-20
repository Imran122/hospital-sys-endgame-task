import React from "react";
import card from "../../image/card.jpg";
import child from "../../image/child.jpg";
import { default as doctor1 } from "../../image/doctor1.jpg";
import doctor23 from "../../image/doctor2.jpg";
import doctor245 from "../../image/doctor3.jpg";
import neurology from "../../image/neuro.jpg";
import orthopedics from "../../image/orthopedic.jpg";
import "./OurDepartment.css";
const OurDepartment = () => {
  return (
    <div className="main-dept">
      <img
        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        alt="Snow"
        width="100%"
      />
      <div class="centered">
        <div class="text-block">
          Check our department and choose your doctor
        </div>
      </div>
      <div class="container"></div>
      <div id="cards_landscape_wrap-2">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={orthopedics} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>Orthopedic</h6>
                      <p>
                        Orthopedic surgery or orthopedics, is the branch of
                        surgery concerned with conditions involving the
                        musculoskeletal system. Orthopedic surgeons use both
                        surgical and nonsurgical means to treat musculoskeletal
                        trauma, spine diseases, sports injuries.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={child} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>child care</h6>
                      <p>
                        Child care, otherwise known as day care, is the care and
                        supervision of a child or multiple children at a time,
                        whose ages range from two weeks to eighteen years. Child
                        care is a broad topic that covers a wide spectrum of
                        professionals, institutions, contexts, activities, and
                        social and cultural conventions.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={card} alt="" />
                    </div>

                    <div class="text-container">
                      <h6>cardiology</h6>
                      <p>
                        Cardiology is a medical specialty and a branch of
                        internal medicine concerned with disorders of the heart.
                        It deals with the diagnosis and treatment of such
                        conditions as congenital heart defects, coronary artery
                        disease, electrophysiology, heart failure and valvular
                        heart disease
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={neurology} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>neurology</h6>
                      <p>
                        Neurology is the branch of medicine concerned with the
                        study and treatment of disorders of the nervous system.
                        The nervous system is a complex, sophisticated system
                        that regulates and coordinates body activities. It has
                        two major divisions: Central nervous system: the brain
                        and spinal cord.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="team-boxed">
        <div class="container">
          <div class="intro">
            <h2 class="text-center">Meet Department Head </h2>
          </div>
          <div class="row people">
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={doctor1} />
                <h3 class="name">Ben Johnson</h3>
                <p class="title">Orthopedic</p>
                <p class="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est, et interdum justo suscipit id. Etiam dictum
                  feugiat tellus, a semper massa.{" "}
                </p>
                <div class="social">
                  <a href="#">
                    <i class="fa fa-facebook-official"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={doctor245} />
                <h3 class="name">Emily Clark</h3>
                <p class="title">child specialist</p>
                <p class="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est, et interdum justo suscipit id. Etiam dictum
                  feugiat tellus, a semper massa.{" "}
                </p>
                <div class="social">
                  <a href="#">
                    <i class="fa fa-facebook-official"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src={doctor23} />
                <h3 class="name">Carl Kent</h3>
                <p class="title">medicine</p>
                <p class="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est, et interdum justo suscipit id. Etiam dictum
                  feugiat tellus, a semper massa.{" "}
                </p>
                <div class="social">
                  <a href="#">
                    <i class="fa fa-facebook-official"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDepartment;
