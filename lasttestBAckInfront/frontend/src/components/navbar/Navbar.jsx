import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
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
                  <sup>0</sup>
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
