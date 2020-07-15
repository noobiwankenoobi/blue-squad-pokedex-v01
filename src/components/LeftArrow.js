import React from "react";
import axios from "axios";

function LeftArrow(props) {
  const { id } = props;

  return (
    <button className="arrow-btn">
      <i className="fa fa-angle-double-left"></i>
    </button>
  );
}

export default LeftArrow;
