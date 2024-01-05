import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("checkbox flow", () => {
  render(<SummaryForm />);
  const checkboxElement = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm/i });

  // initial
  expect(checkboxElement).not.toBeChecked();
  expect(confirmButton).toBeDisabled();

  //click checkbox
  fireEvent.click(checkboxElement);
  expect(checkboxElement).toBeChecked();
  expect(confirmButton).toBeEnabled();

  // click checkbox again
  fireEvent.click(checkboxElement);
  expect(checkboxElement).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});
