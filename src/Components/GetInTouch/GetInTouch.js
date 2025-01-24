import React from "react";
import "./getInTouch.css";

import shape1 from "../../assets/image/shape/shap1.png";
import shape2 from "../../assets/image/shape/shap6.png";

const GetInTouch = () => {
  return (
    <div className="get_touch">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="get_touch_box">
              <div className="inner">
                <div className="content text-md-end">
                  <span className="subtitle">Get In Touch:</span>
                  <h3 className="title">
                    <a href="mailto:info@edublink">info@oneehr.net</a>
                  </h3>
                </div>
                <div className="sparator">
                  <span>or</span>
                </div>
                <div className="content">
                  <span className="subtitle">Call Us Via:</span>
                  <h3 className="title">
                    <a href="tel:+011235641231">+01 123 5678 90</a>
                  </h3>
                </div>
              </div>
              <ul className="shape-group">
                <li className="shape-01 scene">
                  <img
                    data-depth="2"
                    src="https://edublink.html.devsblink.com/assets/images/cta/shape-06.png"
                    alt="shape"
                  />
                </li>

                <li className="shape-03 scene">
                  <img
                    data-depth="-3"
                    src="https://edublink.html.devsblink.com/assets/images/cta/shape-04.png"
                    alt="shape"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
