import { render, screen, fireEvent } from "@testing-library/react";
import { useModal } from "@/app/components/MasonryGrid/useModal";
import { act, useEffect } from "react";
import { describe, it, expect } from "vitest";

import { ImageData } from "@/app/types/IImageData";

const mockImage:ImageData = { 
  id: 1, height: 200, width: 200, 
  url_img:"image-url", url_event: "event", 
  title: "test title", description: "test Image",
  alt: "Selected Image"
};

const TestComponent = () => {
  const { selectedImage, isVisible, isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    // Efecto solo para poder disparar eventos
  }, [isOpen]);

  return (
    <div>
      <div data-testid="isOpen">{isOpen ? 'true' : 'false'}</div>
      <div data-testid="isVisible">{isVisible ? 'true' : 'false'}</div>
      <div data-testid="selectedImage">{selectedImage?.alt || 'none'}</div>
      <button onClick={() => openModal(mockImage)} data-testid="openModal">Open Modal</button>
      <button onClick={closeModal} data-testid="closeModal">Close Modal</button>
    </div>
  );
};

describe("useModal hook", () => {
  it("initializes with the correct default values", () => {
    render(<TestComponent />);

    expect(screen.getByTestId("isOpen").textContent).toBe('false');
    expect(screen.getByTestId("isVisible").textContent).toBe('false');
    expect(screen.getByTestId("selectedImage").textContent).toBe('none');
  });

  it("opens the modal and sets the selected image", () => {
    render(<TestComponent />);

    const openButton = screen.getByTestId("openModal");

    // Simulamos la apertura del modal
    act(() => {
      fireEvent.click(openButton);
    });

    expect(screen.getByTestId("isOpen").textContent).toBe('true');
    expect(screen.getByTestId("isVisible").textContent).toBe('true');
    expect(screen.getByTestId("selectedImage").textContent).toBe('Selected Image');
  });

  it("closes the modal and resets the selected image", () => {
    render(<TestComponent />);

    const openButton = screen.getByTestId("openModal");
    const closeButton = screen.getByTestId("closeModal");

    // Primero abrir el modal
    act(() => {
      fireEvent.click(openButton);
    });

    // Luego cerrar el modal
    act(() => {
      fireEvent.click(closeButton);
    });

    expect(screen.getByTestId("isOpen").textContent).toBe('false');
    expect(screen.getByTestId("isVisible").textContent).toBe('false');
    expect(screen.getByTestId("selectedImage").textContent).toBe('none');
  });

  it("closes the modal when Escape key is pressed", () => {
    render(<TestComponent />);

    const openButton = screen.getByTestId("openModal");

    // Abrir el modal
    act(() => {
      fireEvent.click(openButton);
    });

    // Simular la pulsación de la tecla Escape
    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'Escape' });
      window.dispatchEvent(event);
    });

    expect(screen.getByTestId("isOpen").textContent).toBe('false');
    expect(screen.getByTestId("isVisible").textContent).toBe('false');
    expect(screen.getByTestId("selectedImage").textContent).toBe('none');
  });
});
