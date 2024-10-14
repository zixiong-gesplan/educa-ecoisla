import { Card } from "../components/Card"
import { Target } from "../components/Target"

export const Targets = () => {
    return (<section>

        <h3 className="text-center text-2xl sm:text-3xl text-custom-light-bg bg-custom-light-bg bg-opacity-10 rounded-lg mx-3 md:bg-white font-bold mt-8 p-3 ">EJES DE ACTUACIÓN</h3>

        <div className="mt-2 py-4 lg:px-14 px-4 md:px-12 gap-3 md:gap-8 grid md:grid-cols-1 xl:grid-cols-3 auto-cols-[minmax(300px,_1fr)]">

            <Card
                title="Patrimonio Natural de Gran Canaria"
                description="Tiene como objetivo principal dar a conocer la biodiversidad y geología de Gran Canaria a la
                ciudadanía de la isla, como vía fundamental para promover la conservación del territorio,
                su biodiversidad y geodiversidad."
            />
            <Card
                title="Conservación de la biodiversidad"
                description="Las especies exóticas invasoras (EEI) constituyen la principal amenaza para la conservación de
                la biodiversidad, principalmente en los territorios insulares, dado que la problemática de estas
                especies implica directamente a la sociedad, es primordial la concienciación de la ciudadanía
                en relación con los problemas que ocasionan las EEI en la naturaleza."
            />
            <Card
                title="Buenas prácticas para la sostenibilidad"
                description="En este eje de actuación estarán comprendidas todas aquellas actuaciones
                diseñadas para promover conductas más sostenibles en la ciudadanía de la isla. Se incluirán
                actividades que incentiven el consumo responsable de recursos, la eficiencia energética, la
                separación de los residuos, etc."
            />
            <div className="py-12 px-4 bg-[#83AC50] text-[#ffffff] rounded-lg	sm:min-w-[200px] min-w-[300px] max-w-[650px] md:hidden text-lg">
                Tiene como objetivo principal dar a conocer la biodiversidad y geología de Gran Canaria a la 
                ciudadanía de la isla, como vía fundamental para promaver la conservación del territorio, su biodiversidad y geodiversidad.
            </div>

        </div>


    </section>);
}