import React from "react";
import "./ShopCategorey.scss"

const ShopCategorey = () => {
  return (
    <div>
        <div className="row">
          <div className="startCategory">
            <h1>Shop by Category</h1>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12">
             <div className="categoryArea">
             <img
                src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat1.jpg.webp"
                alt=""
              />
              <div className="category-caption">
                <h2>Owmen`s</h2>
                <button className="btn btn-warning">Best New Deals</button>
                <p>New Collection</p>
              </div>
             </div>
            </div>
            <div className="col-md-4 col-sm-12">
             <div className="categoryArea">
             <img
                src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat2.jpg.webp"
                alt=""
              />
                <div className="category-caption">
                <p>New Collection</p>
              <h2>Man`s Cloth</h2>
                <p>New Collection</p>
              </div>
             </div>
            </div>
            <div className="col-md-4 col-sm-12">
           <div className="categoryArea">
           <img
                src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat3.jpg.webp"
                alt=""
              />
              <div className="category-caption">
              <h2>Man`s Cloth</h2>
                <button className="btn btn-warning">Best New Deals</button>
                <p>New Collection</p>
              </div>
           </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ShopCategorey;
