import React from "react";
import "./city.css";
import city from "../../assets/image/bangalore.svg";

const CityBox = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="city_section">
      <div className="container">
        <div className="city_inner">
          {arr?.map((item) => {
            return (
              <div className="city_box">
                <img src={city} alt="" />
                <p>Jaipur</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CityBox;
