import React from "react";
import "./Header.scss";
import { AiOutlineSearch, AiFillHeart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="firstContainer">
        <Link to="/" className="logo">
          glamour
        </Link>
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
            <Link to="/">
              <AiOutlineSearch className="searchIcon" />
            </Link>
          </div>
        </div>
        <div className="icons">
          <Link to="/profile" id="profileIcon">
            <BsFillPersonFill className="icon" />
            <div id="avatarLogin">
              <Link to="/login">
                <button>Login</button>
              </Link>
              <Link to="/signup">
                <button>SignUp</button>
              </Link>
            </div>
          </Link>
          <Link to="/wishlist">
            <AiFillHeart className="icon" />
          </Link>
          <Link to="/card">
            <FiShoppingCart className="icon" />
          </Link>
        </div>
      </div>
      <div className="linksContainer">
        <Link to="/">Homepage</Link>
        <Link to="/cat=jewelry">Jewelry</Link>
        <Link to="/cat=parfume">Parfume</Link>
        <Link to="/cat=hotoffers">HOT OFFERS</Link>
      </div>
    </div>
  );
};
