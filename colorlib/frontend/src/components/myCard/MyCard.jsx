import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaRegStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/features/productSlice";
import { addWislist, deleteWislist } from "../../redux/features/wishlistSlice";
const MyCard = ({ product }) => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [heart, setHeart] = useState(false);
  const toggle = () => {
    setHeart(!heart);
  };

  const addToWishlist = (e, product) => {
    e.stopPropagation();
    dispatch(addWislist(product));
    console.log(product._id)
  };

  const deleteToWislist = (e, product) => {
    e.stopPropagation();
    dispatch(deleteWislist(product));
  };

  return (
      <Card
              style={{
                width: "22rem",
                border: "none",
                marginBottom: "20px",
              }}
              key={product._id}
            >
              <Card.Img variant="top" src={product.image} />
              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  textAlign: "center",
                }}
              >
                <div>
                  <FaRegStar
                    style={{
                      color: "#ffbc07",
                      marginRight: "5px",
                    }}
                  />
                  <FaRegStar
                    style={{
                      color: "#ffbc07",
                      marginRight: "5px",
                    }}
                  />
                  <FaRegStar
                    style={{
                      color: "#ffbc07",
                      marginRight: "5px",
                    }}
                  />
                  <FaRegStar
                    style={{
                      marginRight: "5px",
                    }}
                  />
                  <FaRegStar
                    style={{
                      marginRight: "5px",
                    }}
                  />
                </div>
                <Card.Title>{product.name}</Card.Title>

                {heart ? (
                  <i
                    className="fa-solid fa-heart"
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      color: "red",
                    }}
                    onClick={(e) => {
                      toggle(), deleteToWislist(e, product);
                    }}
                  ></i>
                ) : (
                  <i
                    className="fa-regular fa-heart"
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                    }}
                    onClick={(e) => {
                      toggle(),  addToWishlist(e, product);
                    }}
                  ></i>
                )}
                <button className="btn btn-primary">Add To Card</button>
              </Card.Body>
            </Card>
  );
};

export default MyCard;
