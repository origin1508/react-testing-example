import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { kebabCaseToTitleCase } from "./helpers";

test("button flow", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });

  expect(buttonElement).toHaveClass("medium-violet-red");

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveClass("midnight-blue");
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

describe("kebabCaseToTitleCase", () => {
  test("Works for no hypens", () => {
    expect(kebabCaseToTitleCase("red")).toBe("Red");
  });
  test("Works for one hyphen", () => {
    expect(kebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner hyphens", () => {
    expect(kebabCaseToTitleCase("medium-violet-red")).toBe("Medium Violet Red");
  });
});
