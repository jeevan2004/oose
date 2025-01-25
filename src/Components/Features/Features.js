import React from "react";

import shape from "../../assets/image/shap.png";
import "./feature.css";
import NewsBox from "../NewsBox/NewsBox";
import mobile from "../../assets/image/mobile.png";

const Features = () => {
  return (
    <section
      id="features"
      className="section p-100"
      data-stellar-background-ratio="0.2"
    >
      <div className="container">
        <div className="section-header">
          <h2
            className="section-title wow fadeIn animated"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            Amazing <span>Features</span>
          </h2>

          <p
            className="section-subtitle wow fadeIn animated"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            Checkout what you can do with PG Manager™. Here are few of the
            features, download our android app or signup to find out more.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div
              className="content-left text-right text-center wow fadeInLeft animated animated"
              data-wow-offset="10"
            >
              <div className="box-item left">
                <span className="icon">
                  <i className="fa fa-building"></i>
                </span>
                <div className="text">
                  <h3 className="title">Manage PGs, Hostels and Apartments</h3>
                  <p>
                    Whether you run your PG in rooms, hostel or apartments,
                    we've got you covered
                  </p>
                </div>
              </div>
              <div className="box-item left">
                <span className="icon">
                  <i className="fa fa-users"></i>
                </span>
                <div className="text">
                  <h3 className="title">Manage Inmates</h3>
                  <p>Check In and Check Out inmates with cloud support!</p>
                </div>
              </div>
              <div className="box-item left">
                <span className="icon">
                  <i className="fa fa-user"></i>
                </span>
                <div className="text">
                  <h3 className="title">Manage Staff</h3>
                  <p>
                    Add\Remove PG staff or better, add Managers to manage your
                    PGs for you!
                  </p>
                </div>
              </div>

              <div className="box-item left">
                <span className="icon">
                  <i className="fa fa-bed"></i>
                </span>
                <div className="text">
                  <h3 className="title">Availability</h3>
                  <p>
                    Track your PG's bed availability efficiently, hassle-free
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div
              className="show-box wow fadeInDown animated animated"
              data-wow-offset="10"
            >
              <img src={mobile} width="350" height="auto" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div
              className="content-right text-left text-center wow fadeInRight animated animated"
              data-wow-offset="10"
            >
              <div className="box-item right">
                <span className="icon">
                  <i className="fas fa-chart-bar "></i>
                </span>
                <div className="text">
                  <h3 className="title">Expense Management</h3>
                  <p>
                    Add and track your PG expenses to visualize the
                    profitability and growth
                  </p>
                </div>
              </div>
              <div className="box-item right">
                <span className="icon">
                  <i class="fas fa-rupee-sign"></i>
                </span>
                <div className="text">
                  <h3 className="title">Smart Rent Collection</h3>
                  <p>
                    Collect rent on your preferred day of the month, which can
                    also be configured for each inmate/tenant
                  </p>
                </div>
              </div>

              <div className="box-item right">
                <span className="icon">
                  <i class="fas fa-file-pdf"></i>
                </span>
                <div className="text">
                  <h3 className="title">Rent Receipts</h3>
                  <p>
                    Why waste paper when you can mail rent receipts to inmates.
                    Go green!
                  </p>
                </div>
              </div>

              <div className="box-item right">
                <span className="icon">
                  <i class="fas fa-file-excel"></i>
                </span>
                <div className="text">
                  <h3 className="title">Reports</h3>
                  <p>
                    All your PG stats and data is just a click away with our
                    detailed reports
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
              <div className="box-item text-center">
                <span className="icon">
                  <i className="fa fa-address-book"></i>
                </span>
                <div className="text">
                  <p className="title">Bookings</p>
                  <p>
                    Take bed bookings for future check-ins and avoid check-in
                    conflicts
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-item text-center">
                <span className="icon">
                  <i class="fas fa-utensils"></i>
                </span>
                <div className="text">
                  <p className="title">Food Register</p>
                  <p>
                    Save food and expense with our food register which helps
                    track count of plates to be served
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-item  text-center">
                <span className="icon">
                  <i className="fa fa-info-circle"></i>
                </span>
                <div className="text">
                  <p className="title">Issue Management</p>
                  <p>
                    Manage your PG issues. Track their progress and resolve them
                    to keep your inmates happy!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
              <div className="box-item text-center">
                <span className="icon">
                  <i class="fas fa-chart-pie"></i>
                </span>
                <div className="text">
                  <p className="title">Profit/Loss Tracking</p>
                  <p>
                    Know how much your PG is making or loosing with our detailed
                    monthly and yearly profit/loss data
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-item text-center">
                <span className="icon">
                  <i className="fa fa-envelope "></i>
                </span>
                <div className="text">
                  <p className="title">SMS and WhatsApp Notifications </p>
                  <p>
                    Send SMS and WhatsApp reminders at will or configure to send
                    it on your behalf automatically
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
              <div className="box-item text-center">
                <span className="icon">
                  <i class="fas fa-ticket-alt"></i>
                </span>
                <div className="text">
                  <p className="title">Support</p>
                  <p>
                    {" "}
                    Enjoy best in className email, call and chat support on all
                    working days
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
              <div className="box-item text-center">
                <span className="icon">
                  <i className="fa fa-id-card "></i>
                </span>
                <div className="text">
                  <p className="title">Aadhaar KYC</p>
                  <p>
                    Perform Aadhaar KYC to validate tenant's Aadhaar details
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="box-item text-center">
                <span className="icon">
                  <i className="fa fa-percent "></i>
                </span>
                <div className="text">
                  <p className="title">GST Collection and Invoicing</p>
                  <p>
                    Collect GST on rent and other payments, generate GST
                    invoices to share with tenants
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
