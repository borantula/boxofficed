import React, { Component } from "react";
import { connect } from "react-redux";
import { boundGetGenreList } from "../../actions";

/**
 * This HoC fetches movie genre list & possible other data from movie database
 * @param {*} WrappedComponent
 * @param {*} mapStateToProps
 * @param {*} actionCreators
 */
function withInitialRemoteAppData(
  WrappedComponent,
  mapStateToProps,
  actionCreators
) {
  class InitialRemoteAppData extends Component {
    componentDidMount() {
      this.props.getGenreList();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return connect(
    null,
    //dispatchToProps
    { getGenreList: boundGetGenreList }
  )(InitialRemoteAppData);
}

export default withInitialRemoteAppData;
