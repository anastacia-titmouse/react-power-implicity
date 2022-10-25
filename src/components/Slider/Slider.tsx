import React from "react";
import "./slider.scss";

export const Slider = () => {
  return (
    <div className="slider">
      <h1 className="slider__title">The Power of Simplicity</h1>
      <h5 className="slider__subtitle">
        Instead of spending time searching for the right app, our AI will bring
        the right app to you.
      </h5>
      <button className="slider__button">Learn</button>
      <div className="slider__dots--wrapper">
        <div className="slider__dots"></div>
        <div className="slider__dots"></div>
        <div className="slider__dots slider__dots--active"></div>
        <div className="slider__dots"></div>
        <div className="slider__dots"></div>
      </div>
    </div>
  );
};
