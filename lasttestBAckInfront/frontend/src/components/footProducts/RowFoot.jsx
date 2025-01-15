import React from 'react'

const RowFoot = () => {
  return (
    <div className="row mb-4">
    <div className="col-md-3 col-sm-6 col-xs-12">
      <div
        className="product  "
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <img
          src="https://preview.colorlib.com/theme/shop/img/r1.jpg.webp"
          alt=""
        />
        <div
          className="product-info"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p>Black lace Heels</p>
          <p>$189.00</p>
        </div>
      </div>
    </div>
    <div className="col-md-3 col-sm-6 col-xs-12">
      {" "}
      <div
        className="product  "
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <img
          src="https://preview.colorlib.com/theme/shop/img/r2.jpg.webp"
          alt=""
        />
        <div
          className="product-info"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p>Black lace Heels</p>
          <p>$189.00</p>
        </div>
      </div>
    </div>
    <div className="col-md-3 col-sm-6 col-xs-12">
      {" "}
      <div
        className="product  "
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <img
          src="https://preview.colorlib.com/theme/shop/img/r3.jpg.webp"
          alt=""
        />
        <div
          className="product-info"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p>Black lace Heels</p>
          <p>$189.00</p>
        </div>
      </div>
    </div>
    <div className="col-md-3 col-sm-6 col-xs-12">
      {" "}
      <div
        className="product  "
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <img
          src="https://preview.colorlib.com/theme/shop/img/r4.jpg.webp"
          alt=""
        />
        <div
          className="product-info"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p>Black lace Heels</p>
          <p>$189.00</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RowFoot