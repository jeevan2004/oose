import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AboutSec from "../../Components/aboutSec/AboutSec";
import Faq from "../../Components/faq/Faq";
import Features from "../../Components/Features/Features";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import TestimonialCard from "../../Components/TestimonialItem/TestimonialCard";
import Slider from "react-slick";
import "./about.css";
const AboutUs = () => {
  const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <Breadcrumb name="About Us" pageName="about us" />
      <section className="about_us">
        <AboutSec />
        <Faq />
        <Features />
        <section className="testimonial p-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-5 text-center">
                <h3 className="sub_heading">Our Testimonials</h3>
                <h1 className="main_heading">
                  What Students Think and Say About Us
                </h1>
                <p className="mt-2">
                  genuine feedback from our students about their experiences
                  with our teaching
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="course_slider mt-5">
                  <Slider {...settings}>
                    {array?.map((item) => {
                      return (
                        <div className="item">
                          {" "}
                          <TestimonialCard />
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
        <NewsLetter />
      </section>
    </>
  );
};

export default AboutUs;
