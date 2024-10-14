import { Article } from "@/app/components/Article";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Article component", () => {
    it("render", () => {
        render(<Article direction="flex-row-reverse">
            <h1>testing</h1>
        </Article>)
        expect(screen.getByText("testing")).toBeDefined()
        expect(screen.getByRole("article").className).includes("flex-row-reverse")
    })
})