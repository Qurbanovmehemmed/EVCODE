import React from "react";
import { Link } from "react-router";
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import "./Navbar.scss";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { basket } = useSelector((state) => state.basket);
  const totalAmount = basket.reduce((sum, product) => sum + product.count, 0);
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="navStart">
            <div className="logo">
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/logo.png"
                alt=""
              />
            </div>
            <div className="list">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/pages">Pages</Link>
                </li>
                <li>
                  <Link to="blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/admin">Admin panel</Link>
                </li>
              </ul>
            </div>
            <div className="basketWishlist">
              <div>
                <Link to="/wishlist">
                  <CiHeart />
                </Link>
              </div>
              <div>
                <Link to="/basket">
                  <FaCartPlus />
                  <sup>{totalAmount}</sup>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
