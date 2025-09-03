import { describe, it, expect, beforeEach } from "vitest";
import { screen, render } from "@testing-library/react";
import { Target } from "@/app/components/Target";


describe('Target component', () => {

  it('renders children correctly', () => {
    render(
      <Target text="Test Text">
        <div>Child Element</div>
      </Target>
    );
    const childElement = screen.getByText(/Child Element/i);
    expect(childElement).not.toBeNull();
  });

  it('displays the correct text', () => {
    render(
      <Target text="Test Text">
        <div>Child Element</div>
      </Target>
    );
    const textElement = screen.getByText(/Test Text/i);
    expect(textElement).not.toBeNull();
  });
});