import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_icon"
          src="./logo.png"
          alt="Logo"
        />
      </Link>

      <div className="header_center">
        <input type="text" placeholder="search here" />
        <SearchIcon />
      </div>
      <div className="header_right">
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
