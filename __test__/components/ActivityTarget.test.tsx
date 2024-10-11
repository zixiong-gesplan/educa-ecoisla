import { ActivityTarget } from "@/app/components/ActivityTarget";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("ActivityTarget Component", () => {
    it("render", () => {

        const text = "Texto de prueba";

        render(<ActivityTarget size={250} text={text} />);
        expect(screen.getByText("Texto de prueba")).toBeDefined();

        expect(screen.getByRole('img', {name: `Imagen de ${text}`}).getAttribute('width')).toBe("250");
        expect(screen.getByRole('img', {name: `Imagen de ${text}`}).getAttribute('height')).toBe("250");

    })
})