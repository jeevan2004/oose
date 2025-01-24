import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import InstructorsItem from "../../Components/Instructors/InstructorsItem";

const AllInstructors = () => {
  let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <>
      <Breadcrumb name={"Instructors"} pageName={"Instructors"} />

      <div className="all_instructors p-120">
        <div className="container">
          <div className="row">
            {arr.map(() => {
              return (
                <div className="col-md-4">
                  <InstructorsItem />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllInstructors;
