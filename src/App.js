import React, { useState } from "react";
// import TinderCard from '../react-tinder-card/index'
import TinderCard from "react-tinder-card";
import "./App.css";
import ButtonCategories from "./components/categories/ButtonCategories";
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

function Simple() {
  const [list, setList] = useState(generateList(5));
  const [lastDirection, setLastDirection] = useState();
  const [state, setState] = useState({
    isOpen: false,
  });

  const handleOpen = () => {
    setState({
      ...state,
      isOpen: !state.isOpen,
    });
  };
  const swiped = (direction, nameToDelete, index) => {
    console.log("🚀 ~ file: App.js ~ line 36 ~ swiped ~ index", index);
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
                style={{ backgroundImage: "url(" + url + ")" }}
                className="card"
              ></div>
            </TinderCard>
          ))
        ) : (
          <h1>hello</h1>
        )}
        <button
          style={{
            zIndex: 0,
            bottom: 0,
            position: "absolute",
            textAlign: "center",
          }}
          onClick={handleOpen}
        >
          OPEN CATEGORIES
        </button>
      </div>
      {/* <ButtonCategories setList={setList} list={list} /> */}
      <Categories isOpen={state.isOpen} />
    </div>
  );
}

export default Simple;
