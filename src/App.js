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
import UserSignInPage from "./containers/User/SignInPage";
import * as routes from "./constants/routes";

class App extends Component {
  componentDidMount() {
    document.title = "Money Maker Movies";

    //get genre list
    //TODO: store this in local storage
    this.props.boundGetGenreList();
  }

  render() {
    return (
      <Router>
        <div>
          <Header
            title="Money Maker Movies"
            routes={routes}
            user={this.props.user}
          />

          <ScrollToTop>
            <Switch>
              <Route path={routes.HOME} exact component={Root} />
              <Route path={routes.MOVIE} component={MovieDetailPage} />
              <Route path={routes.SIGNIN} exact component={UserSignInPage} />
            </Switch>
          </ScrollToTop>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  boundGetGenreList: PropTypes.func.isRequired,
  //current user object
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  user: state.currentUser,
});

export default connect(
  mapStateToProps,
  {
    boundGetGenreList,
  }
)(App);
