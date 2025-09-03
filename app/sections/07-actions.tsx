import Link from "next/link";
import { ActivityTarget } from "../components/ActivityTarget";
import { MoreActivities } from "../components/MoreActivities";
import { SVGCodes } from "../enums/SVG-codes";

export const Actions = () => {
  return (
    <section
      data-testid="actions"
      id="actividades"
      className="mt-4 mx-4 max-w-screen-xl"
    >

      <h2 className="font-extrabold text-xl md:text-4xl text-center my-4 md:my-8">ACTIVIDADES</h2>

      <ActivityTarget
        title="Talleres"
        text="Actividades de educación ambiental para grupos de diferentes edades"
        size={1500}
        src="/talleres.png"
        titleSize="text-lg md:text-2xl md:text-4xl"
        textSize="text-lg md:text-2xl lg:text-4xl leading-tight"
        className="relative w-full mb-4 md:mb-16"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 xl:gap-12 dark:text-black">
        <ActivityTarget
          title="Voluntariado"
          text="Conservación a través de la colaboración ciudadana"
          size={1200}
          src="/actividad-01.png"
          titleSize="text-lg md:text-2xl"
          textSize="text-lg md:text-2xl leading-tight"
          className="relative w-full mb-4 md:mb-8"
        />
        <ActivityTarget
          title="Salidas de campo"
          text="Rutas interpretadas para conocer el patrimonio natural"
          size={1200}
          src="/actividad-02.png"
          titleSize="text-lg md:text-2xl"
          textSize="text-lg md:text-2xl leading-tight"
          className="relative w-full mb-4 md:mb-8"
        />
        <ActivityTarget
          title="Ferias"
          text="Participación en eventos"
          size={1200}
          src="/actividad-03.png"
          titleSize="text-lg md:text-2xl"
          textSize="text-lg md:text-2xl leading-tight"
          className="relative w-full mb-4 md:mb-8"
        />

        {/* <MoreActivities text="Más actividades" /> */}
      </div>

      <div className="text-xl md:text-2xl w-full flex justify-center items-center flex-wrap mt-6">
        <span className="text-custom-light-bg sm:text-2xl text-center">
          Otros enlaces de Interes
        </span>
        <svg
          className="mx-2 w-6 h-6 text-custom-light-bg"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={SVGCodes.Arrow}
          />
        </svg>
        <a
          href="https://www3.gobiernodecanarias.org/medusa/ecoescuela/recursosdigitales/coleccion/flora-canaria/"
          className="underline hover:text-custom-light-bg"
        >
          Flora Canaria
        </a>
        , &nbsp;
        <a
          href="https://www3.gobiernodecanarias.org/medusa/ecoescuela/recursosdigitales/coleccion/el-agua-en-las-islas-canarias/"
          className="underline hover:text-custom-light-bg"
        >
          El agua en Canarias
        </a>
      </div>
    </section>
  );
};
