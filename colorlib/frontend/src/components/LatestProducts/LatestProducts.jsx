import React, { useEffect, useState } from "react";
import "./LatestProducts.scss";
import { Card } from "react-bootstrap";
import MyCard from "../myCard/MyCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/features/productSlice";

const LatestProducts = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
      useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      <div className="container">
        <div className="row d-flex align-items-center mt-5 ">
          <div className="col-md-9">
            <h1>Latest Products</h1>
          </div>
          <div className="col-md-3">
            <ul>
              <li
                style={{
                  color: "red",
                }}
              >
                All
              </li>
              <li>New</li>
              <li>Featured</li>
              <li>Offer</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <Card />
          <div className="col-sm-12 d-flex flex-wrap justify-content-between mt-5">
            {products && products.length > 0
              ? products.map((product) => <MyCard product={product} key={product._id} />)
              : "not found"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
