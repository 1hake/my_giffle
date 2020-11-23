import React from "react";

export const Card = ({ title }) => {
  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      {title && title}
    </div>
  );
};
