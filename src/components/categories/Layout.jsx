import React from "react";
import { MainContextProvider } from "../../contexts/MainContext";
import { Views } from "./Views";
import { Menu } from "./Menu";
import { TinderView } from "./TinderView";
import { backgroundColor } from "../../constants/styles";

export const Layout = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: backgroundColor,
      }}
    >
      <MainContextProvider>
        {/* <Views></Views> */}
        <TinderView></TinderView>
        <Menu></Menu>
      </MainContextProvider>
    </div>
  );
};
