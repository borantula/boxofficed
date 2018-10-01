import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import * as routes from "../../constants/routes";

const mockUser = {
  isLoggedIn: false,
};
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Header routes={routes} savedMovies={[]} user={mockUser} />,
    div
  );
});
