import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "../../app/firebase";
import { setCurrentUser } from "../../actions/";

/**
 * This HoC checks for a user session on initial page load
 * @param {*} WrappedComponent
 * @param {*} mapStateToProps
 * @param {*} actionCreators
 */
function withAuthentication(WrappedComponent, mapStateToProps, actionCreators) {
  class Authentication extends Component {
    componentDidMount() {
      auth.onAuthStateChanged(user => {
        if (user) {
          this.props.setCurrentUser(user);
        }
      });
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return connect(
    null,
    { setCurrentUser }
  )(Authentication);
}

export default withAuthentication;
