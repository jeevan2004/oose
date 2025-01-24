import React from "react";
import "./productCard.css";
import { Link } from "react-router-dom";
const ProductCard = ({ data }) => {
  console.log(data, "datadatadatadatadatadatadata vvvv");
  console.log(data?.categoryName, "categoryName");
  return (
    <>
      <div className="courses_item">
        <div className="courses_item_thumb">
          <Link to={`../course-details/${data?.courseId}`}>
            <img
              src={
                data?.thumbnailImage
                  ? data.thumbnailImage
                  : "https://skillgro.websolutionus.com/uploads/store/files/1001/my course images/dental-care-horizontal-banner-template_23-2149267635_3_11zon.jpg"
              }
              alt="img"
            />
          </Link>
        </div>
        <div className="courses_item_content">
          <ul className="courses_item_meta">
            <li className="courses_item_tag">
              <a href="#">{data?.categoryName}</a>
            </li>
            <li className="avg_rating">
              <i className="fas fa-star"></i>
              5.0
            </li>
          </ul>
          <h5 className="title">
            <Link to={`/course-details/${data?.courseId}`}>
              {data?.courseName ? data?.courseName : "not found"}
            </Link>
          </h5>
          <p className="author">
            By <a href="#">{data?.instructorName}</a>
          </p>
          <div className="courses_item-bottom">
            <div className="button">
              <a href="javascript:;" className="add-to-cart" data-id="4">
                <span className="text">Add To Cart</span>
                <i className="flaticon-arrow-right"></i>
              </a>
            </div>
            <h5 className="price">$51.00</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
