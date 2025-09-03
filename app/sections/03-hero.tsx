import Image from "next/image";
import { ButtonDark } from "../components/ButtonDark";
import { ButtonLight } from "../components/ButtonLight";
import { SVGCodes } from "../enums/SVG-codes";
import SidebarFadeSlider from "../components/Slider/SidebarFadeSlider";

export const Hero = () => {
  const slides = [
    { src: "/slide/1.png", alt: "Foto 1" },
    { src: "/slide/2.png", alt: "Foto 2" },
    { src: "/slide/3.png", alt: "Foto 3" },
  ];

  return (
    <section data-testid="hero" id="inicio">
      <div className="grid max-w-screen-xl px-0 sm:px-2 py-8 mx-4 lg:gap-8 xl:gap-0 lg:py-16 xl:grid-cols-12">
        <div className="mr-auto place-self-center xl:col-span-7">
          <h2 className="mb-4 text-2xl sm:text-5xl dark:text-black font-bold">
            La educación ambiental supone una pieza fundamental para la
            conservación del territorio.
          </h2>
          <p className="text-lg sm:text-2xl dark:text-black">
            La Consejería de Medio Ambiente del Cabildo de Gran Canaria
            implementa un Plan de Acción de Educación Ambiental para la
            Sostenibilidad, centrado en la concienciación social sobre el
            cuidado y conservación del medio ambiente.
          </p>
          <div className="flex mt-10 sm:w-5/6 flex-row justify-start gap-2 sm:gap-3 md:gap-4">
            <ButtonDark
              content="Galería actividades"
              d={SVGCodes.Image2}
              href="/gallery"
            ></ButtonDark>

            <ButtonLight
              content="Próximos Eventos"
              d={SVGCodes.ArrowUpRight}
              href="https://docs.google.com/forms/d/e/1FAIpQLSfO3aylXbvJujHBKCc4Kr23IbtlyFnKiuugB5A1MGx93ioiYQ/closedform"
            ></ButtonLight>
          </div>
        </div>
        <aside className="hidden xl:mt-0 xl:col-span-5 xl:flex ml-4">
          <SidebarFadeSlider
            slides={slides}
            intervalMs={5000}
            fadeMs={600}
            className=""
          />
        </aside>
      </div>
    </section>
  );
};
