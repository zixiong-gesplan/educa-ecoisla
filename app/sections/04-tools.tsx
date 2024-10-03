import Image from "next/image"

export const Tools = () => {
    return <section className="px-6 flex flex-col gap-4 items-center">
    <h2 className="text-2xl w-full text-center text-gray-900">INSTRUMENTOS PARA ESTAS LABORES</h2>
    <p className="text-center sm:w-2/3 text-gray-900 text-xl ">
     <b className="font-black text-gray-900">Programa de Educación Ambiental</b>, promover actividades educativas destinadas a la ciudadania de Gran Canaria mediante el ámbito formal y no formal (centros escolares, colectivos, administraciones locales, etc.), a través de acciones como salidas de campo, campañas de sensibilización, jornadas de voluntariado, etc.
    </p>
    <div className="flex px-2 md:w-3/4 gap-4 items-center justify-center sx:h-[520px] h:96 my-4">
      <div className="h-full">
        <Image 
          unoptimized={true}
          src={"/educacion_ambiental_1.jpg"}
          width={447}
          height={0}
          alt="educacion ambiental 1 "
        ></Image>
      </div>
      <div className="h-full">
        <Image 
          unoptimized={true}
          src={"/educacion_ambiental_2.jpeg"}
          width={904}
          height={0}
          alt="educacion ambiental 1"
        ></Image>

      </div>

    </div>
    <p className="text-center sm:w-2/3 text-gray-900 text-xl">
     <b className="font-black	text-gray-900 ">Programa de Divulgación Ambiental</b>, 
     mediante el que se elaboran materiales divulgativos, promoviendo la difusión de contenidos para el fomento de la concienciación social en determinados ámbitos.
    </p>
</section>
}