import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { withRouter } from "react-router";
import { auth, uiConfig } from "../../app/firebase/firebase";
import { setCurrentUser } from "../../actions/";

class UserSignInPage extends Component {
  // The component's Local state.
  state = {
    isSignedIn: false, // Local signed-in state.
    user: false,
  };

  componentDidMount() {
    this.unregisterAuthObserver = auth.onAuthStateChanged(user => {
      console.log("SIGNEDIN", user);
      this.setState({ isSignedIn: !!user, user });
      this.props.setCurrentUser(user);
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.isSignedIn) {
      console.log("here is a user");
    }
  }

  /**
   * Redirects to home if logged in or render signin if user it not loggedin
   */
  render() {
    return (
      <div>
        {this.state.isSignedIn && <Redirect to="/" />}

        {!this.state.isSignedIn && (
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
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
  connect(
    mapStateToProps,
    { setCurrentUser }
  )
)(UserSignInPage);
