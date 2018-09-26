import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./Header.css";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "white",
  },
};

const Header = ({ title = "", user, routes, savedMovies, classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <Typography variant="title" noWrap className={classes.grow}>
            <Link className="site-title" to={routes.HOME}>
              {title}
            </Link>
          </Typography>
          <span>
            {user.isLoggedIn === false && (
              <Link className="my-list-btn" to={routes.SIGNIN}>
                <Button color="primary">Login</Button>
              </Link>
            )}
            {user.isLoggedIn === true && (
              <Badge color="secondary" badgeContent={savedMovies.length}>
                <Link className="my-list-btn" to={routes.MYLIST}>
                  <Button color="primary">My List</Button>
                </Link>
              </Badge>
            )}
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  //Site title
  title: PropTypes.string,
  //Current user object
  user: PropTypes.object.isRequired,
  savedMovies: PropTypes.array.isRequired,
  routes: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
