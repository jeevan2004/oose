import React from "react";
import "./servicebox.css";
const ServiceBox = ({ className, img }) => {
  return (
    <div className="service_box">
      <div className="container">
        <div className={`row ${className}`}>
          <div className="col-md-6">
            <div className="service_inner">
              <div className="content">
                <h6>Find</h6>
                <h5>Easy</h5>
              </div>
              <img src={img} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="service_content">
              <div className="content">
                <h4>
                  Easy on the pocket, <span> Easy on the mind.</span>
                </h4>
                <div className="row g-3">
                  <div className="col-4">
                    <p>Fully Furnished</p>
                    <p>Homes</p>
                  </div>
                  <div className="col-4">
                    <p>Fully Furnished</p>
                    <p>Homes</p>
                  </div>
                  <div className="col-4">
                    <p>Fully Furnished</p>
                    <p>Homes</p>
                  </div>
                  <div className="col-4">
                    <p>Fully Furnished</p>
                    <p>Homes</p>
                  </div>
                  <div className="col-4">
                    <p>Fully Furnished</p>
                    <p>Homes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
