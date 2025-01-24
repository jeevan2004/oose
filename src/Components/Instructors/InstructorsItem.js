import React from "react";
import "./instructors.css";

const InstructorsItem = () => {
  return (
    <div className="instructors_item">
      <div className="inner">
        <div className="thumbnail-wrap">
          <div className="thumbnail">
            <a href="#">
              <img
                src="https://edublink.html.devsblink.com/assets/images/team/team-01.webp"
                alt="team images"
              />
            </a>
          </div>
          <ul className="team-share-info">
            <li>
              <a href="#">
                <i class="fas fa-share-alt"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="content">
          <h5 className="title">
            <a href="#">Jane Seymour</a>
          </h5>
          <span className="designation">UI Designer</span>
        </div>
      </div>
    </div>
  );
};

export default InstructorsItem;
