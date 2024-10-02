
export const Actions = () => {
  return <section className="mt-10 px-8 flex gap-8 flex-col lg:flex-row">
  <div className=" lg:w-1/2 w-full">
    <h2 className="xl:text-2xl text-lg w-full text-center text-gray-900 mb-3">
      ACTIVIDADES CON LA COMUNIDAD EDUCATIVA
    </h2>
    <div className="bg-gradient-to-r from-[#B0CB21] to-[#83AC50] p-4 rounded-md h-48 relative">
      <p className="text-xl text-white">
        Talleres y Salidas de campo con la Comunidad educativa.
      </p>
      <a href="mailto:educaecoisla@gesplan.es ?subject=Contacto por la web"
        className="text-[#83AC50] bg-white border-2 p-2 flex bottom-4 absolute rounded-md right-4  hover:border-white hover:bg-[#83AC50] hover:text-white"
      >Contactanos</a>
    </div>
  </div>
  <div className=" lg:w-1/2 w-full">
    <h2 className="xl:text-2xl text-lg w-full text-center text-gray-900 mb-3">
      OTRAS ACTIVIDADES
    </h2>
    <div className="flex gap-4 md:flex-row flex-col">
      <div className="bg-gradient-to-r from-[#B0CB21] to-[#83AC50] p-4 rounded-md h-48 md:w-1/2 w-full">
        <p className="text-xl text-white">Experiencia EcoIsla.</p>
      </div>
      <div className="flex sm:flex-col flex-row md:w-1/2 gap-2 w-full">
        <div className="bg-[#D9D9D9] p-4 rounded-md h-22 w-full">
          <p className="text-gray-900">
            Colaboraciones con Ayuntamientos de la isla, empresas, colectivos de diferente naturaleza, etc.
          </p>
        </div>
        <div className="bg-[#D9D9D9] p-4 rounded-md h-22 w-full text-gray-900">
          <p>
            Participación en ferias y eventos, con Stand o Carpa EcoIsla.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
}