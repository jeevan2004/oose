import React from "react";

import "./category.css";
import Slider from "react-slick";
import shape from "../../assets/image/shap.png";
const Categories = () => {
  return (
    <>
      <section className="category_section p-120">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-4">
            <div className="col-md-8 text-center">
              <h1 className="main_heading">Top Categories</h1>
              <img className="heading_shape mt-3" src={shape} alt="" />
              <p>
                Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
                labore et dolore
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div class="categorie-grid light_green mb-3">
                <div class="icon me-3">
                  <i class="fa fa-users"></i>
                </div>
                <div class="content">
                  <a href="/course-style-1">
                    <h5 class="title">Personal</h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="categorie-grid light_green mb-3">
                <div class="icon me-3">
                  <i class="fa fa-users"></i>
                </div>
                <div class="content">
                  <a href="/course-style-1">
                    <h5 class="title">Personal</h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="categorie-grid light_green mb-3">
                <div class="icon me-3">
                  <i class="fa fa-users"></i>
                </div>
                <div class="content">
                  <a href="/course-style-1">
                    <h5 class="title">Personal</h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="categorie-grid light_green mb-3">
                <div class="icon me-3">
                  <i class="fa fa-users"></i>
                </div>
                <div class="content">
                  <a href="/course-style-1">
                    <h5 class="title">Personal</h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="categorie-grid light_green mb-3">
                <div class="icon me-3">
                  <i class="fa fa-users"></i>
                </div>
                <div class="content">
                  <a href="/course-style-1">
                    <h5 class="title">Personal</h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="categorie-grid light_green mb-3">
                <div class="icon me-3">
                  <i class="fa fa-users"></i>
                </div>
                <div class="content">
                  <a href="/course-style-1">
                    <h5 class="title">Personal</h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="categorie-grid light_green mb-3">
                <div class="icon me-3">
                  <i class="fa fa-users"></i>
                </div>
                <div class="content">
                  <a href="/course-style-1">
                    <h5 class="title">Personal</h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="categorie-grid light_green mb-3">
                <div class="icon me-3">
                  <i class="fa fa-users"></i>
                </div>
                <div class="content">
                  <a href="/course-style-1">
                    <h5 class="title">Personal</h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="categorie-grid light_green mb-3">
                <div class="icon me-3">
                  <i class="fa fa-users"></i>
                </div>
                <div class="content">
                  <a href="/course-style-1">
                    <h5 class="title">Personal</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
