import React from "react";

import shape from "../../assets/image/shap.png";
import "./feature.css";
import NewsBox from "../NewsBox/NewsBox";
import mobile from "../../assets/image/mobile.png";

const Features = () => {
  return (
    <section id="features" class="section" data-stellar-background-ratio="0.2">
      <div class="container">
        <div class="section-header">
          <h2
            class="section-title wow fadeIn animated"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            Amazing <span>Features</span>
          </h2>

          <p
            class="section-subtitle wow fadeIn animated"
            data-wow-duration="1000ms"
            data-wow-delay="0.3s"
          >
            Checkout what you can do with PG Manager™. Here are few of the
            features, download our android app or signup to find out more.
          </p>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div
              class="content-left text-right text-center wow fadeInLeft animated animated"
              data-wow-offset="10"
            >
              <div class="box-item left">
                <span class="icon">
                  <i class="fa fa-building"></i>
                </span>
                <div class="text">
                  <h3 class="title">Manage PGs, Hostels and Apartments</h3>
                  <p>
                    Whether you run your PG in rooms, hostel or apartments,
                    we've got you covered
                  </p>
                </div>
              </div>
              <div class="box-item left">
                <span class="icon">
                  <i class="fa fa-users"></i>
                </span>
                <div class="text">
                  <h3 class="title">Manage Inmates</h3>
                  <p>Check In and Check Out inmates with cloud support!</p>
                </div>
              </div>
              <div class="box-item left">
                <span class="icon">
                  <i class="fa fa-user"></i>
                </span>
                <div class="text">
                  <h3 class="title">Manage Staff</h3>
                  <p>
                    Add\Remove PG staff or better, add Managers to manage your
                    PGs for you!
                  </p>
                </div>
              </div>

              <div class="box-item left">
                <span class="icon">
                  <i class="fa fa-bed"></i>
                </span>
                <div class="text">
                  <h3 class="title">Availability</h3>
                  <p>
                    Track your PG's bed availability efficiently, hassle-free
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div
              class="show-box wow fadeInDown animated animated"
              data-wow-offset="10"
            >
              <img src={mobile} width="350" height="auto" alt="" />
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div
              class="content-right text-left text-center wow fadeInRight animated animated"
              data-wow-offset="10"
            >
              <div class="box-item right">
                <span class="icon">
                  <i class="fa fa-bar-chart "></i>
                </span>
                <div class="text">
                  <h3 class="title">Expense Management</h3>
                  <p>
                    Add and track your PG expenses to visualize the
                    profitability and growth
                  </p>
                </div>
              </div>
              <div class="box-item right">
                <span class="icon">
                  <i class="fa fa-inr"></i>
                </span>
                <div class="text">
                  <h3 class="title">Smart Rent Collection</h3>
                  <p>
                    Collect rent on your preferred day of the month, which can
                    also be configured for each inmate/tenant
                  </p>
                </div>
              </div>

              <div class="box-item right">
                <span class="icon">
                  <i class="fa fa-file-pdf-o "></i>
                </span>
                <div class="text">
                  <h3 class="title">Rent Receipts</h3>
                  <p>
                    Why waste paper when you can mail rent receipts to inmates.
                    Go green!
                  </p>
                </div>
              </div>

              <div class="box-item right">
                <span class="icon">
                  <i class="fa fa-file-excel-o "></i>
                </span>
                <div class="text">
                  <h3 class="title">Reports</h3>
                  <p>
                    All your PG stats and data is just a click away with our
                    detailed reports
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
              <div class="box-item text-center">
                <span class="icon">
                  <i class="fa fa-address-book"></i>
                </span>
                <div class="text">
                  <p class="title">Bookings</p>
                  <p>
                    Take bed bookings for future check-ins and avoid check-in
                    conflicts
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="box-item text-center">
                <span class="icon">
                  <i class="fa fa-cutlery"></i>
                </span>
                <div class="text">
                  <p class="title">Food Register</p>
                  <p>
                    Save food and expense with our food register which helps
                    track count of plates to be served
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="box-item  text-center">
                <span class="icon">
                  <i class="fa fa-info-circle"></i>
                </span>
                <div class="text">
                  <p class="title">Issue Management</p>
                  <p>
                    Manage your PG issues. Track their progress and resolve them
                    to keep your inmates happy!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
              <div class="box-item text-center">
                <span class="icon">
                  <i class="fa fa-pie-chart "></i>
                </span>
                <div class="text">
                  <p class="title">Profit/Loss Tracking</p>
                  <p>
                    Know how much your PG is making or loosing with our detailed
                    monthly and yearly profit/loss data
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="box-item text-center">
                <span class="icon">
                  <i class="fa fa-envelope "></i>
                </span>
                <div class="text">
                  <p class="title">SMS and WhatsApp Notifications </p>
                  <p>
                    Send SMS and WhatsApp reminders at will or configure to send
                    it on your behalf automatically
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="box-item text-center">
                <span class="icon">
                  <i class="fa fa-ticket"></i>
                </span>
                <div class="text">
                  <p class="title">Support</p>
                  <p>
                    {" "}
                    Enjoy best in class email, call and chat support on all
                    working days
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
              <div class="box-item text-center">
                <span class="icon">
                  <i class="fa fa-id-card "></i>
                </span>
                <div class="text">
                  <p class="title">Aadhaar KYC</p>
                  <p>
                    Perform Aadhaar KYC to validate tenant's Aadhaar details
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div class="box-item text-center">
                <span class="icon">
                  <i class="fa fa-percent "></i>
                </span>
                <div class="text">
                  <p class="title">GST Collection and Invoicing</p>
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
