import SearchBar from "./SearchBar";
import { render, cleanup, screen } from "@testing-library/react";

afterEach(cleanup);

describe("SearBar component", () => {
  it("reders the search bar correctly", () => {
    render(<SearchBar />);
    const searchBar = screen.getByRole("textbox"); // input element
    const searchInput = screen.getByPlaceholderText("Search"); // placeholder

    expect(searchBar).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });

  it("has the corrext styling", () => {
    render(<SearchBar />);
    const searchBar = screen.getByRole("textbox");

    expect(searchBar).toHaveStyle("padding: 6px 40px");
    expect(searchBar).toHaveStyle("border-radius: 4px");
  });
});
