import { ButtonDark } from "@/app/components/ButtonDark";
import { SVGCodes } from "@/app/enums/SVG-codes";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("ButtonDark Component", () => {
  const content = "Link to Google";
  const link = "https://google.com";
  const icon = SVGCodes.Image;

  it("renders with the correct content", () => {

    render(<ButtonDark content={content} href={link} d={icon} />);
    expect(screen.getByText(content)).toBeInTheDocument();

  });

  it("renders with the correct href attribute", () => {
    render(<ButtonDark content={content} href={link} d={icon} />);

    const anchorElement = screen.getByRole('link', { name: content });
    expect(anchorElement).toHaveAttribute('href', link);
  });

  it("renders the SVG with the correct path 'd' attribute", () => {
    render(<ButtonDark content={content} href={link} d={icon} />);

    const svgElement = screen.getByTestId('icon-svg');
    const svgPathElement = svgElement.querySelector('path');
    expect(svgPathElement).toHaveAttribute('d', icon);
  });
});
