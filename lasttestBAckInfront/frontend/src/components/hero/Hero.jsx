import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="start">
      <div className="row">
        <div className="col-6 ">
          <div className="heroImg">
            <img
              src="https://preview.colorlib.com/theme/shop/img/header-img.png.webp"
              alt=""
            />
          </div>
        </div>
        <div className="col-6">
          <div className="heroText">
            <div className="d-flex">
              <p>
                Flat{" "}
                <span
                  style={{
                    fontSize: "35px",
                  }}
                >
                  75%Off
                </span>
              </p>
            </div>
            <div>
            <p style={{
                fontSize: "80px",
            }}>
              It’s Happening <br />
              this Season!
            </p>
            </div>
            <div className="btn btn-danger heroBtn">Purchase Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
