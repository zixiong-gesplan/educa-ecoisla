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
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 xl:gap-12 dark:text-black">
        <ActivityTarget size={500} text="Talleres en aula" />
        <ActivityTarget
          size={500}
          text="Actividades de interpretación en campo"
        />
        <ActivityTarget size={500} text="Ferias y eventos públicos" />
        <ActivityTarget size={500} text="Jornadas de voluntariado" />

        {/* <MoreActivities text="Más actividades" /> */}
      </div>

      <div className="text-2xl md:text-lg w-full flex justify-center items-center flex-wrap mt-6">
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
