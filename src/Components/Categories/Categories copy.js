import React from "react";

import "./category.css";
import Slider from "react-slick";

const Categories = () => {
  const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="category_section p-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 text-center">
              <h3 className="sub_heading">Trending Categories</h3>
              <h1 className="main_heading">Top Category We Have</h1>
              <p className="mt-2">
                Check out the most demanding categories right now
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="category_slider mt-5">
                <Slider {...settings}>
                  {array?.map((item) => {
                    return (
                      <div className="categories_item">
                        <a href="">
                          <div className="icon">
                            <img
                              src="https://skillgro.websolutionus.com/uploads/custom-images/wsus-img-2024-06-03-10-38-37-4878.png"
                              alt=""
                            />
                          </div>
                          <span className="name">Development</span>
                          <span className="courses">(7)</span>
                        </a>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
