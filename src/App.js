import React, { useState } from "react";
// import TinderCard from '../react-tinder-card/index'
import TinderCard from "react-tinder-card";
import "./App.css";
import ButtonCategories from "./components/categories/Layout";
import Categories from "./components/categories/Categories";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const generateList = (length) => {
  let list = [];
  for (let i = 0; i < length; i++) {
    list.push(`https://cdn.porngifs.com/img/${getRandomInt(5000)}`);
  }
  console.log("🚀 ~ file: App.js ~ line 12 ~ generateList ~ list", list);
  return list;
};

export const CardBoard = () => {
  const [list, setList] = useState(generateList(5));
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete, index) => {
    if (index === 0) {
      setList(generateList(10));
    }
  };

  const outOfFrame = (url) => {};

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <div className="cardContainer">
        {list ? (
          list.map((url, index) => (
            <TinderCard
              className="swipe"
              key={index + url}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, url, index)}
              onCardLeftScreen={() => outOfFrame(url)}
            >
              <div
                // style={{ backgroundImage: "url(" + url + ")" }}
                className="card"
              ></div>
            </TinderCard>
          ))
        ) : (
          <h1>hello</h1>
        )}
      </div>
    </div>
  );
};

export default Simple;
