import React, { useState } from "react";
import Categories from "./Categories";

const Layout = ({ setList, list }) => {
  const [state, setState] = useState({
    isOpen: false,
  });

  const handleOpen = () => {
    setState({
      ...state,
      isOpen: !state.isOpen,
    });
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        height: "100vh",
        width: "100vw",
        left: 0,
        zIndex: state.isOpen ? 3 : 1,
      }}
    >
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
      <Categories isOpen={isOpen} setList={setList} />
    </div>
  );
};

export default ButtonCategories;
