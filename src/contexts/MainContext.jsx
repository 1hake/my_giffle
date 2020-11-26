import React, { useState, useEffect, createContext } from "react";
import { data } from "../components/categories/data";

export const MainContext = createContext();

export const MainContextProvider = (props) => {
  const [currentCategorie, setCurrentCategorie] = useState("");
  const [dataList, setDataList] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (data[currentCategorie]) {
      console.log(
        "🚀 ~ file: MainContext.jsx ~ line 12 ~ useEffect ~ data[currentCategorie]",
        data[currentCategorie]
      );
      setDataList(data[currentCategorie].slice(1, 10));
    }
  }, [currentCategorie]);

  return (
    <MainContext.Provider
      value={{
        dataList,
        currentCategorie,
        setCurrentCategorie,
        isOpen,
        setIsOpen,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};
