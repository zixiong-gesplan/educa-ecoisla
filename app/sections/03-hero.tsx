import Image from "next/image";
import { ButtonDark } from "../components/ButtonDark";
import { ButtonLight } from "../components/ButtonLight";
import { SVG } from "../enums/SVG";

export const Hero = () => {
  return (
    <section id="inicio">
      <div className="grid max-w-screen-xl px-0 sm:px-2 py-8 mx-4 lg:gap-8 xl:gap-0 lg:py-16 xl:grid-cols-12">
        <div className="mr-auto place-self-center xl:col-span-7">
          <h2 className="mb-4 text-2xl sm:text-5xl">
            La educación ambiental supone una pieza importante en la
            conservación del territorio.
          </h2>
          <p className="text-lg sm:text-2xl">
            La consejería de Medio Ambiente del Cabildo de Gran Canaria ha
            implementado un Plan de Acción de Educación Ambiental para la
            Sostenibilidad, centrado en la concienciación social sobre la
            conservación del medio ambiente.
          </p>
          <div className="flex mt-10 sm:w-5/6 flex-row justify-start gap-2 sm:gap-3 md:gap-4">
            <ButtonDark
              content="Galería actividades"
              d={SVG.IMAGE_2}
              href="/gallery"
            />

            <ButtonLight
              content="Próxima actividad"
              d={SVG.ARROW_UP_RIGHT}
              href="https://docs.google.com/forms/d/e/1FAIpQLSfO3aylXbvJujHBKCc4Kr23IbtlyFnKiuugB5A1MGx93ioiYQ/closedform"
            />
          </div>
        </div>
        <div className="hidden xl:mt-0 xl:col-span-5 xl:flex ml-4">
          <Image
            src="/informacion.png"
            alt="Imágen de portada"
            unoptimized={true}
            width={0}
            height={0}
            className="w-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};
