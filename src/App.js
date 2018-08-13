import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import Root from "./containers/Root";
import Header from "./components/layout/Header";
import MovieDetailPage from "./containers/Movie/DetailPage";
import { boundGetGenreList } from "./actions/";

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
          <Switch>
            <Route path={"/"} exact component={Root} />
            <Route path={"/movie/:movieId"} component={MovieDetailPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(
  null,
  { boundGetGenreList }
)(App);
