import React from "react";
import "./homeBanner.css";

import hero from "../../assets/image/girl-1.webp";
import author_images from "../../assets/image/author-1.png";
import shap1 from "../../assets/image/shape/shap1.png";
import shap2 from "../../assets/image/shape/shap2.png";
import shap3 from "../../assets/image/shape/shap3.png";
import shap4 from "../../assets/image/shape/shap4.png";
import shap5 from "../../assets/image/shape/shap5.png";
import shap6 from "../../assets/image/shape/shap6.png";
import check from "../../assets/image/check.png";

const HomeBanner = () => {
  return (
    <>
      <div className="hero-banner hero-style-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content">
                <h1
                  className="title sal-animate"
                  data-sal-delay="100"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                >
                  Your Stay. <span className="color-secondary">Your Way.</span>{" "}
                </h1>

                <ul class="features_list">
                  <li>
                    <img src={check} /> Stay for a few nights or move in for a
                    few months
                  </li>
                  <li>
                    <img src={check} /> Choose a shared space or pick a private
                    room
                  </li>
                  <li>
                    <img src={check} /> Make your own food or take a
                    subscription
                  </li>
                  <li>
                    <img src={check} /> And more flexible options to fit your
                    needs
                  </li>
                </ul>
                {/* <p
                  data-sal-delay="200"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  className="sal-animate"
                >
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit.
                </p> */}
                <div
                  className="banner-btn sal-animate"
                  data-sal-delay="400"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                >
                  <a
                    className="btn_primary mt-4 d-inline-block"
                    href="/course-style-1"
                  >
                    Find Routes <i className="icon-4"></i>
                  </a>
                </div>
                {/* <ul className="shape-group">
                  <li
                    className="shape-1 scene sal-animate"
                    data-sal-delay="1000"
                    data-sal="fade"
                    data-sal-duration="1000"
                    // style="transform: translateX(4.24px) translateY(-10.92px) translateZ(0px);"
                  >
                    <img src={shap1} alt="Shape" />
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-thumbnail">
                <div
                  className="thumbnail sal-animate"
                  data-sal-delay="500"
                  data-sal="slide-left"
                  data-sal-duration="1000"
                >
                  <img
                    src="https://zolostays.com/public/assets/home/desktop/hero-img.png"
                    alt="Girl Image"
                  />
                </div>
                {/* <div
                  className="instructor-info sal-animate"
                  data-sal-delay="600"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                >
                  <div className="inner">
                    <h5 className="title">Instructor</h5>
                    <div className="media d-flex">
                      <div className="thumb">
                        <img src={author_images} alt="Images" />
                      </div>
                      <div className="content">
                        <span>200+</span> Instructors
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <ul className="shape-group">
                    <li
                      className="shape-1 sal-animate"
                      data-sal-delay="1000"
                      data-sal="fade"
                      data-sal-duration="1000"
                    >
                      <img src={shap5} alt="Shape" />
                    </li>
                    <li
                      className="shape-2 scene sal-animate"
                      data-sal-delay="1000"
                      data-sal="fade"
                      data-sal-duration="1000"
                      // style="transform: translateX(-4.24px) translateY(10.92px) translateZ(0px);"
                    >
                      <img src={shap6} alt="Shape" />
                    </li>
                    <li
                      className="shape-3 scene sal-animate"
                      data-sal-delay="1000"
                      data-sal="fade"
                      data-sal-duration="1000"
                      // style="transform: translateX(5.3px) translateY(-13.65px) translateZ(0px);"
                    >
                      <span className="circle-shape d-block"></span>
                    </li>
                    <li
                      className="shape-4 sal-animate"
                      data-sal-delay="1000"
                      data-sal="fade"
                      data-sal-duration="1000"
                    >
                      <img src={shap3} alt="Shape" />
                    </li>
                    <li
                      className="shape-5 scene sal-animate"
                      data-sal-delay="1000"
                      data-sal="fade"
                      data-sal-duration="1000"
                      // style="transform: translateX(4.24px) translateY(-10.92px) translateZ(0px);"
                    >
                      <img src={shap1} alt="Shape" />
                    </li>
                    <li
                      className="shape-6 scene sal-animate"
                      data-sal-delay="1000"
                      data-sal="fade"
                      data-sal-duration="1000"
                      // style="transform: translateX(-5.3px) translateY(13.65px) translateZ(0px);"
                    >
                      <img src={shap4} alt="Shape" />
                    </li>
                  </ul>{" "} */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="shape-7">
          <img src={shap2} alt="Shape" />
        </div> */}
      </div>
      {/* <div class="features-area">
        <div class="container">
          <div class="features-grid-wrap">
            <div class="features-box features-style-2 edublink-svg-animate">
              <div class="icon">
                <svg
                  width="38"
                  height="36"
                  viewBox="0 0 44 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41.37 34.7695C41.27 36.5695 39.78 37.9995 37.95 37.9995H5.42C3.6 37.9995 2.1 36.5695 2 34.7695H41.37ZM41.57 32.7695H1.81C0.81 32.7695 0 33.5795 0 34.5795C0 37.5695 2.43 39.9995 5.42 39.9995H37.95C40.94 39.9995 43.37 37.5695 43.37 34.5795C43.38 33.5795 42.57 32.7695 41.57 32.7695Z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M38.3501 15.5801V33.6801H4.12012V9.27012C4.12012 8.77012 4.52012 8.37012 5.02012 8.37012H28.0001"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M41.3801 2V14.27H31.9901C31.3001 14.27 30.6301 14.52 30.1101 14.96L29.1101 15.64V2H41.3801ZM41.5701 0H28.9201C27.9201 0 27.1101 0.81 27.1101 1.81V17.89C27.1101 18.39 27.5201 18.72 27.9401 18.72C28.1401 18.72 28.3501 18.64 28.5201 18.48L31.3501 16.54C31.5201 16.37 31.7501 16.27 31.9901 16.27H41.5701C42.5701 16.27 43.3801 15.46 43.3801 14.46V1.81C43.3801 0.81 42.5701 0 41.5701 0Z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M32.0801 6.12988H38.4101"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M33.8899 10.1396H36.5899"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M10.9399 33.6701V26.7001C10.9399 24.5601 12.9599 22.8301 15.4599 22.8301C17.9599 22.8301 19.9799 24.5601 19.9799 26.7001V33.6701"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M15.46 22.8302C16.9567 22.8302 18.17 21.6168 18.17 20.1202C18.17 18.6235 16.9567 17.4102 15.46 17.4102C13.9633 17.4102 12.75 18.6235 12.75 20.1202C12.75 21.6168 13.9633 22.8302 15.46 22.8302Z"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  ></path>
                </svg>
              </div>
              <div class="content">
                <h5 class="title">
                  <span>3020</span>Online Courses
                </h5>
              </div>
            </div>
            <div class="features-box features-style-2 edublink-svg-animate">
              <div class="icon">
                <svg
                  width="26"
                  height="40"
                  viewBox="0 0 31 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.8827 31.2393L26.7251 38.0491H4.27539L2.11774 31.2393H28.8827V31.2393ZM29.3042 29.2881H1.69624C0.55218 29.2881 -0.260704 30.3613 0.0805067 31.4247L2.42884 38.8393C2.63959 39.532 3.30194 40.0003 4.04457 40.0003H26.9659C27.7085 40.0003 28.3709 39.532 28.5816 38.8393L30.93 31.4247C31.2611 30.3613 30.4483 29.2881 29.3042 29.2881Z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M4.48584 30.1174C4.48584 26.9369 7.14528 24.3516 10.4169 24.3516H20.583C23.8546 24.3516 26.514 26.9369 26.514 30.1174"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M15.0737 34.6436H15.9268"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.4827 24.3512V22.5853C20.4827 21.7268 20.8039 20.9073 21.3558 20.2341C22.5802 18.7512 23.4232 17.1024 23.7242 14.6341C23.7744 14.2146 24.1357 13.8829 24.5672 13.8829C25.059 13.8829 25.4503 13.4927 25.4503 13.0146V12.2439C25.4503 11.7658 25.0489 11.3756 24.5572 11.3756H24.5471C24.1056 11.3756 23.7543 11.0536 23.7042 10.6341C23.0518 5.1512 19.6197 0.975586 15.5051 0.975586C11.3804 0.975586 7.95828 5.1512 7.27586 10.6341C7.22568 11.0536 6.86439 11.3853 6.43286 11.3853H6.41279C5.8508 11.3853 5.38916 11.8341 5.38916 12.3805V12.878C5.38916 13.4244 5.8508 13.8731 6.41279 13.8731C6.85436 13.8731 7.20561 14.1951 7.25578 14.6244C7.55685 17.0927 8.40988 18.7512 9.62419 20.2341C10.1761 20.9073 10.4973 21.7366 10.4973 22.5951V24.3512"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M6.51318 11.3857H13.9395C15.4449 11.3857 16.8298 10.3223 16.9301 8.86862C16.9603 8.40033 16.9201 7.44423 17.0807 7.00521C17.171 6.7613 17.5724 6.83935 17.6527 7.09301L18.4957 10.4686C18.6763 11.0247 19.2082 11.3955 19.8003 11.3955H24.3565"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  ></path>
                </svg>
              </div>
              <div class="content">
                <h5 class="title">
                  <span>Top</span>Instructors
                </h5>
              </div>
            </div>
            <div class="features-box features-style-2 edublink-svg-animate">
              <div class="icon">
                <svg
                  width="37"
                  viewBox="0 0 48 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.1048 32.5521H2.67293C1.72721 32.5521 0.964844 31.7998 0.964844 30.8664V2.63786C0.964844 1.70453 1.72721 0.952148 2.67293 0.952148H45.3267C46.2724 0.952148 47.0348 1.70453 47.0348 2.63786V30.8664C47.0348 31.7998 46.2724 32.5521 45.3267 32.5521H41.8044"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M8.31836 9.33301H40.6658"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8.31836 16.752H22.369"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M35.4355 28.2858C39.001 28.2858 41.8914 25.4332 41.8914 21.9144C41.8914 18.3956 39.001 15.543 35.4355 15.543C31.8699 15.543 28.9795 18.3956 28.9795 21.9144C28.9795 25.4332 31.8699 28.2858 35.4355 28.2858Z"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M30.5523 26.0762L28.0626 38.6286C28.0047 38.9238 28.3231 39.1428 28.5837 39L34.5668 35.619C35.0975 35.3143 35.7538 35.3143 36.2942 35.619L42.2773 39C42.5378 39.1524 42.8563 38.9238 42.7984 38.6286L40.3086 26.0762"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  ></path>
                </svg>
              </div>
              <div class="content">
                <h5 class="title">
                  <span>Online</span>Certifications
                </h5>
              </div>
            </div>
            <div class="features-box features-style-2 edublink-svg-animate">
              <div class="icon">
                <svg
                  width="38"
                  height="40"
                  viewBox="0 0 45 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5004 20.4568C26.6355 20.4568 29.9876 17.1309 29.9876 13.0282C29.9876 8.92549 26.6355 5.59961 22.5004 5.59961C18.3653 5.59961 15.0132 8.92549 15.0132 13.0282C15.0132 17.1309 18.3653 20.4568 22.5004 20.4568Z"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M32.7999 39.0468H12.2005C11.6821 39.0468 11.2598 38.6277 11.2598 38.1134V31.6182C11.2598 25.4563 16.2896 20.4658 22.5002 20.4658C28.7107 20.4658 33.7406 25.4563 33.7406 31.6182V38.123C33.7406 38.6277 33.3182 39.0468 32.7999 39.0468Z"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M25.6772 6.06643C26.6563 3.09501 29.4784 0.952148 32.7997 0.952148C36.9368 0.952148 40.2869 4.27596 40.2869 8.38072C40.2869 12.4855 36.9368 15.8093 32.7997 15.8093C31.6862 15.8093 30.6303 15.5712 29.68 15.1331"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M29.1714 16.4088C30.3137 16.0279 31.5327 15.8184 32.7998 15.8184C39.0103 15.8184 44.0402 20.8088 44.0402 26.9707V33.4755C44.0402 33.9898 43.6178 34.4088 43.0995 34.4088H33.9133"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M19.3229 6.06643C18.3342 3.09501 15.5217 0.952148 12.2004 0.952148C8.06325 0.952148 4.70361 4.27596 4.70361 8.38072C4.70361 12.4855 8.05366 15.8093 12.1908 15.8093C13.3043 15.8093 14.3602 15.5712 15.3105 15.1331"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M15.8288 16.4088C14.6865 16.0279 13.4674 15.8184 12.2004 15.8184C5.98982 15.8184 0.959961 20.8088 0.959961 26.9707V33.4755C0.959961 33.9898 1.38232 34.4088 1.90066 34.4088H11.0869"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  ></path>
                </svg>
              </div>
              <div class="content">
                <h5 class="title">
                  <span>6000</span>Members
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HomeBanner;
