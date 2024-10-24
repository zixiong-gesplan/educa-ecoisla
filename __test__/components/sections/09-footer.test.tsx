import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Footer } from "@/app/sections/09-footer";

describe("Footer Component", () => {
  
  it("Test of render", () => {
    render(<Footer />);
    expect(screen.getByTestId("footer")).not.toBeNull();
  });

});