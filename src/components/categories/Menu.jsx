import React, { useState } from "react";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      style={{
        height: !isOpen ? "10vh" : "60vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        bottom: 0,
        zIndex: 0,
        backgroundColor: "blue",
        borderTopLeftRadius: "25px",
        borderTopRightRadius: "25px",
        transition: "0.5s ease-in-out",
      }}
    >
      <button onClick={() => setIsOpen(!isOpen)}>close</button>
    </div>
  );
};
