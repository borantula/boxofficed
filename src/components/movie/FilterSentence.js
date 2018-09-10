import React, { Component } from "react";
import PropTypes from "prop-types";

export class FilterSentence extends Component {
  static propTypes = {
    year: PropTypes.number.isRequired,
    genre: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    const year = this.props.year;
    const genreName = !this.props.genre
      ? ""
      : this.props.genres.find(genre => genre.id === this.props.genre).name;

    const genreText = genreName
      ? `from <strong>${genreName.toLowerCase()}</strong> genre`
      : " from all genres";

    const thisYear = new Date().getFullYear();

    const yearTexts = {
      2010: "2010's",
      2000: "2000's",
      1990: "1990's",
      1980: "1980's",
      1970: "1970's",
      1960: "1960's",
      1950: "1950's",
    };
    yearTexts[thisYear] = "this year";
    yearTexts[thisYear - 1] = "since beginning of last year";
    yearTexts[thisYear - 5] = "last 5 years";

    const text = `You are viewing movies from <strong>${
      yearTexts[year]
    }</strong> ${genreText}`;
    const innerText = { __html: text };

    return <div dangerouslySetInnerHTML={innerText} />;
  }
}

export default FilterSentence;
