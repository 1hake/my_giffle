import React, { useState, useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import { data } from "./data";
import up from "../../img/up.png";
import down from "../../img/down.png";
import { menuColor } from "../../constants/styles";

export const Menu = () => {
  const {
    currentCategorie,
    setCurrentCategorie,
    isOpen,
    setIsOpen,
  } = useContext(MainContext);
  const categories = Object.keys(data);
  return (
    <div
      style={{
        height: !isOpen ? "10vh" : "60vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "fixed",
        bottom: 0,
        zIndex: 0,
        backgroundColor: menuColor,
        borderTopLeftRadius: "25px",
        borderTopRightRadius: "25px",
        transition: "0.5s ease-in-out",
        boxShadow: "0px 0px 21px -2px rgba(0,0,0,0.72)",
      }}
    >
      <div onClick={() => setIsOpen(!isOpen)}>
        <img style={{ height: "40px" }} src={isOpen ? down : up}></img>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isOpen &&
          categories.map((item) => {
            const isSelected = currentCategorie === item;
            return (
              <div
                style={{
                  margin: "5px",
                  padding: "8px",
                  borderRadius: "25px",
                  height: "30px",
                  fontSize: "0.8em",
                  backgroundColor: isSelected ? "black" : "#FF6F00",
                  color: isSelected ? "white" : "black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                }}
                key={item}
                onClick={() => {
                  setCurrentCategorie(item);
                  setIsOpen(!isOpen);
                }}
              >
                {item}
              </div>
            );
          })}
      </div>
    </div>
  );
};
