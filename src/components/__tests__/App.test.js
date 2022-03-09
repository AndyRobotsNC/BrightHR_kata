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

test("Folder should not contain an 'added' key", () => {
  const item = {
    type: "folder",
    name: "Expenses",
    files: [
      {
        type: "doc",
        name: "Expenses claim form",
        added: "2017-05-02",
      },
      {
        type: "doc",
        name: "Fuel allowances",
        added: "2017-05-03",
      },
    ],
  };
  render(<SingleItem item={item} />);

  const singleItemElement = screen.getByTestId("folder-1");
  expect(singleItemElement).toBeInTheDocument();
  expect(singleItemElement).toHaveTextContent("Expenses");
});
