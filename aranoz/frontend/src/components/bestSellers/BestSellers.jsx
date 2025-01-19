import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/features/productSlice";
import Cards from "../cards/Cards";

const BestSellers = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  console.log(products);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="d-flex mt-5 align-items-center gap-5">
            <p
              style={{
                fontSize: "40px",
              }}
            >
              Best Sellers{" "}
            </p>
            <p
              style={{
                opacity: "0.7",
                fontSize: "18px",
              }}
            >
              Shop
            </p>
          </div>

          <div
            className="d-flex flex-wrap justify-content-between "
            style={{
              width: "80%",
              margin: "0 auto",
            }}
          >
            {products && products.length > 0
              ? products
                  .slice(0, 3)
                  .map((product) => (
                    <Cards product={product} key={product._id} />
                  ))
              : "product not found"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
