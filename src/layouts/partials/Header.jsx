import React from "react";
import { Link } from "react-router-dom";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__top">
          <figure>
            <img src="./images/logoJordan.svg" alt="logoJordan" />
          </figure>
          <ul className="header__auth">
            <li>
              <span>Help</span>
            </li>
            <li>
              <span>Join Us</span>
            </li>
            <li>
              <span>Sign In</span>
            </li>
          </ul>
        </div>
        <div className="header_main">
          <figure>
            <img src="./images/logoNike.png" alt="logoNike" />
          </figure>
          <nav>
            <ul className="header__nav">
              <li>
                <Link to="/">Men</Link>
              </li>
              <li>
                <Link to="/">Women</Link>
              </li>
              <li>
                <Link to="/">Kids</Link>
              </li>
              <li>
                <Link to="/">Customise</Link>
              </li>
              <li>
                <Link to="/">SLinkle</Link>
              </li>
              <li>
                <Link to="/">SNKRS</Link>
              </li>
            </ul>
          </nav>
          <div className="header__right">
            <div className="header__search">
              <SearchOutlinedIcon className="header__searchIcon" />
              <input type="text" placeholder="Search" />
            </div>
            <Link to="/favorite" className="header__heart">
              <FavoriteBorderOutlinedIcon />
            </Link>
            <Link to="/cart" className="header__cart">
              <ShoppingCartOutlinedIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
