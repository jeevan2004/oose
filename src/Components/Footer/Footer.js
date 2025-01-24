import React from "react";
import logo from "../../assets/image/logo.png";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="container">
          <div className="default-padding">
            <div className="row gy-5">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer_about wow animate__animated animate__fadeInLeft">
                  {/* <img src={logo} alt="" /> */}
                  <span className="logo">OOSA</span>
                  {/* <p className="">
                    We offer a wide range of courses in various subjects, from
                    business and technology to art and personal development
                  </p> */}
                  <p>
                    OOSA is the all-in-one platform that gives an elite service
                    to manage and administer your PGs and Hostels.
                  </p>
                  <p>
                    235, BINNAMANGALA, 2nd Floor, 13th Cross Road, Indira Nagar
                    2nd Stage, Bengaluru - 560038
                  </p>
                  <p>Call:+91 7899916434</p>
                  <p>Email:info@oosaservices.com</p>
                </div>
              </div>
              {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="footer_link wow animate__animated animate__fadeInUp">
                  <h4>Product</h4>
                  <ul>
                    <li>
                     
                      <Link to={"#"}>FAQ'S</Link>
                    </li>
                    <li>
                      <Link to={"#"}>How it Works</Link>
                    </li>
                    <li>
                      <a href="">List Your Property</a>
                    </li>
                    <li>
                      <Link to={"#"}>Zo-Tales</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Amenities</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Testimonials</Link>
                    </li>
                   
                  </ul>
                </div>
              </div> */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="footer_link wow animate__animated animate__fadeInUp">
                  <h4>Links</h4>
                  <ul>
                    <li>
                      <Link to={"#"}>About Us</Link>
                    </li>

                    <li>
                      <Link to={"privacy_policy"}>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to={"termsofuse"}>T & C</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer_address wow animate__animated animate__fadeInUp">
                  <h4>Contacts</h4>
                  <ul>
                    <li>
                      <i></i>
                      <p>Bengaluru Karnataka 560038</p>
                    </li>
                    <li>
                      <i></i>
                      <p>support@oosaservices.com</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer_bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 wow animate__animated animate__fadeInLeft">
              <p className="text-center">
                Copyright 2025 OOSA ServiceS Private Limited. All Rights
                Reserved
              </p>
            </div>
            {/* <div className="col-md-6 wow animate__animated animate__fadeInRight">
              <ul>
                <li>
                  <Link to={"/privacy-policy"}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to={"/terms-conditions"}>Terms & Conditions</Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
