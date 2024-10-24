import { ImageGrid } from "@/app/components/ImageGrid";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("ImageGrid Component", () => {

  it("renders with the correct content", () => {

    render(<ImageGrid />);
    expect(screen.getByTestId("mansonry-grid")).not.toBeNull();

  });

});