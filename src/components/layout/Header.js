import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import "./Header.css";

/*
const Header = ({ title = "", user, routes, savedMovies }) => {
  return (
    <header className="header">
      <h1>
        <Link to={routes.HOME}>{title}</Link>
      </h1>
      <div>
        {user.isLoggedIn === false && <Link to={routes.SIGNIN}>Login</Link>}
        {user.isLoggedIn === true && (
          <span>Welcome, {user.data.displayName}</span>
        )}

        <Badge
          color="primary"
          style={{ marginLeft: "10px" }}
          badgeContent={savedMovies.length}
        >
          <Link to={routes.MYLIST}>My List</Link>
        </Badge>
      </div>
    </header>
  );
};
*/

const Header = ({ title = "", user, routes, savedMovies }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <CameraIcon />
        <Typography variant="title" color="inherit" noWrap>
          <Link to={routes.HOME}>{title}</Link>
        </Typography>
        <span>
          {user.isLoggedIn === false && <Link to={routes.SIGNIN}>Login</Link>}
          {user.isLoggedIn === true && (
            <span>Welcome, {user.data.displayName}</span>
          )}
        </span>
        <Badge color="primary" badgeContent={savedMovies.length}>
          <Link to={routes.MYLIST}>My List</Link>
        </Badge>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  //Site title
  title: PropTypes.string,
  //Current user object
  user: PropTypes.object.isRequired,
  savedMovies: PropTypes.array.isRequired,
  routes: PropTypes.object.isRequired,
};

export default Header;
