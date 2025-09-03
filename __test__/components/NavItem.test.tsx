import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import NavItem from "@/app/components/NavItem";

describe("NavItem Component", () => {
  
  it("Test of the navbar links", () => {
    const children = "Inicio";
    const url = "#inicio";

    render(<NavItem url={url}>{children}</NavItem>);
    
    const linkElement = screen.getByText(children);
    
    expect(linkElement).toBe;
    expect(linkElement).toHaveAttribute("href", url);

  });

});