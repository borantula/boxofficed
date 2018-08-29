import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ScrollToTop from "react-router-scroll-top";
import Root from "./containers/Root";
import Header from "./components/layout/Header";
import MovieDetailPage from "./containers/Movie/DetailPage";
import { boundGetGenreList } from "./actions/";
import SignInPage from "./containers/User/SignInPage";

class App extends Component {
  componentDidMount() {
    document.title = "Money Maker Movies";

    //get genre list
    //TODO: store this in local storage
    this.props.boundGetGenreList();
  }

  render() {
    return (
      <div>
        <Header title="Money Maker Movies" />
        <Router>
          <ScrollToTop>
            <Switch>
              <Route path={"/"} exact component={Root} />
              <Route path={"/movie/:movieId"} component={MovieDetailPage} />
              <Route path={"/signin"} exact component={SignInPage} />
            </Switch>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  boundGetGenreList: PropTypes.func.isRequired,
};

export default connect(
  null,
  {
    boundGetGenreList,
    // checkUser
  }
)(App);
