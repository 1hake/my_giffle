import React, { useState, useEffect, createContext } from "react";
import { data } from "../components/categories/data";

export const MainContext = createContext();

export const MainContextProvider = (props) => {
  const [currentCategorie, setCurrentCategorie] = useState("");
  const [dataList, setDataList] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [count, setCount] = useState(1);
  const [moreLoading, setMoreLoading] = useState(false);

  const fetchMore = () => {
    setCount(count + 5);
    setDataList(data[currentCategorie].slice(count, count + 5));
    setMoreLoading(false);
  };

  useEffect(() => {
    if (data[currentCategorie]) {
      setDataList(data[currentCategorie].slice(1, 5));
    }
  }, [currentCategorie]);

  return (
    <MainContext.Provider
      value={{
        dataList,
        setDataList,
        currentCategorie,
        setCurrentCategorie,
        isOpen,
        setIsOpen,
        fetchMore,
        setMoreLoading,
        moreLoading,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};
