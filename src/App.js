import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "recompose";
import PropTypes from "prop-types";
import ScrollToTop from "react-router-scroll-top";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import * as colors from "@material-ui/core/colors";
import HomePage from "./containers/HomePage";
import Header from "./components/layout/Header";
import MovieDetailPage from "./containers/Movie/DetailPage";
import UserSignInPage from "./containers/User/SignInPage";
import MyListPage from "./containers/User/MyListPage";
import * as routes from "./constants/routes";
import {
  withAuthentication,
  withSavedListConnection,
  // withGoogleAds,
} from "./components/hoc/";

//TODO move theme to HoC
const theme = createMuiTheme({
  palette: {
    primary: colors.purple,
    secondary: colors.indigo,
  },
});

class App extends Component {
  componentDidMount() {
    document.title =
      "Box Officed! | Movies ranked by their revenues, because masses cannot be wrong, right?";
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <MuiThemeProvider theme={theme}>
            <CssBaseline>
              <Header
                title="Box Officed!"
                routes={routes}
                user={this.props.user}
                savedMovies={this.props.savedMovies}
              />
              <div className="site-content">
                <ScrollToTop>
                  <Switch>
                    <Route path={routes.HOME} exact component={HomePage} />
                    <Route path={routes.MOVIE} component={MovieDetailPage} />
                    <Route
                      path={routes.SIGNIN}
                      exact
                      component={UserSignInPage}
                    />
                    <Route path={routes.MYLIST} exact component={MyListPage} />
                  </Switch>
                </ScrollToTop>
              </div>
            </CssBaseline>
          </MuiThemeProvider>
        </React.Fragment>
      </Router>
    );
  }
}

App.propTypes = {
  //current user object
  user: PropTypes.object.isRequired,
  savedMovies: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  user: state.currentUser,
  savedMovies: state.savedMovies,
});

const ComposedApp = compose(
  // withInitialRemoteAppData,
  withSavedListConnection,
  withAuthentication
  //withGoogleAds
)(App);

export default connect(mapStateToProps)(ComposedApp);
