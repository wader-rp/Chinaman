import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App test suite", () => {
  it("renders App component", () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });
});
