import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Tools } from "@/app/sections/06-tools";

describe("Tools Component", () => {
  
  it("Test of render", () => {
    render(<Tools />);
    expect(screen.getByTestId("tools")).not.toBeNull();
  });

});