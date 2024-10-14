import { AccordionItem } from "@/app/components/Accordion";

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { fireEvent } from "@testing-library/react";

describe("AccordionItem component", () => {

    const title = "Prueba";
    const description = "Esto es una prueba";
    render(<AccordionItem title={title} description={description} data-testid="accordion-collapse-heading-1"/>);

    it("render", () => {

        expect(screen.getByText(title)).toBeDefined();
        expect(screen.getByText(description)).toBeDefined();

    });

    it("dropdown", () => {
        const titleBox = screen.getByTestId('accordion-collapse-heading-1');
        
        expect(titleBox.querySelector('#accordion-collapse-body-1')!.className).include("hidden")

        const button = titleBox.querySelector("button")!;
        fireEvent.click(button);
        
        expect(titleBox.querySelector('#accordion-collapse-body-1')!.className).not.include("hidden")

    });
});