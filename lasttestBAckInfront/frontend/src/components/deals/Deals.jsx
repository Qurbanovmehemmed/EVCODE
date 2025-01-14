import React from "react";
import Title from "../title/Title";
import "./Deals.css";

const Deals = () => {
  return (
    <div>
      <Title color="black" />
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="col-6 dealsImg">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/c1.jpg"
                  alt=""
                />
              </div>
              <div className="col-6 dealsImg ">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/c2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 dealsImg">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/c3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-3 dealsImg">
            <img
              src="https://preview.colorlib.com/theme/shop/img/c4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
