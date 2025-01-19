import React from "react";
import "./Footer.scss"

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-9 foot d-flex  justify-content-between mt-5">
              <div className="footText">
                <h3>Top Products</h3>
                <p>Managed Website</p>
                <p>Manage Reputation</p>
                <p>Manage Reputation</p>
                <p>Manage Reputation</p>
              </div>

              <div className='footText'>
            <h3>Quick Links</h3>
              <p>Jobs</p>
              <p>Brand Assets</p>
              <p>Brand Assets</p>
              <p>Terms of Service</p>
            </div>

            <div className='footText'>
            <h3>Features</h3>
              <p>Jobs</p>
              <p>Brand Assets</p>
              <p>Investor Relations</p>
              <p>Terms of Service</p>
            </div>

            <div className='footText'>
            <h3>Resources</h3>
              <p>Guides</p>
              <p>Research</p>
              <p>ExpertsExperts</p>
              <p>Agencies</p>
            </div>
          </div>
            <div className="footRight col-md-3 mt-5" >
              <h2>Newsletter</h2>
              <p>Heaven fruitful doesn't over lesser in days. Appear creeping</p>
              <div className="d-flex" style={{position:"relative"}}>
                <input type="email" placeholder="Email Adress" style={{
                  backgroundColor:"#f9f9fe",
                  border:"none",
                  padding:"15px"
                }} />
                <button className="btn btn-danger" style={{
                  position:"absolute",
                  top:"8px",
                  right:"20px"
                }}>subscribe</button>
              </div>
            </div>
        </div>
        <p className="mt-5">Copyright ©2025 All rights reserved | This template is made with  by Colorlib</p>
      </div>
    </div>
  );
};

export default Footer;
