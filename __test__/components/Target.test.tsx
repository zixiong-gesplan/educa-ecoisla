import { describe,it,expect } from "vitest";
import { screen,render } from "@testing-library/react";
import { Target } from "@/app/components/Target";


describe('Target component', () => {
    render(
        <Target text="Test Text">
          <div>Child Element</div>
        </Target>
    );

    it('renders children correctly', () => {

      const childElement = screen.getByText(/Child Element/i);
      expect(childElement).not.toBeNull();
    });
  
    it('displays the correct text', () => {
      const textElement = screen.getByText(/Test Text/i);
      expect(textElement).not.toBeNull();
    });
  });