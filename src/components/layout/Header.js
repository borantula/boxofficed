import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ title = "", checkUser, routes }) => {
  return (
    <header className="header">
      <h1>
        <Link to={routes.HOME}>{title}</Link>
      </h1>

      <Link to={routes.SIGNIN}>Login</Link>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
