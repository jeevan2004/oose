import React from "react";
import "./brand.css";
import logo1 from "../../assets/image/logo1.webp";
import logo2 from "../../assets/image/logo2.webp";
import logo3 from "../../assets/image/logo3.webp";
import logo4 from "../../assets/image/logo4.webp";
const Brand = () => {
  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="brand-section-heading text-center">
              <div className="section-title mb-5 ">
                <h1 className="main_heading">Our Brands</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="brand-grid-wrap">
              <div className="brand-grid">
                <img src={logo1} alt="Brand Logo" />
              </div>
              <div className="brand-grid">
                <img src={logo2} alt="Brand Logo" />
              </div>
              <div className="brand-grid">
                <img src={logo3} alt="Brand Logo" />
              </div>
              <div className="brand-grid">
                <img src={logo4} alt="Brand Logo" />
              </div>
              <div className="brand-grid">
                <img src={logo1} alt="Brand Logo" />
              </div>
              <div className="brand-grid">
                <img src={logo3} alt="Brand Logo" />
              </div>
              <div className="brand-grid">
                <img src={logo2} alt="Brand Logo" />
              </div>
              <div className="brand-grid">
                <img src={logo4} alt="Brand Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
