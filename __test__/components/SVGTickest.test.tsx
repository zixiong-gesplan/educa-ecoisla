import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { SVGTicket } from "@/app/components/SVGTicket";

describe("SVGTicket Component", () => {
  
  it("Test of the SVGTicket render", () => {
    
    render(<SVGTicket />);
    expect(screen.getByTestId("ticket")).toBe;
    
  });

});