import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Collaborations } from "@/app/sections/08-collaborations";

describe("Collaborations Component", () => {
  
  it("Test of the render", () => {
    render(<Collaborations />);
    expect(screen.getByTestId("collaborations")).not.toBeNull();
  });

});