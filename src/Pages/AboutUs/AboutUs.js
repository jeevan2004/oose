import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AboutSec from "../../Components/aboutSec/AboutSec";
import Faq from "../../Components/faq/Faq";
import Features from "../../Components/Features/Features";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import TestimonialCard from "../../Components/TestimonialItem/TestimonialCard";
import page from "../../assets/image/page.webp";
import Slider from "react-slick";
import "./about.css";
import Brand from "../../Components/Brand/Brand";
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
      <Breadcrumb name="ABOUT US" pageName="about us" />
      <section className="about_us">
        <div className="description_section p-70">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="img">
                  <img src={page} alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="content">
                  <h4>
                    BTRoomer (BTRoomerSOLUTIONS LLP) is the all-in-one platform
                    that gives an elite service to{" "}
                    <span style={{ color: "rgb(0, 174, 239)" }}>
                      {" "}
                      manage and administer your PGs and Hostels.
                    </span>
                  </h4>
                </div>
              </div>

              <div className="col-12 ">
                <div className="row justify-content-center">
                  <div className="col-md-9 ">
                    <div className="content_bottom">
                      It’s a complete cloud- based solution developed by{" "}
                      <b>ZUCOL Group </b>
                      that can be accessed anywhere anytime. BTRoomer indulges
                      an
                      <b> effortless experience </b>for management and
                      supervision of hostels and PGs. The App features have been
                      designed in accordance with the customer preferences &
                      requirements which gives our clients the liberty from all
                      the complex paperwork.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <marquee
          className="py-lg-3 my-4 marquee"
          behavior="scroll"
          direction="left"
          scrollamount={10}
          loop={"infinite"}
        >
          <span className="marquee-text">
            Get real-time visibility with 100% transparency.
            &nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="marquee-text">
            Get real-time visibility with 100% transparency.
            &nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="marquee-text">
            Get real-time visibility with 100% transparency.
            &nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </marquee>

        <AboutSec />

        <Features />
        <section className="testimonial p-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-5 text-center">
                <h3 className="sub_heading">Our Testimonials</h3>
                <h1 className="main_heading">
                  What Students Think and Say About Us
                </h1>
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
        <section className="p-70">
          <Brand />
        </section>
        <Faq />
        <NewsLetter />
      </section>
    </>
  );
};

export default AboutUs;
