import React, { useEffect } from "react";
import Cards from "../cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/features/productSlice";
import { deleteWishlist } from "../../redux/features/wishlistSlice";

const Awesome = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  console.log(products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
 
  return (
    <div>
      <div className="container">
        <div className="d-flex align-items-center gap-5 pt-5">
          <p
            style={{
              fontSize: "40px",
            }}
          >
            Awesome{" "}
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
        <div className="d-flex flex-wrap justify-content-between ">
          {products && products.length > 0
            ? products.map((product) => (
                <Cards product={product} key={product._id} />
              ))
            : "product not found"}
        </div>
      </div>
    </div>
  );
};

export default Awesome;
