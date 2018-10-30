import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import * as routes from "../../constants/routes";

export default () => {
  return (
    <footer className="site-footer">
      <Typography
        variant="title"
        align="center"
        gutterBottom
        className="font-title"
      >
        Box Officed!
      </Typography>
      <Typography
        variant="subheading"
        align="center"
        color="textSecondary"
        component="p"
      >
        <span>
          Built by{" "}
          <a className="footer-links" href="https://twitter.com/borantula">
            Bora Yalcin
          </a>
          , codes at{" "}
          <a
            className="footer-links"
            href="https://github.com/borantula/money-maker-movies"
          >
            {" "}
            Github
          </a>
          . Uses{" "}
          <a
            href="https://www.themoviedb.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Movie DB
          </a>{" "}
          API for movie data. <br /> Click here for{" "}
          <Link to={routes.PRIVACY_POLICY}>Privacy Policy</Link> in case you're
          curious.
        </span>
      </Typography>
    </footer>
  );
};
