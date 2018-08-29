import React, { Component } from "react";
//import PropTypes from "prop-types";
//import { connect } from "react-redux";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
//import { compose } from "redux";
import { withRouter } from "react-router";

firebase.initializeApp({
  apiKey: "AIzaSyAXxW-qPfrgdjqxX4yAOeL1qiK2H9NhJBE",
  authDomain: "money-maker-movies.firebaseapp.com",
  databaseURL: "https://money-maker-movies.firebaseio.com",
  projectId: "money-maker-movies",
  storageBucket: "money-maker-movies.appspot.com",
  messagingSenderId: "571614524129",
});

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
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
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
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
}

export default withRouter(SignInPage);
