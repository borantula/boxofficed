import React, { Component } from "react";
import { Helmet } from "react-helmet";

/**
 * This HoC fetches movie genre list & possible other data from movie database
 * @param {*} WrappedComponent
 * @param {*} mapStateToProps
 * @param {*} actionCreators
 */
function withGoogleAds(WrappedComponent, mapStateToProps, actionCreators) {
  class GoogleAdsScripts extends Component {
    render() {
      return (
        <React.Fragment>
          <Helmet>
            <script
              async
              src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            />
            <script>{`
              (adsbygoogle = window.adsbygoogle || []).push({});
            `}</script>
          </Helmet>
          <WrappedComponent {...this.props} />;
        </React.Fragment>
      );
    }
  }

  return GoogleAdsScripts;
}

export default withGoogleAds;
