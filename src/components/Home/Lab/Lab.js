import React from "react";
import { Link } from "react-router-dom";
import "./Lab.css";
const Lab = () => {
  return (
    <div>
      <section class="light">
        <div class="container py-2">
          <div class="h1 text-center text-dark" id="pageHeaderTitle">
            Our Lab
          </div>

          <article class="postcard light yellow">
            <a class="postcard__img_link" href="#">
              <img
                class="postcard__img"
                src="https://picsum.photos/501/501"
                alt="Image Title"
              />
            </a>
            <div class="postcard__text t-dark">
              <h1 class="postcard__title yellow">
                <a href="#">Testing Lab</a>
              </h1>
              <div class="postcard__subtitle small">
                <time datetime="2020-05-25 12:00:00">
                  <i class="fas fa-calendar-alt mr-2"></i>Mon to Fri
                </time>
              </div>
              <div class="postcard__bar"></div>
              <div class="postcard__preview-txt">
                Laboratory Medicine Department of United Hospital has become the
                leading diagnostic.Medical laboratories vary in size and
                complexity and so offer a variety of testing services. More
                comprehensive services can be found in acute-care
                hospitals.Complete Blood Count This test, also known as a CBC,
                is the most common blood test performed
              </div>
              <ul class="postcard__tagbox">
                <Link to="/lab" class="tag__item">
                  Podcast
                </Link>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Lab;
