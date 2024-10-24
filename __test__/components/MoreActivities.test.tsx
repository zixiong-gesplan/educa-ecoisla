import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { MoreActivities } from "@/app/components/MoreActivities";

describe("MoreActivities Component", () => {
  
  it("Test the text insertion", () => {
    const text = "Test text";

    render(<MoreActivities text={text} />);
    expect(screen.getByText(text)).toBe;

  });

});