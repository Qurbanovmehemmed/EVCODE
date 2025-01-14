import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop:"10px"
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
              <li style={{
                listStyle:"none"
              }}>Home</li>
              <li style={{
                listStyle:"none"
              }}>Contact</li>
              <li style={{
                listStyle:"none"
              }}>About Us</li>
              <li style={{
                listStyle:"none"
              }}>Special</li>
              <li style={{
                listStyle:"none"
              }}>Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
