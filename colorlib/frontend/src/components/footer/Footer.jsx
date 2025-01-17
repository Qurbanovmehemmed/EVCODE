import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3 col-sm-12">
            <div className="footArea">
              <img
                src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png.webp"
                alt=""
              />
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="footArea">
              <h2>Quick Links</h2>
              <p>Offers & Discounts</p>
              <p>Get Coupon</p>
              <p>Contact Us</p>
              <p>Quick Links</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            {" "}
            <div className="footArea">
              <h2>Quick Links</h2>
              <p>Offers & Discounts</p>
              <p>Get Coupon</p>
              <p>Contact Us</p>
              <p>Quick Links</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            {" "}
            <div className="footArea">
              <h2>Quick Links</h2>
              <p>Offers & Discounts</p>
              <p>Get Coupon</p>
              <p>Contact Us</p>
              <p>Quick Links</p>
              <p>Offers & Discounts</p>
            </div>
          </div>
        </div>
        <div className="row  mt-4">
          <div className="col-md-9 col-sm-12">
            Copyright ©2025 All rights reserved | This template is made with{" "}
            <CiHeart color="blue" /> by{" "}
            <span
              style={{
                color: "blue",
              }}
            >
              Colorlib
            </span>
          </div>
          <div className="col-md-3 col-sm-12 d-flex gap-2" >
            <FaTwitter/>
            <FaFacebookF/>
            <FaBehance/>
            <FaGlobe/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
