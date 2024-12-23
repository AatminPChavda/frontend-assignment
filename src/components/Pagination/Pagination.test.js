import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

test("renders pagination controls", () => {
  const onPageChange = jest.fn();
  render(
    <Pagination currentPage={1} totalPages={3} onPageChange={onPageChange} />
  );
  expect(screen.getByText(/Previous/i)).toBeDisabled();
  expect(screen.getByText(/Next/i)).not.toBeDisabled();
});

test("handles page change events", () => {
  const onPageChange = jest.fn();
  render(
    <Pagination currentPage={1} totalPages={3} onPageChange={onPageChange} />
  );
  fireEvent.click(screen.getByText(/Next/i));
  expect(onPageChange).toHaveBeenCalledWith(2);
});
