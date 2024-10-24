import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import NavItem from "@/app/components/NavItem";

describe("NavItem Component", () => {
  
  it("Test of the navbar links", () => {
    const label = "Inicio";
    const url = "#inicio";

    render(<NavItem label={label} url={url} />);
    
    const linkElement = screen.getByText(label);
    
    expect(linkElement).toBe;
    expect(linkElement).toHaveAttribute("href", url);

  });

});