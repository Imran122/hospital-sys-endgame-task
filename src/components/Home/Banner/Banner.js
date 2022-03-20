import React from "react";
import hero_img from "../../../image/hero-img.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-text">
                <h1 className="text-start">
                  Choose your Doctor <br /> & Take Our Services
                </h1>
                <p className="my-4">
                  We probide best doctor by our hospital. The best Orthpedic
                  doctors are available.{" "}
                </p>
                <div className="hero-btn">
                  <a href="#" className="rounded-pill me-4">
                    Contact Us
                  </a>
                  <a href="#" className="rounded-pill">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-play-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                    <span className="ms-1">Watch Video</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="hero-image">
                <img src={hero_img} alt="hero-img" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
