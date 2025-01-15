import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/features/productSlice";
import Title from "../title/Title";
import "./Mens.css";
import { addBasket } from "../../redux/features/basketSlice";

const Mens = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const addToBasket = (e, product) => {
    e.stopPropagation();
    console.log("added to basket");

    dispatch(addBasket(product));
    console.log(product);
  };

  return (
    <section className="menStart">
      <div className="overlay"></div>
      <div className="backImg"></div>
      <div className="card-area">
        <div className="py-2">
          <Title />
        </div>
        <div className="container d-flex flex-wrap justify-content-between">
          {products && products.length > 0
            ? products.map((product) => (
                <div key={product._id}>
                  <div className="row ">
                    <div>
                      <div>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="img-fluid"
                          style={{
                            width: "255px",
                            height: "270px",
                          }}
                        />
                      </div>
                      <div>
                        <h2>{product.name}</h2>
                        <p>${product.price}</p>
                        <div
                          className="btn btn-primary"
                          onClick={(e) => addToBasket(e,product)}
                        >
                          Add To Card
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "not found"}
        </div>
      </div>
    </section>
  );
};

export default Mens;
