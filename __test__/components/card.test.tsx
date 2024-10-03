import { Card } from "@/app/components/Card";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Card component", () => {
    it("render", () => {
        render(<Card
            title="carta"
            description="lorem ipsum"
        />)
        expect(screen.getByText("carta")).not.toBeNull()
    })

    it("exists description", async () => {
        render(<Card
            title="carta"
            description="lorem ipsum"
        />)
        expect(screen.findByText("lorem ipsum")).not.toBeNull()
    })
})