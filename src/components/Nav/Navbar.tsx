import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/icons/Logo.svg";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <a className="navbar__link--logo" href=" ">
        <LogoIcon />
      </a>
      <nav className="navbar__link--wrapper">
        <a className="navbar__link" href=" ">
          Features
        </a>
        <a className="navbar__link" href=" ">
          Partners
        </a>
        <a className="navbar__link" href=" ">
          Stories
        </a>
      </nav>
      <button className="navbar__button">Download for free</button>
    </div>
  );
};
