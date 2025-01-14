import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/features/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
 

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
  
      {products && products.length > 0
        ? products.map((product) => (
            <div key={product._id}>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.category}</p>
            </div>
          ))
        : "not found"}
    </div>
  );
};

export default Home;
