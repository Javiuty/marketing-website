import React from "react";
import "../sass/main.css";

import logo from "../images/logo.png";
// import video from "../videos/mercedes-header.mp4";

const Header = () => {
  return (
    <header className="header">
      {/* <video className="header__video" src={} autoPlay loop></video> */}
      <div className="header__menu">
        <img className="header__menu-logo" src={logo} alt="logo Vivux" />
        <nav>
          <ul className="header__menu-list">
            <li className="li header__menu-item">Home</li>
            <li className="li header__menu-item">Features</li>
            <li className="li header__menu-item">Gallery</li>
            <li className="li header__menu-item">Contact</li>
          </ul>
        </nav>
      </div>
      <div className="header__desc">
        <h1 className="header__title">Mercedes</h1>
        <p className="header__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorum
          ut deserunt officia hic quasi consectetur.
        </p>
        <button className="btn">
          See more <span>&rarr;</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
