import React, { Component } from "react";
import { connect } from "react-redux";
import {
  boundFetchSavedList,
  boundUpdateSavedList,
} from "../../actions/saved-list-actions";

/**
 * This HoC checks for a user session on initial page load
 * @param {*} WrappedComponent
 * @param {*} mapStateToProps
 * @param {*} actionCreators
 */
function withSavedListConnection(
  WrappedComponent,
  mapStateToProps,
  actionCreators
) {
  class SavedListConnection extends Component {
    constructor(props) {
      super(props);
      // Don't call this.setState() here!
      this.state = { initiallyFetchedFromApi: false };
    }

    componentDidUpdate(prevProps) {
      this.checkUserChange(prevProps);
      this.checkSavedListChange(prevProps);
    }

    checkUserChange(prevProps) {
      if (
        this.props.user.isLoggedIn === true &&
        prevProps.user.isLoggedIn === false
      ) {
        //wow now user is logged in!!

        this.props.fetchSavedList(this.props.user.data);
      }
    }

    checkSavedListChange(prevProps) {
      if (this.props.savedMovies.length !== prevProps.savedMovies.length) {
        this.props.updateSavedList(this.props.user, this.props.savedMovies);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return connect(
    (state, ownProps) => ({
      savedMovies: state.savedMovies,
      user: state.currentUser,
    }),
    {
      fetchSavedList: boundFetchSavedList,
      updateSavedList: boundUpdateSavedList,
    }
  )(SavedListConnection);
}

export default withSavedListConnection;
