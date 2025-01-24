import React from "react";
import "./overview.css";

const Overview = () => {
  return (
    <div className="overview">
      <div className="container">
        <div className="overview_inner">
          <h3>
            We are India’s Most Celebrated <span>Coliving</span> Spaces
          </h3>
          <div className="overview_box">
            <div className="row">
              <div className="col-md-4">
                <span>50k +</span>
                <p>Delighted Customers</p>
              </div>
              <div className="col-md-4">
                <span>50k +</span>
                <p>Delighted Customers</p>
              </div>
              <div className="col-md-4">
                <span>50k +</span>
                <p>Delighted Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
