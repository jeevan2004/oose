import React from "react";
import "./newsbox.css";

const NewsBox = () => {
  return (
    <div className="blog_box">
      <div className="inner">
        <div className="blog_thumbnail">
          <a href="#">
            <img
              src="https://edublink.html.devsblink.com/assets/images/blog/blog-01.jpg"
              alt=""
            />
          </a>
        </div>

        <div class="content position-top">
          <div class="read-more-btn">
            <a class="btn-icon-round" href="3">
              <i class="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
          <div class="category-wrap">
            <a href="#" class="blog-category">
              ONLINE
            </a>
          </div>
          <h5 class="title">
            <a href="3">Become a Better Blogger: Content Planning</a>
          </h5>
          <ul class="blog-meta">
            <li>
              <i class="fas fa-calendar-check"></i>Oct 10, 2024
            </li>
            <li>
              <i class="far fa-comments"></i>Com 09
            </li>
          </ul>
          <p>Lorem ipsum dolor sit amet cons tetur adipisicing sed.</p>
        </div>
      </div>
    </div>
  );
};

export default NewsBox;
