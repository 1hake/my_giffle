import React from "react";
import { MainContextProvider } from "../../contexts/MainContext";
import { Views } from "./Views";
import { Menu } from "./Menu";

export const Layout = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#053f5e",
      }}
    >
      <MainContextProvider>
        <Views></Views>
        <Menu></Menu>
      </MainContextProvider>
    </div>
  );
};
