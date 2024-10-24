import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { NavBar } from "@/app/sections/02-navbar";

describe("NavBar Component", () => {
  
  it("Test of the render", () => {
    render(<NavBar />);
    expect(screen.getByTestId("navbar")).not.toBeNull();
  });

});