import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Accordion } from "@/app/components/Accordion";

describe("Accordion Component", () => {
  
  it("Test of render", () => {
    render(<Accordion />);
    expect(screen.getByTestId("accordion")).not.toBeNull();
  });

});