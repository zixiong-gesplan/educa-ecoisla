import Image from "next/image"

export const Description = () => {
    return       <section className="m-4 text-xl mx-4 md:mx-8 max-w-screen-xl">
    <div className="bg-[#83AC50] p-8 rounded-lg">
      <p className="font-bold text-2xl text-white">
        La conservación de la vida silvestre como vía prioritaria para garantizar el mantenimiento de
        la riqueza, la diversidad genética y de los procesos ecológicos esenciales.
      </p>
      <p className="text-2xl text-white mt-4">
        En el caso de Canarias es una herramienta imprescindible para trabajar en pro de la preservación y
        conservación de su rica biodiversidad y entornos naturales únicos.
      </p>
    </div>
    <div className="flex flex-col lg:flex-row m-0 items-center mt-8">
      <div className="lg:w-2/5 h-full">
        <Image
            src="/informacion.png"
            alt="informacion"
            unoptimized={true}
            width={751}
            height={307}
            className=""
          />
      </div>

      <div className="w-full lg:w-3/5 lg:pl-8 flex flex-col justify-between gap-8 mt-8 lg:mt-0">
        <p className="text-lg text-gray-900">
          La aprobación en 2015 de la Agenda 2030 para el Desarrollo Sostenible, por parte de la
          Asamblea General de Naciones Unidas, supuso un gran reto para el avance en diferentes aspectos de cara a la mejora de las condiciones de vida en el planeta.
        </p>
        <p className="text-lg text-gray-900">
          Desde la Consejería de Medio Ambiente, Clima, Energía y Conocimiento del Cabildo de Gran
          Canaria, se ha querido iniciar la puesta en marcha de un Plan de Acción de Educación Ambiental para la Sostenibilidad con el fin de trabajar los problemas que inciden
          en el medio ambiente desde una perspectiva global y preventiva.
        </p>
        <p className="text-lg text-gray-900">
          Se trata de un Plan que reúne una serie de acciones con las que se pretende promover la concienciación social sobre los temas que afectan en la actualidad a la conservación del medio 
          natural. Así, se han incluido temas relacionados con la conservación de la biodiversidad, la adquisición de buenas prácticas relacionadas con la eficiencia energética, el consumo responsable de los recursos, como agua y electricidad, la reducción y reciclaje de residuos, entre otros. 
        </p>
      </div>
    </div>       
  </section>
}