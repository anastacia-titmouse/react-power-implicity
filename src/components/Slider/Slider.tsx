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
      <ul className="slider__dots--wrapper">
        <li className="slider__dots"></li>
        <li className="slider__dots"></li>
        <li className="slider__dots slider__dots--active"></li>
        <li className="slider__dots"></li>
        <li className="slider__dots"></li>
      </ul>
    </div>
  );
};
