import React from "react";

const Title = ({ color }) => {
  const style = {
    color: color,
  };
  return (
    <div
      style={{
        color: color,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        textAlign: "center",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <h2>Shop for Different Categories</h2>
      <p>Who are in extremely love with eco friendly system</p>
    </div>
  );
};

export default Title;
