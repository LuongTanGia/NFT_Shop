import React from "react";
import "../style/Pages/HomePage.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.svg";
import exploImg from "../assets/images/Ellipse 9.svg";
import leftImg from "../assets/images/Group 18.svg";
import centerImg_top from "../assets/images/image 15.svg";
import centerImg_bottom from "../assets/images/image 14.svg";
import rightImg from "../assets/images/image_16.svg";
import { AiOutlineDown } from "react-icons/Ai";

function HomePage() {
  return (
    <>
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
            <p className="category_item-desc">Home</p>
            <p className="category_item-icon">
              <AiOutlineDown />
            </p>
          </div>
          <div className="category_item">
            <p className="category_item-desc">Explore</p>
            <p className="category_item-icon">
              <AiOutlineDown />
            </p>
          </div>
          <div className="category_item">
            <p className="category_item-desc">Community</p>
            <p className="category_item-icon">
              <AiOutlineDown />
            </p>
          </div>
        </div>
        <button className="btn btn_connect">Connect</button>
      </header>
      <hr className="line_header" />
      <main>
        <div className="discover_showcase">
          <div className="discover_showcase-left">
            <p className="discover_showcase-title">Discover & Showcase</p>
            <h1 className="discover_showcase-name">
              Your Favorite Crypto Art.
            </h1>
            <p className="discover_showcase-desc">
              A seamless NFT creation experience, from generation to mint in a
              few easy steps.
            </p>
            <div className="discover_showcase-bottom">
              <button className="btn btn_explore">Let's Explore</button>
              <img src={exploImg} alt="" />
            </div>
          </div>
          <div className="discover_showcase-right">
            <div className="leftImg">
              <img src={leftImg} alt="" />
            </div>
            <div className="center_img">
              <img src={centerImg_top} alt="" />
              <img src={centerImg_bottom} alt="" />
            </div>
            <div className="rightImg">
              <img src={rightImg} alt="" className="rightImg" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
