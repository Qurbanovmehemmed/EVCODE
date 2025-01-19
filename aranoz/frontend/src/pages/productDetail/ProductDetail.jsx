import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchProducts } from "../../redux/features/productSlice";
import { addBasket } from "../../redux/features/basketSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  console.log(products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const findProducts = products.find((item) => item._id === id);
  console.log(findProducts);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>
              <img src={findProducts?.image} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <p>{findProducts?.name}</p>
            <p>{findProducts?.price}</p>
            <p>{findProducts?.category}</p>
            <button
              className="btn btn-outline-primary"
              onClick={() => dispatch(addBasket(findProducts))}
            >
              Add to Pidris
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
