import { describe, expect, it } from 'vitest'
import { render, screen } from "@testing-library/react";
import { FooterBase } from '@/app/components/Footer';

describe("footer component", () => {
  it("should have params", () => {
    const email = "a@a.com";
    const copy_right = "prueba copyright";

    render(<FooterBase
      copy_right={copy_right}
      email={email}
    />)

    expect(screen.getByText(email)).toBeDefined();
    expect(screen.getByText(`©${copy_right}`)).toBeDefined();

  })
})