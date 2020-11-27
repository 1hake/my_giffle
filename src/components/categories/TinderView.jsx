import React, { useContext, useState } from "react";
// import TinderCard from '../react-tinder-card/index'
import TinderCard from "react-tinder-card";
import { MainContext } from "../../contexts/MainContext";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "../../App.css";
import { backgroundColor, cardColor } from "../../constants/styles";

export const TinderView = () => {
  const {
    dataList,
    isOpen,
    fetchMore,
    moreLoading,
    setMoreLoading,
  } = useContext(MainContext);
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete, index) => {
    console.log("🚀 ~ file: App.js ~ line 36 ~ swiped ~ index", index);
    if (index === 0) {
      setMoreLoading(true);
      fetchMore();
    }
  };

  const outOfFrame = (url) => {};

  if (isOpen) return null;
  else {
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
          {!moreLoading &&
            dataList &&
            dataList.map((item, index) => (
              <TinderCard
                className="swipe"
                key={index + item.url}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, item.url, index)}
                onCardLeftScreen={() => outOfFrame(item.url)}
              >
                <div style={{ backgroundColor: cardColor }} className="card">
                  <LazyLoadImage
                    alt={item.url}
                    src={item.url} // use normal <img> attributes as props
                    width={"100%"}
                  />
                </div>
              </TinderCard>
            ))}
        </div>
      </div>
    );
  }
};
