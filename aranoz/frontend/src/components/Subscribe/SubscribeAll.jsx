import React from "react";
import "./Subscribe.scss";
const SubscribeAll = () => {
  return (
    <div className="subStart">
      <div className="container">
        <div className="row">
          <p>Join Our Newsletter</p>
          <h1>Subscribe to get Updated with new offers</h1>
          <div className="inSub">
            <input type="email" className="inSub" placeholder="Email"/>
            <button className="btn btn-danger">SUBSCRIBE NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeAll;
