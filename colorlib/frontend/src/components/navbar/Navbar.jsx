import React from "react";
import { Link } from "react-router";
import { CiHeart } from "react-icons/ci";
import"./Navbar.scss"

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="container">
       <div className="row navStart">
       <div className="logo col-md-6">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png.webp"
              alt=""
            />
          </div>
          <div className="nav-list col-md-5">
            <ul className="d-flex justify-content-between flex-wrap">
              <li>
                <Link to="/" className="links">Home</Link>
              </li>
              <li>
                <Link to="/categori" className="links">Catagori</Link>
              </li>
              <li>
                <Link to="/latest" className="links">Latest</Link>
              </li>
              <li>
                <Link to="/blog" className="links">Blog</Link>
              </li>
              <li>
                <Link to="/pages" className="links">Pages</Link>
              </li>
              <li>
                <Link to="/contact" className="links">Contact</Link>
              </li>
              <li>
              <Link to="/wishlist" className="links"><CiHeart/></Link>
              </li>
            </ul>
          </div>
       </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
