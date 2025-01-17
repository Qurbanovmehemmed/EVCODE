import React from "react";
import "./News.scss";

const News = () => {
  return (
    <div>
      <section className="backBlue">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="latestOffers">
              <h2>Get Our <br /> Latest Offers News</h2>
              <p>Subscribe news latter</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12" style={{
              height:"400px",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              
            }}>
              <div className="inputArea">
              <input type="email" required placeholder="Your email here" className="emailArea" />
              <button className="btn btn-primary shopNow">Shop Now</button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
