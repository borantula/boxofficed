import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { auth, uiConfig } from "../../app/firebase";
import { setCurrentUser } from "../../actions/";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

class LoginButtons extends Component {
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
  render() {
    return (
      <div>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </div>
    );
  }
}

LoginButtons.propTypes = {
  //Current user object
  currentUser: PropTypes.object.isRequired,
  //Sets user in state
  setCurrentUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.currentUser,
});

export default connect(
  mapStateToProps,
  { setCurrentUser }
)(LoginButtons);
