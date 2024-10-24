import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Objetives } from "@/app/sections/04-objetives";

describe("Objetives Component", () => {
  
  it("Test of render", () => {
    render(<Objetives />);
    expect(screen.getByTestId("objetives")).not.toBeNull();
  });

});