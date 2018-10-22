import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Modal from "@material-ui/core/Modal";
import { auth } from "../../app/firebase";
import LoginButtons from "../user/LoginButtons";
import "./Header.scss";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "white",
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});

const Header = ({
  title = "",
  user,
  routes,
  savedMoviesCount,
  isFetchingMovies,
  closeLoginModal,
  ui,
  classes,
}) => {
  const myBagLink = user.isLoggedIn === true ? routes.MYLIST : routes.SIGNIN;
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

            <Badge color="secondary" badgeContent={savedMoviesCount}>
              <Link className="my-list-btn" to={myBagLink}>
                <Button color="primary">My Bag</Button>
              </Link>
            </Badge>
            {user.isLoggedIn === true && (
              <Button
                color="primary"
                onClick={() =>
                  auth.signOut().then(() => window.location.reload())
                }
              >
                Logout
              </Button>
            )}
          </span>
        </Toolbar>
      </AppBar>
      {isFetchingMovies === true && <LinearProgress color="secondary" />}
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={ui.showLoginModal}
        onClose={() => closeLoginModal()}
      >
        <div className={classes.paper}>
          <Typography align="center">
            Login to do cool stuff like saving movies that makes you say "yeah
            I'll definitely watch it"
          </Typography>
          <LoginButtons />
        </div>
      </Modal>
    </div>
  );
};

Header.propTypes = {
  //Site title
  title: PropTypes.string,
  //Current user object
  user: PropTypes.object.isRequired,
  savedMoviesCount: PropTypes.number.isRequired,
  routes: PropTypes.object.isRequired,
  isFetchingMovies: PropTypes.bool.isRequired,
  ui: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
