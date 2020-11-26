import React, { Component, useContext, useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { Firstcard } from "./FirstCard";
import { data } from "./data";
import { MainContext } from "../../contexts/MainContext";

export const Views = () => {
  const { dataList, isOpen } = useContext(MainContext);

  if (isOpen) return null;
  else {
    return (
      <SwipeableViews
        hysteresis="0.2"
        containerStyle={{ height: "90vh" }}
        resistance
      >
        {/* <Firstcard></Firstcard> */}
        {dataList.map((item) => {
          console.log(
            "🚀 ~ file: Views.jsx ~ line 17 ~ {data.anal.map ~ item",
            item
          );
          return (
            <div
              style={{
                height: window.screen.height - window.screen.height / 10 - 20,
                boxShadow: "0px 0px 15px -2px rgba(0,0,0,0.72)",

                margin: "10px",
                borderRadius: "25px",
                backgroundColor: "#022c43",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: "url(" + item.url + ")",
              }}
            ></div>
          );
        })}
      </SwipeableViews>
    );
  }
};
