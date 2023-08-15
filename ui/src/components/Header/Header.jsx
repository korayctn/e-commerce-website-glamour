import React from "react";
import "./Header.scss";
import { AiOutlineSearch, AiFillHeart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector } from "react-redux";

export const Header = () => {
  const { itemCount } = useSelector((state) => state.carts);
  console.log(itemCount);
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
                <Button fullWidth variant="contained" endIcon={<LoginIcon />}>
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button fullWidth variant="contained" endIcon={<LoginIcon />}>
                  Register
                </Button>
              </Link>
            </div>
          </Link>
          <Link to="/wishlist">
            <AiFillHeart className="icon" />
          </Link>
          <Link to="/cart">
            <FiShoppingCart className="icon" />
            <span className="badge">{itemCount}</span>
          </Link>
        </div>
      </div>
      <div className="linksContainer">
        <Link to="/">Homepage</Link>
        <Link to="/products/cat=jewelry">Jewelry</Link>
        <Link to="/products/cat=bags">Parfume</Link>
        <Link to="/cat=hotoffers">HOT OFFERS</Link>
      </div>
    </div>
  );
};
