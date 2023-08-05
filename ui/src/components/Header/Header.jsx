import React from "react";
import "./Header.scss";
import { AiOutlineSearch, AiFillHeart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

export const Header = () => {
  return (
    <div className="header">
      <div className="firstContainer">
        <a href="#" className="logo">
          glamour
        </a>
        <div className="search">
          <div className="searchInputContainer">
            <label>
              <input
                type="text"
                placeholder="Enter your product"
                className="searchInput"
              />
            </label>
          </div>

          <div className="searchIconContainer">
            <a href="#">
              <AiOutlineSearch className="searchIcon" />
            </a>
          </div>
        </div>
        <div className="icons">
          <a href="" id="profileIcon">
            <BsFillPersonFill className="icon" />
            <div id="avatarLogin">
              <button>Login</button>
              <button>SignUp</button>
            </div>
          </a>
          <a href="">
            <AiFillHeart className="icon" />
          </a>
          <a href="">
            <FiShoppingCart className="icon" />
          </a>
        </div>
      </div>
      <div className="linksContainer">
        <a href="#">Homepage</a>
        <a href="#">Jewelry</a>
        <a href="#">Parfume</a>
        <a href="#">HOT OFFERS</a>
      </div>
    </div>
  );
};
