import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Header } from "@/app/sections/01-header";

describe("Header Component", () => {
  
  it("Test of the render", () => {
    render(<Header />);
    expect(screen.getByTestId("header")).not.toBeNull();
  });

});