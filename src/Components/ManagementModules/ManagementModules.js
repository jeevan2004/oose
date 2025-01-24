import React from "react";
import "./ManagementModules.css";
import service_bg from "../../assets/image/service_bg.png";

const ManagementModules = () => {
  return (
    <div
      className="ManagementModules py-lg-5"
      style={{ backgroundImage: `url(${service_bg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6 box">
            <h4 class="text-black mb-lg-4 mt-lg-2">
              Our PG Management Modules
            </h4>
            <p>Handles 100% of your PG operations.</p>
            <ul>
              <li>Dashboard</li>
              <li>Buildings</li>
              <li>Rooms</li>
              <li>Beds</li>
              <li>Tenants</li>
              <li>Accounts</li>
              <li>Inventory</li>
              <li>User / Staff Management</li>
              <li>Complaints</li>
              <li>Agreements</li>
              <li>Attendance / Salary Management</li>
              <li>Vehicle</li>
              <li>Notice Board</li>
              <li>Reports</li>
              <li>Notifications - send to all / by building (SMS / email)</li>
            </ul>
            <a href="" class="btn btn_secondary mt-3 mb-lg-2">
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementModules;
