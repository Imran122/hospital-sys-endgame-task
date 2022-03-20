import React from "react";
import faq_img from "../../../image/faq.svg";
import "./FrequentlyQuestion.css";
const FrequentlyQuestion = () => {
  return (
    <div>
      <section id="questiontext">
        <div className="container">
          <div className="faq-title text-center">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 my-5 my-lg-0">
              <div className="faq-img text-center text-lg-start">
                <img src={faq_img} alt="faq_img" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 ms-lg-auto">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item accordion-i">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button accordion-btn collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      What is Ortho Hospital?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse accordion-c collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body py-3 px-4 accordion-body-text">
                      <p className="">
                        A hospital that give best services for orthpedic patient
                        with best surgery.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item accordion-i">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button accordion-btn collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Are hospital provide surgery?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse accordion-c collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body py-3 px-4 accordion-body-text">
                      <p className="">
                        All of our doctor are surgery specialist . we provide
                        and do best surgery
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item accordion-i">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="accordion-button accordion-btn collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Do you give knee replacement surgery?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse accordion-c collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body py-3 px-4 accordion-body-text">
                      <p className="">
                        Yes. we have two international doctor who give knee
                        replacement surgery services.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item accordion-i">
                  <h2 className="accordion-header" id="flush-headingFour">
                    <button
                      className="accordion-button accordion-btn collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Where are the best best doctor for surgery.?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse accordion-c collapse"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body py-3 px-4 accordion-body-text">
                      <p className="">
                        come to our hospital and you will realize that every
                        doctor is best.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item accordion-i">
                  <h2 className="accordion-header" id="flush-headingFive">
                    <button
                      className="accordion-button accordion-btn collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Do you giver other services?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    className="accordion-collapse accordion-c collapse"
                    aria-labelledby="flush-headingFive"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body py-3 px-4 accordion-body-text">
                      <p className="">
                        Yes we have also other department and specialist like
                        cardiology, gastrology, child care medicine doctor etc.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item accordion-i">
                  <h2 className="accordion-header" id="flush-headingSix">
                    <button
                      className="accordion-button accordion-btn collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseSix"
                      aria-expanded="false"
                      aria-controls="flush-collapseSix"
                    >
                      Who is the owner of the hospital?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseSix"
                    className="accordion-collapse accordion-c collapse"
                    aria-labelledby="flush-headingSix"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body py-3 px-4 accordion-body-text">
                      <p className="">Nobody!!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrequentlyQuestion;
