import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="container">
     <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
     }}>
     <div className="logo">
          <h1>Maqa</h1>
        </div>
        <div className="listNav">
          <ul
            style={{
              display: "flex",
              gap: "5px",
            }}
          >
            <li>Home</li>
            <li>Contact</li>
            <li>About Us</li>
            <li>Special</li>
            <li>Blog</li>
          </ul>
        </div>
     </div>
      </div>
    </div>
  );
};

export default Navbar;
