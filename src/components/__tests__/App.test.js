import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import SingleItem from "../SingleItem";
import App from "../../App";

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
test("Folder should have a class name of 'folder'", () => {
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
  expect(singleItemElement.classList).toContain("folder");
});
test("Clicking a folder should show the files inside", () => {
  render(<App />);
  const items = screen.getAllByTestId("rendered-item");
  expect(items[0]).toHaveTextContent("Employee Handbook");
  expect("Expenses claim form").not.toBeInTheDocument;
  fireEvent.click(screen.getByText("Misc"));
  expect("Expenses claim form").toBeInTheDocument;
});
test("Sorting by name, sorts files and folders alphabetically", () => {
  //render the App for testing, whole app needs rendering because components rely on other components
  render(<App />);
  //get all the items on the screen that have the test id "rendered-item"
  const items = screen.getAllByTestId("rendered-item");
  // check the first file (item in the array) is 'Employee Handbook' as expected in the test data
  expect(items[0]).toHaveTextContent("Employee Handbook");
  // change the 'sort by' to value "name"
  fireEvent.change(screen.getByLabelText("Sort By:"), {
    target: { value: "name" },
  });
  // check the first file (item in the array) is now 'Cost centres' as expected now sorted alphabetically
  expect(items[0]).toHaveTextContent("Cost centres");
});
test("Sorting by size, sorts files and folders by size - descending. Example - a file is 1, a folder with two files in is 2", () => {
  //render the App for testing, whole app needs rendering because components rely on other components
  render(<App />);
  //get all the items on the screen that have the test id "rendered-item"
  const items = screen.getAllByTestId("rendered-item");
  // check the first file (item in the array) is 'Employee Handbook' as expected in the test data
  expect(items[0]).toHaveTextContent("Employee Handbook");
  // change the 'sort by' to value "name"
  fireEvent.change(screen.getByLabelText("Sort By:"), {
    target: { value: "size" },
  });
  // check the first file (item in the array) is now 'Cost centres' as expected now sorted alphabetically
  expect(items[0]).toHaveTextContent("Misc");
});
test("Sorting by date, sorts files and folders by date - descending", () => {
  //render the App for testing, whole app needs rendering because components rely on other components
  render(<App />);
  //get all the items on the screen that have the test id "rendered-item"
  const items = screen.getAllByTestId("rendered-item");
  // check the first file (item in the array) is 'Employee Handbook' as expected in the test data
  expect(items[0]).toHaveTextContent("Employee Handbook");
  // change the 'sort by' to value "name"
  fireEvent.change(screen.getByLabelText("Sort By:"), {
    target: { value: "date" },
  });
  // check the first file (item in the array) is now 'Cost centres' as expected now sorted alphabetically
  expect(items[0]).toHaveTextContent("Public Holiday policy");
});
test("File Search function - should return the file if correctly searched by name", () => {
  render(<App />);
  const items = screen.getAllByTestId("rendered-item");
  expect(items[0]).toHaveTextContent("Employee Handbook");
  fireEvent.change(screen.getByLabelText("file search:"), {
    target: { value: "Misc" },
  });
  fireEvent.click(screen.getByRole("button"));
  const itemsAfterSearch = screen.getAllByTestId("rendered-item");
  expect(itemsAfterSearch.length).toBe(1);
  expect(itemsAfterSearch[0]).toHaveTextContent("Misc");
});
