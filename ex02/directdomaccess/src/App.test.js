import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a div with 5 paragraphs in it", () => {
  render(<App />);
  const angleText = screen.getByText("angle:");
  expect(angleText).toBeInTheDocument();
});
