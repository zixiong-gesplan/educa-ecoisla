
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import SocialButton from "@/app/components/SocialButton";
import { SVGCodes } from "@/app/enums/SVG-codes";

describe("Card component", () => {

  const url = "https://facebook.com"

  it("exists description", async () => {
    render(<SocialButton
      d={SVGCodes.Facebook}
      url={url}
    />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', url);
  })
})