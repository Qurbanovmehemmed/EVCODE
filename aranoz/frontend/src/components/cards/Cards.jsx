import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  addWishlist,
  deleteWishlist,
} from "../../redux/features/wishlistSlice";
import { addBasket } from "../../redux/features/basketSlice";
import { useNavigate } from "react-router";

const Cards = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [heart, setHeart] = useState(false);
  const toggle = () => {
    setHeart(!heart);
  };

  const addToWishlist = (product) => {
    dispatch(addWishlist(product));
    toggle();
    console.log(product);
  };

  const removeWishlist = (product) => {
    dispatch(deleteWishlist(product));
    toggle();
    console.log(product);
  };

  const addToBasket = () => {
    dispatch(addBasket(product));
    console.log(product);
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={product.image}
          onClick={() => navigate(`/productdetail/${product._id}`, product)}
        />
        {heart ? (
          <FaHeart
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              fontSize: "20px",
            }}
            onClick={() => removeWishlist(product)}
          />
        ) : (
          <CiHeart
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              fontSize: "20px",
            }}
            onClick={() => addToWishlist(product)}
          />
        )}
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.category}</Card.Text>
          <Card.Text>{product.price}</Card.Text>
          <Button variant="primary" onClick={() => addToBasket(product)}>
            Add to Basket
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
