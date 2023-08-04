import React from "react";
import { Link } from "react-router-dom";
import logo from "..Logo.svg";
import CircleDown from "../CaretCircleDown.svg";
import { Ai } from "react-icons/Ai";
function Header() {
  return (
    <header className="Header">
      <Link to="/">
        <img src={logo} alt="Home" />
      </Link>
      <div className="boxInput">
        <input
          type="text"
          className="input_search"
          placeholder="Search for artworks, collections, artists etc"
        />
      </div>
      <div className="categoryBox">
        <div className="category_item">
          <p className="category_item-desc">
            Home <AiOutlineDown />
          </p>
          <img src={CircleDown} alt="down" />
        </div>
        <div className="category_item">
          <p className="category_item-desc">Explore</p>
          <img src={CircleDown} alt="down" />
        </div>
        <div className="category_item">
          <p className="category_item-desc">Community</p>
          <img src={CircleDown} alt="down" />
        </div>
      </div>
      <button className="btn btn_connect">Connect</button>
    </header>
  );
}

export default Header;
