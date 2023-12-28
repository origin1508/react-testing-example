import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button flow", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });

  expect(buttonElement).toHaveClass("red");

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveClass("blue");
  expect(buttonElement).toHaveTextContent(/red/i);
});

test("checkbox flow", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button");
  const checkboxElement = screen.getByRole("checkbox", {
    name: "disable button",
  });

  // initial conditions
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  // click checkbox to disable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass("disabled");
  expect(checkboxElement).toBeChecked();

  // re-enable after click checkbox again
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();
});
