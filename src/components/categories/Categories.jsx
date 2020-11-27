import Axios from "axios";
import React, { useEffect, useState } from "react";
import "../../App.css";

const Categories = ({ isOpen }) => {
  const [state, setState] = useState({
    categories: [],
  });
  const [selectedCategorie, setSelectedCategorie] = useState({
    name: "",
    permalink: "",
  });

  useEffect(() => {
    if (state.categories?.length === 0) {
      (async () => {
        const { data } = await Axios.get(
          `https://api.gifsauce.com/api/categories/list`
        );
        if (data) {
          setState({
            categories: data.arraycategories,
          });
        }
      })();
    }
  }, [state]);

  const handleSelectCategory = async (value) => {
    const { data } = await Axios.get(
      `https://api.gifsauce.com/api/gifs/list?q=${value}`
    );
  };
  return (
    <div
      id={`left-panel`}
      className={`${isOpen ? "show" : ""}`}
      style={{
        position: "absolute",
        zIndex: -2,
        backgroundColor: "#FF6F00",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        borderBottomRightRadius: "25px",
        borderBottomLeftRadius: "25px",
        flexWrap: "wrap",
        transition: "0.5s ease-in-out",
      }}
    >
      {state?.categories?.map((category, i) => (
        <div
          style={{
            margin: "5px",
            padding: "8px",
            borderRadius: "25px",
            height: "30px",
            fontSize: "0.8em",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
          }}
          key={i}
          onClick={() => handleSelectCategory(category.permalink)}
        >
          {category?.nom}
        </div>
      ))}
    </div>
  );
};

export default Categories;
