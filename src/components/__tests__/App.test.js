import { render, screen, cleanup } from "@testing-library/react";
import SingleItem from "../SingleItem";

afterEach(() => {
  cleanup();
});

test("SingleItem should display each file and folder", () => {
  const item = {
    type: "pdf",
    name: "Employee Handbook",
    added: "2017-01-06",
  };
  render(<SingleItem item={item} />);

  const singleItemElement = screen.getByTestId("item-1");
  expect(singleItemElement).toBeInTheDocument();
  expect(singleItemElement).toHaveTextContent("Employee Handbook");
});
