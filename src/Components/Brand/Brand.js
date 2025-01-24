import React from "react";
import "./brand.css";
import shape from "../../assets/image/shap.png";

const Brand = () => {
  return (
    <div className="edu-brand-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="brand-section-heading">
              <div className="section-title section-left ">
                <h3 className="sub_heading">Our Partners</h3>
                <h1 className="main_heading">Learn with Our Partners</h1>
                <img className="heading_shape mt-3 mb-4" src={shape} alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectur adipiscing elit sed
                  eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="brand-grid-wrap">
              <div className="brand-grid">
                <img
                  src="	https://edublink.html.devsblink.com/assets/images/brand/brand-01.png"
                  alt="Brand Logo"
                />
              </div>
              <div className="brand-grid">
                <img
                  src="	https://edublink.html.devsblink.com/assets/images/brand/brand-01.png"
                  alt="Brand Logo"
                />
              </div>
              <div className="brand-grid">
                <img
                  src="	https://edublink.html.devsblink.com/assets/images/brand/brand-01.png"
                  alt="Brand Logo"
                />
              </div>
              <div className="brand-grid">
                <img
                  src="	https://edublink.html.devsblink.com/assets/images/brand/brand-01.png"
                  alt="Brand Logo"
                />
              </div>
              <div className="brand-grid">
                <img
                  src="	https://edublink.html.devsblink.com/assets/images/brand/brand-01.png"
                  alt="Brand Logo"
                />
              </div>
              <div className="brand-grid">
                <img
                  src="	https://edublink.html.devsblink.com/assets/images/brand/brand-01.png"
                  alt="Brand Logo"
                />
              </div>
              <div className="brand-grid">
                <img
                  src="	https://edublink.html.devsblink.com/assets/images/brand/brand-01.png"
                  alt="Brand Logo"
                />
              </div>
              <div className="brand-grid">
                <img
                  src="	https://edublink.html.devsblink.com/assets/images/brand/brand-01.png"
                  alt="Brand Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
