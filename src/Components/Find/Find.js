import React from "react";
import "./find.css";
import Slider from "react-slick";

const Find = () => {
  const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="find">
      <div className="container">
        <div className="heading">
          Find your Zolo,<span> your way</span>
        </div>

        <div className="find_inner">
          <Slider {...settings}>
            {array?.map((item) => {
              return (
                <div>
                  <div className="find_box">
                    <p>Jaipur</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Find;
