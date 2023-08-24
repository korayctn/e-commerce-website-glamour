import React, { useState } from "react";
import "./Header.scss";
import { AiOutlineSearch, AiFillHeart } from "react-icons/ai";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export const Header = () => {
  const { itemCount } = useSelector((state) => state.carts);

  const [searchInput, setSearchInput] = useState("");
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
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
                value={searchInput}
                onChange={handleSearchInputChange}
                type="text"
                placeholder="Enter your product"
                className="searchInput"
              />
            </label>
          </div>

          <div className="searchIconContainer">
            <Link to={`/search?search=${searchInput}`}>
              <AiOutlineSearch className="searchIcon" />
            </Link>
          </div>
        </div>
        <div className="icons">
          <div to="/profile" id="profileIcon">
            <AccountCircleIcon className="icon" />
            <div id="avatarLogin">
              <Link to="/login">
                <Button fullWidth variant="outlined" endIcon={<LoginIcon />}>
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button fullWidth variant="outlined" endIcon={<LoginIcon />}>
                  Register
                </Button>
              </Link>
            </div>
          </div>

          <Link to="/cart">
            <Badge badgeContent={itemCount} color="primary">
              <ShoppingBasketIcon className="icon" />
            </Badge>
          </Link>
        </div>
      </div>
      <div className="linksContainer">
        <Link to="/">Homepage</Link>
        <Link to="/category?cat=womens-jewellery">Jewelry</Link>
        <Link to="/category?cat=womens-watches">Watches</Link>
      </div>
    </div>
  );
};
