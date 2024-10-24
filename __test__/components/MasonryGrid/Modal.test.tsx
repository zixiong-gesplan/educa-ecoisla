import { Modal } from "@/app/components/MasonryGrid/Modal";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ImageData } from "@/app/types/IImageData";


describe("Modal Component", () => {
  it("renders the modal when isVisible is true", () => {
    const mockCloseModal = vi.fn(); // Mock function for closeModal
    
    const mockImage:ImageData = { 
      id: 1, height: 200, width: 200, 
      url_img:"image-url", url_event: "event", 
      title: "test title", description: "test Image",
      alt: "Selected Image"
    }; // Mock image data

    render(
      <Modal
        selectedImage={mockImage}
        isVisible={true}
        closeModal={mockCloseModal}
      />
    );

    expect(screen.getByRole("img", { name: mockImage.alt })).toBeInTheDocument();

    const modalElement = screen.getByTestId("modal");
    expect(modalElement).toHaveClass("opacity-100");
    expect(modalElement).not.toHaveClass("opacity-0");

  });

  it("does not render the modal when isVisible is false", () => {
    const mockCloseModal = vi.fn(); // Mock function for closeModal
    
    const mockImage:ImageData = { 
      id: 1, height: 200, width: 200, 
      url_img:"image-url", url_event: "event", 
      title: "test title", description: "test Image",
      alt: "Selected Image"
    }; // Mock image data

    render(
      <Modal
        selectedImage={mockImage}
        isVisible={false}
        closeModal={mockCloseModal}
      />
    );

    expect(screen.getByRole("img", { name: mockImage.alt })).toBeInTheDocument();

    const modalElement = screen.getByTestId("modal");
    expect(modalElement).toHaveClass("opacity-0");
    expect(modalElement).not.toHaveClass("opacity-100");
  });
});