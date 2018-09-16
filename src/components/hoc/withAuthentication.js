import React, { Component } from "react";
import { auth, uiConfig } from "../../app/firebase/firebase";
import { setCurrentUser } from "../../actions/";

function withAuthentication(WrappedComponent) {
  class Authentication extends Component {
    componentDidMount() {
      auth.onAuthStateChanged(user => {
        console.log("SIGNEDIN", user);
        this.setState({ isSignedIn: !!user, user });
        this.props.setCurrentUser(user);
      });
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return Authentication;
}

export default withAuthentication;
