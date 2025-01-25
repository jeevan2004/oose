import React from "react";

import "./breadcrumb.css";
const Breadcrumb = ({ name, pageName }) => {
  return (
    <>
      <div className="breadcrumb_custom">
        <h1>{name}</h1>
      </div>
    </>
  );
};

export default Breadcrumb;
