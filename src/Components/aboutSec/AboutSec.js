import React from "react";

import "./aboutSec.css";
import about1 from "../../assets/image/about1.webp";
import about2 from "../../assets/image/about2.webp";
import check from "../../assets/image/check.png";
import shap36 from "../../assets/image/shape/shap36.png";
import shap37 from "../../assets/image/shape/shap37.png";
import shap2 from "../../assets/image/shape/shape02.png";
import shape from "../../assets/image/shap.png";
const AboutSec = () => {
  return (
    <>
      <div class="gap-bottom-equal edu-about-area about-style-1">
        <div class="container edublink-animated-shape">
          <div class="row g-5 align-items-center">
            <div class="col-lg-6">
              <div class="about-image-gallery">
                <img class="main-img-1" src={about1} alt="About Image" />
                <div
                  class="video-box sal-animate"
                  data-sal-delay="150"
                  data-sal="slide-down"
                  data-sal-duration="800"
                >
                  <div class="inner">
                    <div class="thumb">
                      <img src={about2} alt="About Image" />
                      <button class="popup-icon video-popup-activation border-0">
                        <i class="fa fa-play"></i>
                      </button>
                    </div>
                    <div class="loading-bar">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div class="award-status bounce-slide">
                  <div class="inner">
                    <div class="icon">
                      <i class="fa fa-play"></i>
                    </div>
                    <div class="content">
                      <h6 class="title">29+</h6>
                      <span class="subtitle">Wonderful Awards</span>
                    </div>
                  </div>
                </div>
                <ul class="shape-group">
                  <li
                    class="shape-1 scene sal-animate"
                    data-sal-delay="500"
                    data-sal="fade"
                    data-sal-duration="200"
                  >
                    <img src={shap36} alt="Shape" />
                  </li>
                  <li
                    class="shape-2 scene sal-animate"
                    data-sal-delay="500"
                    data-sal="fade"
                    data-sal-duration="200"
                  >
                    <img src={shap37} alt="Shape" />
                  </li>
                  <li
                    class="shape-3 scene sal-animate"
                    data-sal-delay="500"
                    data-sal="fade"
                    data-sal-duration="200"
                  >
                    <img src={shap2} alt="Shape" />
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="col-lg-6 sal-animate"
              data-sal-delay="150"
              data-sal="slide-left"
              data-sal-duration="800"
            >
              <div class="about-content">
                <div class="section-title section-left">
                  <span class="pre-title">About Us</span>
                  <h2 class="title">
                    Learn &amp; Grow Your Skills From{" "}
                    <span class="color-secondary">Anywhere</span>
                  </h2>
                  <span class="shape-line">
                    <img className="heading_shape mt-3" src={shape} alt="" />
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet consectur adipiscing elit sed
                    eiusmod ex tempor incididunt labore dolore magna aliquaenim
                    minim veniam quis nostrud exercitation ullamco laboris.
                  </p>
                </div>
                <ul class="features_list">
                  <li>
                    <img src={check} /> Expert Trainers
                  </li>
                  <li>
                    <img src={check} /> Online Remote Learning
                  </li>
                  <li>
                    <img src={check} /> Lifetime Access
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul class="shape-group">
            <li
              class="shape-1 circle scene sal-animate"
              data-sal-delay="500"
              data-sal="fade"
              data-sal-duration="200"
            >
              <span class="d-block"></span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutSec;
