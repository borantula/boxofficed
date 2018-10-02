import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import * as routes from "../../constants/routes";
import { shallow } from "enzyme";

const mockUser = {
  isLoggedIn: false,
};

describe("Header without user and empty bag", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(
      <Header routes={routes} savedMoviesCount={0} user={mockUser} debug />
    );

    expect(component).toMatchSnapshot();
  });
});

describe("Header without user and full bag", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(
      <Header routes={routes} savedMoviesCount={10} user={mockUser} debug />
    );
    expect(component).toMatchSnapshot();
  });
});
