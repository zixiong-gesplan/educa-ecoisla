import { Accordion } from "../components/Accordion";
import { Card } from "../components/Card"

export const Targets = () => {
    return (
        <section data-testid="targets" id="ejes" className="w-full">

            <h3 className="text-center text-2xl sm:text-3xl text-custom-light-bg bg-opacity-10 rounded-lg mx-3 bg-white font-bold mt-8 p-3 ">EJES DE ACTUACIÓN</h3>
            <Accordion />
            <div className="mt-2 py-4 lg:px-14 px-4 md:px-12 gap-3 md:gap-8 grid md:grid-cols-1 xl:grid-cols-3">

                <Card
                    title="Patrimonio Natural de Gran Canaria"
                    description="Tiene como objetivo principal dar a conocer la BIODIVERSIDAD de
                    la isla como vía fundamental para promover la conservación del territorio."
                />
                <Card
                    title="Conservación de la biodiversidad"
                    description="Las Especies Exóticas Invasoras (EEI)  representan una de las principales amenazas para la conservación de 
                    la biodiversidad, especialmente en los territorios insulares.<br />
                    Dado que la problemática de estas especies implica directamente a la sociedad, resulta indispensable conocer
                    el impacto que las EEI generan sobre los ecosistemas naturales."
                />
                <Card
                    title="Buenas prácticas para la sostenibilidad"
                    description="En este eje estarán comprendidas todas aquellas actuaciones diseñadas para promover conductas respetuosas
                    y sostenibles, consumo de recursos de manera responsable, eficiencia energética, clasificación de residuos, etc."
                />

            </div>


        </section>);
}