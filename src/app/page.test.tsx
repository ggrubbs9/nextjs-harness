import Home from "./page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders the header", () => {
    render(<Home />);
    // check if all components are rendered
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByAltText("Next.js logo")).toBeInTheDocument();
  });
});
