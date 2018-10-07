import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { withRouter } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { auth, uiConfig } from "../../app/firebase";
import { setCurrentUser } from "../../actions/";

const styles = {
  filterCard: {
    display: "inline-flex",
  },
};

class UserSignInPage extends Component {
  // The component's Local state.
  state = {
    isSignedIn: false, // Local signed-in state.
    user: false,
  };

  componentDidMount() {
    this.unregisterAuthObserver = auth.onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user, user });
      if (user) {
        this.props.setCurrentUser(user);
      }
    });
  }

  /**
   * Redirects to home if logged in or render signin if user it not loggedin
   */
  render() {
    return (
      <div>
        {this.state.isSignedIn && <Redirect to="/" />}

        {!this.state.isSignedIn && (
          <Card className={this.props.classes.filterCard}>
            <CardContent>
              <div>
                <Typography>
                  Login to do cool stuff like saving movies that makes you say
                  "yeah I'll definitely watch it"
                </Typography>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }
}

UserSignInPage.propTypes = {
  //Current user object
  currentUser: PropTypes.object.isRequired,
  //Sets user in state
  setCurrentUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.currentUser,
});

export default compose(
  withRouter,
  withStyles(styles),
  connect(
    mapStateToProps,
    { setCurrentUser }
  )
)(UserSignInPage);
