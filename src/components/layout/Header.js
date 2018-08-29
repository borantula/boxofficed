import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ title = "", checkUser }) => {
  return (
    <header className="header">
      <h1>
        <a href="/">{title}</a>
      </h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
