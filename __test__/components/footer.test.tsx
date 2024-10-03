import { describe, expect, it} from 'vitest'
import { render, screen } from "@testing-library/react";
import { FooterBase } from '@/app/components/Footer';

describe("footer component", () => {
    it("should have params", () => {
        render(<FooterBase
            copy_right={"prueba copyright"}
            email={"a@a.com"}
            telephone={"(+34) 123456789"}
        />)
        expect(screen.getByTestId("phone-number")).not.toBeNull();
    })
})