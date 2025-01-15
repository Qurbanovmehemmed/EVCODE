import React from "react";
import "./Footer.scss";
import { GrLinkNext } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { BsBehance } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footStart">
      <div className="container ">
        <div className="row">
          <div className="col-md-3">
            <h4 c> About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua.
            </p>
          </div>
          <div className="col-md-3">
            <h4>Newsletter</h4>
            <p>Stay update with our latest</p>
            <div className="input-group">
              <input type="email" placeholder="Enter  email" />

              <div className="next">
                <GrLinkNext />{" "}
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h4>Instragram Feed</h4>
            <div className="row">
              <div className="col-md-3 footIMG">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/i1.jpg.webp"
                  alt=""
                />
              </div>
              <div className="col-md-3 footIMG">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/i2.jpg.webp"
                  alt=""
                />
              </div>
              <div className="col-md-3 footIMG">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/i3.jpg.webp"
                  alt=""
                />
              </div>
              <div className="col-md-3 footIMG">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/i4.jpg.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-3 footIMG">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/i5.jpg.webp"
                  alt=""
                />
              </div>
              <div className="col-md-3 footIMG">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/i6.jpg.webp"
                  alt=""
                />
              </div>
              <div className="col-md-3 footIMG">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/i7.jpg.webp"
                  alt=""
                />
              </div>
              <div className="col-md-3 footIMG">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/i8.jpg.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h4>Follow Us</h4>
            <p>Let us be social</p>
            <div className="d-flex">
              <div className="mr-2">
                <FaFacebookF />
              </div>
              <div className="mr-2">
                <FaTwitter />
              </div>
              <div className="mr-2">
                
                <FaGlobe />
              </div>
              <div className="mr-2">
                <BsBehance />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
