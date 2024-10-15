import "../components/Footer"
import { FooterBase } from "../components/Footer"
export const Footer = () => {
    return (
        <section id="pie" className="mt-10 mx-0 text-center">

            <FooterBase
                telephone="628 53 20 29"
                copy_right={`${new Date().getFullYear()} Gesplan`}
                email="educaecoisla@gesplan.es"
            />

        </section>
    );
}