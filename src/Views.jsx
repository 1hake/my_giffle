import React, { Component } from "react";
import SwipeableViews from "react-swipeable-views";
import { Firstcard } from "./components/categories/FirstCard";
import { data } from "./components/categories/data";

const stories = [
  { url: "https://dl.phncdn.com/gif/33513882.gif" },
  { url: "https://dl.phncdn.com/gif/33513882.gif" },
  { url: "https://dl.phncdn.com/gif/33513882.gif" },
];

export const Views = () => {
  return (
    <SwipeableViews containerStyle={{ height: "90vh" }} resistance>
      <Firstcard></Firstcard>
      {stories.map((item) => {
        console.log(
          "🚀 ~ file: Views.jsx ~ line 17 ~ {data.anal.map ~ item",
          item
        );
        return (
          <div
            style={{
              height: window.screen.height - window.screen.height / 10 - 20,

              margin: "10px",
              borderRadius: "25px",
              backgroundColor: "black",
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
};
