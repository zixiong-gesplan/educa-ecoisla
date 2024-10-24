import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Targets } from "@/app/sections/05-targets";

describe("Targets Component", () => {
  
  it("Test of the render", () => {
    render(<Targets />);
    expect(screen.getByTestId("targets")).not.toBeNull();
  });

});