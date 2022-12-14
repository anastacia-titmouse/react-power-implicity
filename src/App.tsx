import React from "react";
import { Navbar } from "./components/Nav/Navbar";
import { Slider } from "./components/Slider/Slider";
import "./app.scss";

export const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Slider />
    </div>
  );
};
