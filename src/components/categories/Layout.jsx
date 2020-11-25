import React from "react";
import { Views } from "../../Views";
import { Menu } from "./Menu";

export const Layout = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <Views></Views>
      <Menu></Menu>
    </div>
  );
};
