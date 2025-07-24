import "../components/Footer"
import { FooterBase } from "../components/Footer"
export const Footer = () => {
    return (
        <section data-testid="footer" id="pie" className="mx-0">

            <FooterBase
                copy_right={`${new Date().getFullYear()} Gestión y Planeamiento Territorial Y Medioambiental S. A. / Cabildo de Gran Canaria`}
                email="educaecoisla@gesplan.es"
            />

        </section>
    );
}