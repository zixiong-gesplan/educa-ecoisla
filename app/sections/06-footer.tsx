import "../components/Footer"
import { FooterBase } from "../components/Footer"
export const Footer = () => {
    return <section className="mt-10 mx-0 text-center">

        <FooterBase telephone="628 53 20 29" text={`${new Date().getFullYear()} Gesplan. Todos los derechos reservados.`} />

    </section>
}