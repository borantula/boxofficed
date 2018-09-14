import React, { Component } from "react";
//import PropTypes from "prop-types";
//import { connect } from "react-redux";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import "firebase/auth";
//import { compose } from "redux";
import { withRouter } from "react-router";
import { auth } from "../../app/firebase/firebase";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

class SignInPage extends Component {
  // The component's Local state.
  state = {
    isSignedIn: false, // Local signed-in state.
    user: false,
  };

  componentDidMount() {
    this.unregisterAuthObserver = auth.onAuthStateChanged(user => {
      console.log("SIGNEDIN", user);
      this.setState({ isSignedIn: !!user, user });
    });
  }
  render() {
    if (this.state.isSignedIn) {
      return (
        <div>
          <h1>Welcome, {this.state.user.displayName}</h1>
        </div>
      );
    }
    return (
      <div>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </div>
    );
  }
}

export default withRouter(SignInPage);
