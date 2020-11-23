import React, { useState } from "react";
// import TinderCard from '../react-tinder-card/index'
import TinderCard from "react-tinder-card";
import "./App.css";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const generateList = (length) => {
  let list = [];
  for (let i = 0; i < length; i++) {
    list.push(`https://cdn.porngifs.com/img/${getRandomInt(5000)}`);
  }
  return list;
};

function Simple() {
  const characters = generateList(5);
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

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
      {/* <h1>La GIFle</h1> */}
      <div className="cardContainer">
        {characters.map((url) => (
          <TinderCard
            className="swipe"
            key={url}
            onSwipe={(dir) => swiped(dir, url)}
            onCardLeftScreen={() => outOfFrame()}
          >
            <div
              style={{ backgroundImage: "url(" + url + ")" }}
              className="card"
            ></div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Simple;
