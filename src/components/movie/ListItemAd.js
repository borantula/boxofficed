import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const styles = {
  card: {
    margin: "0 1em 1em",
  },
};
class MovieListItemAd extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <Card className={this.props.classes.card}>
        <CardContent>
          <div className="movie-item">
            <ins
              style={{ display: "block" }}
              className="adsbygoogle"
              data-ad-format="fluid"
              data-ad-layout-key="-cb+h-16-4w+d9"
              data-ad-client="ca-pub-3884304734738661"
              data-ad-slot="6900254694"
            />
          </div>
        </CardContent>
      </Card>
    );
  }
}

MovieListItemAd.propTypes = {
  classes: PropTypes.object.isRequired,
};

//TODO: should not get it via connect but via props from parent
export default withStyles(styles)(MovieListItemAd);
