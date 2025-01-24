import React from "react";
import Slider from "react-slick";
import ProductCard from "../ProductCard/ProductCard";
import { Col, Row } from "react-bootstrap";
import shap from "../../assets/image/shap.png";
import "./topCourse.css";
import course1 from "../../assets/image/course1.jpg";
const TopCourse = () => {
  const array = [1, 1, 1, 1];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="course_section mt-5 pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 text-center">
              <h3 className="sub_heading">Popular Courses</h3>
              <h1 className="main_heading">Pick A Course To Get Started</h1>
              <img className="heading_shape mt-3" src={shap} alt="" />
            </div>
          </div>

          <div className="row mt-4">
            {array.map((item) => {
              return (
                <>
                  <div className="col-md-3">
                    <div class="course_card   hover-button-bg-white">
                      <div class="inner">
                        <div class="thumbnail">
                          <a href="/course-details/1">
                            <img src={course1} alt="Course Meta" />
                          </a>
                          <div class="time-top">
                            <span class="duration">
                              <i class="fa fa-clock-o"></i>4 Weeks
                            </span>
                          </div>
                        </div>
                        <div class="content">
                          <span class="course-level">Advanced</span>
                          <h6 class="title">
                            <a href="#">
                              Starting SEO as your Home Based Business
                            </a>
                          </h6>
                          <div class="course-rating">
                            <div class="rating">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                            </div>
                            <span class="rating-count">(4.9 /8 Rating)</span>
                          </div>
                          <div class="course-price">$49.00</div>
                          <ul class="course-meta">
                            <li>
                              <i class="icon-24"></i>13 Lessons
                            </li>
                            <li>
                              <i class="icon-25"></i>28 Students
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="course-hover-content-wrapper">
                        <button class="wishlist-btn ">
                          <i class="fa fa-heart"></i>
                        </button>
                      </div>
                      <div class="course-hover-content">
                        <div class="content">
                          <button class="wishlist-btn ">
                            <i class="fa fa-heart"></i>
                          </button>
                          <span class="course-level">Advanced</span>
                          <h6 class="title">
                            <a href="/course-details/1">
                              Starting SEO as your Home Based Business
                            </a>
                          </h6>
                          <div class="course-rating">
                            <div class="rating">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                            </div>
                            <span class="rating-count">(4.9 /8 Rating)</span>
                          </div>
                          <div class="course-price">$49.00</div>
                          <p>
                            Lorem ipsum dolor sit amet consectur adipiscing elit
                            sed eiusmod tempor.
                          </p>
                          <ul class="course-meta">
                            <li>
                              <i class="fa fa-file-pdf"></i>13 Lessons
                            </li>
                            <li>
                              <i class="fa fa-user"></i>
                              28 Students
                            </li>
                          </ul>
                          <a class="btn_secondary">
                            Add to cart<i class="icon-4"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCourse;
