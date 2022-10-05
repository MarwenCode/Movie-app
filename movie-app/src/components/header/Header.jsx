import React from "react";
import { Link } from "react-router-dom";
// import userPic from
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img src="./images/user.png" alt="user" />
      </div>
    </div>
  );
};

export default Header;