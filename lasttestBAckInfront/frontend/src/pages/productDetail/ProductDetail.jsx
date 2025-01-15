import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../../redux/features/productSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);
  const findProduct = products.find((product) => product._id === id);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
     
      <div className="container">
        <div className="row mb-5 mt-5">
         <div className="d-flex justify-content-center align-items-center gap-5"> 
         <div className="">
            <img src={findProduct?.image} alt="Product Image" className="detail-img" />
          </div>
          <div className="">
            <h2>{findProduct?.name}</h2>
            <p>{findProduct?.category}</p>
            <p>Price: ${findProduct?.price}</p>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
