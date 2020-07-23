import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

const defaultProps = {
  onClick: jest.fn(),
};

test("button renders with terrible pun", () => {
  const { getByText } = render(<Button props={defaultProps}>hoya there</Button>);
  expect(getByText("hoya there")).toBeTruthy();
});
