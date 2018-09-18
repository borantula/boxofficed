import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ title = "", user, routes, savedMovies }) => {
  return (
    <header className="header">
      <h1>
        <Link to={routes.HOME}>{title}</Link>
      </h1>
      {user.isLoggedIn === false && <Link to={routes.SIGNIN}>Login</Link>}
      {user.isLoggedIn === true && <div>Welcome, {user.data.displayName}</div>}
      <span>
        My List(
        {savedMovies.length})
      </span>
    </header>
  );
};

Header.propTypes = {
  //Site title
  title: PropTypes.string,
  //Current user object
  user: PropTypes.object.isRequired,
  savedMovies: PropTypes.array.isRequired,
};

export default Header;
