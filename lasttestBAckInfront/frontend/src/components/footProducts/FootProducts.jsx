import React from "react";
import Title from "../title/Title";
import RowFoot from "./RowFoot";

const FootProducts = () => {
  return (
    <div>
      <Title />
      <div className="container"    >
        <RowFoot /> 
        <RowFoot />
        <RowFoot />
      </div>
    </div>
  );
};

export default FootProducts;
