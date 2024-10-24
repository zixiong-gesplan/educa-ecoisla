import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Hero } from "@/app/sections/03-hero";

describe("Hero Component", () => {
  
  it("Test of the render", () => {
    render(<Hero />);
    expect(screen.getByTestId("hero")).not.toBeNull();
  });

});