import React from "react";
const style = {
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    paddingBottom:'20px',
    marginBottom:'20px'
  };

const Premium = () => {
  return (
    <div className="container">
      <div className="botInner">
        <div className="row d-flex justify-content-center" style={style}>
          <div className="col-md-2 d-flex justify-content-between mt-5 flex-wrap" >
            <div className="this">
              <img
                src="https://preview.colorlib.com/theme/shop/img/br1.png.webp"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
         
          </div>
          <div className="col-md-2 d-flex justify-content-between mt-5 flex-wrap">
            <div className="this">
              <img
                src="https://preview.colorlib.com/theme/shop/img/br2.png.webp"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
         
          </div>
          <div className="col-md-2 d-flex justify-content-between mt-5 flex-wrap">
            <div className="this">
              <img
                src="https://preview.colorlib.com/theme/shop/img/br3.png.webp"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
         
          </div>
          <div className="col-md-2 d-flex justify-content-between mt-5 flex-wrap">
            <div className="this">
              <img
                src="https://preview.colorlib.com/theme/shop/img/br4.png.webp"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
         
          </div>
          <div className="col-md-2 d-flex justify-content-between mt-5 flex-wrap">
            <div className="this">
              <img
                src="https://preview.colorlib.com/theme/shop/img/br5.png.webp"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
         
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Premium;
