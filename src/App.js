import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ScrollToTop from "react-router-scroll-top";
import CssBaseline from "@material-ui/core/CssBaseline";
import Root from "./containers/Root";
import Header from "./components/layout/Header";
import MovieDetailPage from "./containers/Movie/DetailPage";
import UserSignInPage from "./containers/User/SignInPage";
import { boundGetGenreList } from "./actions/";
import MyListPage from "./containers/User/MyListPage";
import * as routes from "./constants/routes";
import withAuthentication from "./components/hoc/withAuthentication";

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
        <React.Fragment>
          <CssBaseline>
            <Header
              title="Money Maker Movies"
              routes={routes}
              user={this.props.user}
              savedMovies={this.props.savedMovies}
            />

            <ScrollToTop>
              <Switch>
                <Route path={routes.HOME} exact component={Root} />
                <Route path={routes.MOVIE} component={MovieDetailPage} />
                <Route path={routes.SIGNIN} exact component={UserSignInPage} />
                <Route path={routes.MYLIST} exact component={MyListPage} />
              </Switch>
            </ScrollToTop>
          </CssBaseline>
        </React.Fragment>
      </Router>
    );
  }
}

App.propTypes = {
  boundGetGenreList: PropTypes.func.isRequired,
  //current user object
  user: PropTypes.object.isRequired,
  savedMovies: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  user: state.currentUser,
  savedMovies: state.savedMovies,
});

export default connect(
  mapStateToProps,
  { boundGetGenreList }
)(withAuthentication(App));
