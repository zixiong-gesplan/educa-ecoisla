import { render, screen, fireEvent } from "@testing-library/react";
import { MasonryGrid } from "@/app/components/MasonryGrid";
import { describe, it, expect, vi, MockedFunction } from "vitest";
import useWindowSize from "@/app/components/MasonryGrid/useWindowSize";
import { useModal } from "@/app/components/MasonryGrid/useModal";
import mockImages from "@/app/mockData/mockData.json";

vi.mock('@/app/components/MasonryGrid/useWindowSize');
vi.mock('@/app/components/MasonryGrid/useModal');

describe("MasonryGrid Component", () => {

  it("renders FullScreenSpinner when windowSize is undefined", () => {
    const mockedUseWindowSize = useWindowSize as MockedFunction<typeof useWindowSize>;
    const mockedUseModal = useModal as MockedFunction<typeof useModal>;

    // Mockeamos el hook useWindowSize para que retorne undefined
    mockedUseWindowSize.mockReturnValue(undefined);

    // Mockeamos el hook useModal
    mockedUseModal.mockReturnValue({
      selectedImage: undefined,
      isVisible: false,
      isOpen: false,
      openModal: vi.fn(),
      closeModal: vi.fn(),
    });

    render(<MasonryGrid images={mockImages} />);

    // Verificamos que se renderiza el FullScreenSpinner
    expect(screen.getByTestId("fullscreen-spinner")).toBeInTheDocument();
  });

  it("renders the Masonry grid with images when windowSize is available", () => {
    const mockedUseWindowSize = useWindowSize as MockedFunction<typeof useWindowSize>;
    const mockedUseModal = useModal as MockedFunction<typeof useModal>;

    // Mockeamos el hook useWindowSize para que retorne un tamaño válido
    mockedUseWindowSize.mockReturnValue(1024);

    // Mockeamos el hook useModal
    mockedUseModal.mockReturnValue({
      selectedImage: undefined,
      isVisible: false,
      isOpen: false,
      openModal: vi.fn(),
      closeModal: vi.fn(),
    });

    render(<MasonryGrid images={mockImages} />);

    // Verificamos que el grid de Masonry está presente
    expect(screen.getByTestId("mansonry-grid")).toBeInTheDocument();

    // Verificamos que las imágenes están presentes en el Masonry
    expect(screen.getByAltText("Image 1")).toBeInTheDocument();
    expect(screen.getByAltText("Image 2")).toBeInTheDocument();
  });

  it("opens the modal when an image is clicked", () => {
    const mockedUseWindowSize = useWindowSize as MockedFunction<typeof useWindowSize>;
    const mockedUseModal = useModal as MockedFunction<typeof useModal>;
    const openModalMock = vi.fn();

    // Mockeamos el hook useWindowSize para que retorne un tamaño válido
    mockedUseWindowSize.mockReturnValue(1024);

    // Mockeamos el hook useModal para que controle el modal
    mockedUseModal.mockReturnValue({
      selectedImage: undefined,
      isVisible: false,
      isOpen: false,
      openModal: openModalMock,
      closeModal: vi.fn(),
    });

    render(<MasonryGrid images={mockImages} />);

    // Simulamos un clic en la primera imagen
    const firstImageButton = screen.getByAltText("Image 1").closest('button');
    fireEvent.click(firstImageButton!);

    // Verificamos que la función openModal fue llamada con la imagen correcta
    expect(openModalMock).toHaveBeenCalledWith(mockImages[0]);
  });

  it("renders the modal when isOpen is true", () => {
    const mockedUseWindowSize = useWindowSize as MockedFunction<typeof useWindowSize>;
    const mockedUseModal = useModal as MockedFunction<typeof useModal>;

    // Mockeamos el hook useWindowSize para que retorne un tamaño válido
    mockedUseWindowSize.mockReturnValue(1024);

    // Mockeamos el hook useModal para que el modal esté abierto
    mockedUseModal.mockReturnValue({
      selectedImage: mockImages[0],
      isVisible: true,
      isOpen: true,
      openModal: vi.fn(),
      closeModal: vi.fn(),
    });

    render(<MasonryGrid images={mockImages} />);

    // Verificamos que el modal está presente
    expect(screen.getByText(mockImages[0].title)).toBeInTheDocument();
  });
});