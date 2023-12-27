import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("checkbox flow", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button");
  const checkboxElement = screen.getByRole("checkbox", {
    name: "disable button",
  });

  // initial conditions
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  fireEvent.click(checkboxElement);

  // conditions after checked
  expect(buttonElement).toBeDisabled();
  expect(checkboxElement).toBeChecked();

  fireEvent.click(checkboxElement);

  // re-enable after checked twice
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();
});
