import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Actions } from "@/app/sections/07-actions";

describe("Actions Component", () => {
  
  it("Test of the render", () => {
    render(<Actions />);
    expect(screen.getByTestId("actions")).not.toBeNull();
  });

});