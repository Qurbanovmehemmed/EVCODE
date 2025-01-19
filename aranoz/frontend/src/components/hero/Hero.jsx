import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="heroStart">
      <div className="container">
        <div className="row pt-5 pb-5" >
          <div className="col-md-4 col-sm-12">
            <div  className="d-flex flex-column  justify-content-between">
              <h2>
                Cloth & <br /> Wood Sofa
              </h2>
              <p>Incididunt ut labore et dolore magna aliqua quis ipsum
              suspendisse ultrices gravida. Risus commodo viverra</p>
              <button className="btn btn-danger">Buy Now</button>
            </div>
          </div>
          <div className="col-md-8 col-sm-12">
            <div className="d-flex flex-column  justify-content-between">
              <img
                src="	https://preview.colorlib.com/theme/aranoz/img/banner_img.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
