import SocialButton from "./SocialButton";
import { SVG } from "../enums/SVG";
/**
 * Cuando se haga un componente,
 * para los props preguntate, ¿es necesario que este valor sea un prop? ¿por qué tiene que ser un prop?
 * Sí no va a tener nuevos valores, entonces no es un props, puedes dejarlo como algo estático
 */
export const FooterBase = () => {
  return (
    <footer className="flex justify-center w-full bg-lima text-white p-8">
      <div className="w-full flex items-center flex-row flex-wrap gap-y-4 max-w-screen-xl">
        <div className="flex items-start flex-col gap-y-2 md:gap-y-4 w-full md:w-3/4">
          <p>
            Email:{" "}
            <a href={`mailto:educaecoisla@gesplan.es`}>
              educaecoisla@gesplan.es
            </a>
          </p>
          <p data-testid="phone-number">Teléfono: 628 53 20 29</p>
          <p>
            &copy;{" "}
            {`${new Date().getFullYear()} Gestión y Planeamiento Territorial Y Medioambiental S. A. / Cabildo de Gran Canaria`}
          </p>
        </div>

        <div className="flex justify-center items-center md:items-end flex-row md:flex-col gap-y-2 md:gap-y-4 w-full md:w-1/4 mt-4 md:mt-0">
          <SocialButton
            d={SVG.FACEBOOK}
            url="#"
            className="text-white h-7 w-7 md:h-7 md:w-7 hover:bg-white hover:bg-opacity-15"
          />
          <SocialButton
            d={SVG.INSTAGRAM}
            url="#"
            className="text-white h-7 w-7 md:h-7 md:w-7 hover:bg-white hover:bg-opacity-15"
          />
          <SocialButton
            d={SVG.YOUTUBE}
            url="#"
            className="text-white h-7 w-7 md:h-7 md:w-7 hover:bg-white hover:bg-opacity-15"
          />
        </div>
      </div>
    </footer>
  );
};
