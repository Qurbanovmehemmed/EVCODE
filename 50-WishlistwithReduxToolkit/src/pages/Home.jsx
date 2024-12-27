import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { getUser, updateWishlist } from "../redux/wishlistSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);
  const { user } = useSelector((state) => state.wishlist);

  const notify = (text, type) =>
    toast(text, {
      type: type,
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(getUser());
  }, [dispatch]);

  const addWishlist = (product) => {
    if (user) {
      const isInWishlist = user.wishlist.some((item) => item.id === product.id);

      if (isInWishlist) {
        dispatch(updateWishlist(product));
        notify("Product removed from wishlist", "error");
      } else {
        dispatch(updateWishlist(product));
        notify("Product added to wishlist", "success");
      }
    } else {
      notify("Please login to add to wishlist", "error");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }
  };

  return (
    <div>
      <div className="container">
        <div
          className="cards"
          style={{
            maxWidth: "84%",
            margin: "50px auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          {products.map((product) => {
            const isInWishlist = user?.wishlist.some((item) => item.id === product.id);

            return (
              <div className="mycard" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <i
                  className={`fa-heart myHeart ${isInWishlist ? "fa-solid" : "fa-regular"}`} 
                  onClick={() => addWishlist(product)} 
                />
                <div className="mycard-content">
                  <p>{product.title}</p>
                  <p>{product.category}</p>
                  <div className="mycard-footer">
                    <p>Price: ${product.price}</p>
                    <p>⭐{product.rating}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
