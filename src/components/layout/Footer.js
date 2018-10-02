import React from "react";
import Typography from "@material-ui/core/Typography";

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
          {" "}
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
        </span>
      </Typography>
    </footer>
  );
};
