import React, { useEffect } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../redux/features/productSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.basket);
  const totalAmount = products.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "10px",
          }}
        >
          <div className="logo">
            <h1>Maqa</h1>
          </div>
          <div className="listNav">
            <ul
              style={{
                display: "flex",
                gap: "25px",
              }}
            >
              <li
                style={{
                  listStyle: "none",
                }}
              >
                Home
              </li>
              <li
                style={{
                  listStyle: "none",
                }}
              >
                Contact
              </li>
              <li
                style={{
                  listStyle: "none",
                }}
              >
                About Us
              </li>
              <li
                style={{
                  listStyle: "none",
                }}
              >
                Special
              </li>
              <li
                style={{
                  listStyle: "none",
                }}
              >
                Blog
              </li>
              <li
                style={{
                  listStyle: "none",
                }}
              >
                <Link to="/basket">
                  <FaShoppingBasket />
                  <sup>{totalAmount}</sup>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
