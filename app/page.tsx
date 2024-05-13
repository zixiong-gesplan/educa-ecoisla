import Image from "next/image";
import Link from "next/link";

const Target = ({children,text}:{
  children: React.ReactNode;
  text: string;
}) =>{
  return <div className="flex flex-col items-center mt-8">
        {/* <svg className="w-[64px] h-[64px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 9H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6m0-6v6m0-6 5.419-3.87A1 1 0 0 1 18 5.942v12.114a1 1 0 0 1-1.581.814L11 15m7 0a3 3 0 0 0 0-6M6 15h3v5H6v-5Z"/>
        </svg> */}

        {children}
        <p className="text-center text-zinc-50 border-b-2 pb-4 text-2xl grow	md:max-w-80 sm:w-full">
          {text}
        </p>
  </div>

}

const Card = ({title, description}:{title:string, description:string}) =>{
  return  <div className="p-8 bg-[#83AC50] text-[#ffffff] rounded-lg	sm:min-w-[200px] min-w-[300px] max-w-[650px]">
            <div className=" border-b-2 pb-4 mb-4">
              <h3 className="text-2xl">
                {title}
              </h3>
            </div>
            <p className="text-xl">
              {description}
            </p>
          </div>
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="relative w-full flex py-auto items-center -top-[80px] overflow-hidden ">
        <Image 
          src="/landing_2.png" 
          alt="Landing" 
          unoptimized={true}
          // fill={true}
          width={0}
          height={0}
          className="w-full relative self-center min-w-[1420px] scale-down object-center	
"
        />
        <p className="z-10 absolute right-0 text-[#B0CB21] font-bold mr-4 text-4xl text-right align-middle backdrop-blur-sm bg-black/35 p-2 w-full sm:w-1/2 lg:text-5xl uppercase font-bold rounded-md">
          La <span className="text-[#DCE385]">educación ambiental</span> supone una pieza fundamental para la conservación del <span className="text-[#64ACAA]">territorio.</span>
        </p>
      </section>
      <section className="m-4 mt-2 text-xl mx-auto max-w-screen-xl px-8">
        <p className="font-bold text-2xl text-[#024E3D]">
          La conservación de la vida silvestre como vía prioritaria para garantizar el mantenimiento de
          la riqueza, la diversidad genética y de los procesos ecológicos esenciales.
        </p>
        <p className="text-2xl">
          En el caso de Canarias es una herramienta imprescindible para trabajar en pro de la preservación y
          conservación de su rica biodiversidad y entornos naturales únicos.
        </p>
        <div className="flex flex-col lg:flex-row lg:pt-8 ">
          <Image
            src="/informacion.png"
            alt="informacion"
            unoptimized={true}
            width={0}
            height={0}
            className="w-full lg:w-1/2"
          />
          <div className="lg:pl-8 flex flex-col justify-between ">
            <p className="text-xl">
              La aprobación en 2015 de la Agenda 2030 para el Desarrollo Sostenible, por parte de la
              Asamblea General de Naciones Unidas, supuso un gran reto para el avance en diferentes
              aspectos de cara a la mejora de las condiciones de vida en el planeta.
            </p>
            <p className="text-xl">
              Desde la Consejería de Medio Ambiente, Clima, Energía y Conocimiento del Cabildo de Gran
              Canaria, se ha querido iniciar la puesta en marcha de un Plan de Acción de Educación
              Ambiental para la Sostenibilidad con el fin de trabajar los problemas que inciden
              en el medio ambiente desde una perspectiva global y preventiva.
            </p>
            <p className="text-xl">
            Se trata de un Plan que reúne una serie de acciones con las que se pretende promover la
concienciación social sobre los temas que afectan en la actualidad a la conservación del medio
natural. Así, se han incluido temas relacionados con la conservación de la biodiversidad, la
adquisición de buenas prácticas relacionadas con la eficiencia energética, el consumo responsable de los recursos, como agua y electricidad, la reducción y reciclaje de residuos, entre otros. 
            </p>
          </div>
        </div>       
      </section>
      <section className="bg-[#B0CB21] p-8 w-full">
        <h1 className="font-bold text-zinc-50 text-center text-2xl">OBJETIVOS GENERALES</h1>
        <div className="flex flex-wrap	w-full justify-between gap-2 mx-auto max-w-screen-xl">
          <Target text="Implementamos  actividades de educación ambiental con mejoras continuas.">
            <svg className="w-[64px] h-[64px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="white" strokeLinecap="round" strokeWidth="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
            </svg>
            
          </Target>
          <Target text="Realizamos formación para el profesorado y colectivos de profesionales de educación ambiental.">
            <svg className="w-[64px] h-[64px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 5V4a1 1 0 0 0-1-1H8.914a1 1 0 0 0-.707.293L4.293 7.207A1 1 0 0 0 4 7.914V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5M9 3v4a1 1 0 0 1-1 1H4m11.383.772 2.745 2.746m1.215-3.906a2.089 2.089 0 0 1 0 2.953l-6.65 6.646L9 17.95l.739-3.692 6.646-6.646a2.087 2.087 0 0 1 2.958 0Z"/>
            </svg>

          </Target>
          <Target text="Promoción de los escenarios de intervención educativa en la naturaleza.">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width={24}
                height={24}
                viewBox="0 0 489.9 489.9"
                fill="white"
                className="w-[64px] h-[64px]  text-gray-800 dark:text-white"
              >
                <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M343.9 179.25c0 52.1 32.3 93.8 73 93.8s73-41.7 73-93.8c0-43.8-22.8-80.2-54.2-90.7-7.2-50.3-51-88.5-105.3-88.5-58.4 0-106.3 45.9-106.3 103.2v23.6c-18.1-14.1-41.3-22.5-66.7-22.5-53 0-97.4 37.9-105.1 87.8-30.6 10.7-52.3 46.1-52.3 89.4 0 52.1 31.3 92.8 71.9 92.8 39.6 0 71.9-40.7 71.9-92.8 0-41.9-20.2-76.4-49.3-88.3 6.8-27.6 32.7-48.2 63.9-48.2 36.5 0 65.7 28.1 65.7 62.5v217c-7.6 1.7-15 4.8-21.9 9.2-8.3 5.2-19.8 5.2-28.1 0-21.9-14.6-51.1-14.6-73 0l-29.2 18.6c-9.4 6.3-12.5 18.8-6.3 28.1 3.1 6.3 10.4 9.4 16.7 9.4 10.4 0 41.7-22.9 41.7-22.9 8.3-5.2 19.8-5.2 28.1 0 22.9 14.6 51.1 14.6 74 0 8.3-5.2 19.8-5.2 28.1 0 45 35.9 87.6-2.1 87.6-2.1 8.3-5.2 19.8-5.2 28.1 0l25 17.7c9.4 6.3 21.9 3.1 28.1-6.3 6.3-9.4 3.1-21.9-6.3-28.1l-25-16.7c-21.9-14.6-51.1-14.6-73 0 0 0-19.5 18.2-37.5 6.3-2.9-3.4-13.6-9-17.7-10.5v-324.1c0-34.4 29.2-62.5 65.7-62.5 31.8 0 58 21.4 64.3 49.6-28.9 12.4-49.6 47.4-49.6 89zm-272 153.3c-14.6 0-31.3-21.9-31.3-52.1s16.7-52.1 31.3-52.1 30.2 21.9 31.3 52.1c-.1 30.2-16.7 52.1-31.3 52.1zm345-206.4c15.6 0 32.3 21.9 31.3 53.2 0 31.3-16.7 53.2-31.3 53.2s-31.3-21.9-31.3-53.2 16.7-53.2 31.3-53.2z" />
              </svg>
          </Target>
          <Target text="Comunicación y divulgación ambiental.">
            <svg className="w-[64px] h-[64px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 9H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6m0-6v6m0-6 5.419-3.87A1 1 0 0 1 18 5.942v12.114a1 1 0 0 1-1.581.814L11 15m7 0a3 3 0 0 0 0-6M6 15h3v5H6v-5Z"/>
            </svg>

          </Target>
          <Target text="Buscamos la innovación e investigación en el ámbito educativo.">
            <svg
              className="w-[64px] h-[64px] text-gray-800 dark:text-white" aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              viewBox="0 0 256 256"
            >
              <path
                fill="white"
                stroke="white"
                strokeWidth={4}
                d="M246 36.9c0-15-12.1-27.1-27.1-27.1S191.8 22 191.8 36.9c0 9.2 4.5 17.2 11.5 22.1l-19 56.4-7.3 21.2c-1.3-.1-2.6-.2-3.9-.2-5.5 0-10.7 1.4-15.3 3.8l-44.6-47.3c1.6-3.5 2.5-7.3 2.5-11.4 0-15-12.1-27.1-27.1-27.1-15 0-27.1 12.1-27.1 27.1 0 8 3.5 15.2 9 20.2L43.8 181h-1.1c-18 0-32.7 14.6-32.7 32.7 0 18 14.6 32.6 32.6 32.6s32.6-14.6 32.6-32.6c0-11.1-5.5-20.9-14-26.8l26.4-78.2h.9c4.1 0 8-.9 11.5-2.6l44.5 47.2c-2.6 4.7-4.1 10.1-4.1 15.9 0 18 14.6 32.6 32.6 32.6s32.6-14.6 32.6-32.6c0-10-4.5-18.9-11.5-24.9l27-80.2c14-1.3 24.9-13 24.9-27.2z"
              />
            </svg>

          </Target> 
          {/*
          */}
        </div>
      </section>
      <section className="py-4 lg:px-24 px-8 md:px-16 gap-12 grid lg:grid-cols-3 md:grid-cols-2 auto-cols-[minmax(300px,_1fr)]">
          <Card title="Patrimonio Natural de Gran Canaria"
            description="Tiene como objetivo principal dar a conocer la biodiversidad y geología de Gran Canaria a la
            ciudadanía de la isla, como vía fundamental para promover la conservación del territorio,
            su biodiversidad y geodiversidad."
          
          ></Card>
          <Card
            title="Conservación de la biodiversidad"
            description="Las especies exóticas invasoras (EEI) constituyen la principal amenaza para la conservación de
            la biodiversidad, principalmente en los territorios insulares, dado que la problemática de estas
            especies implica directamente a la sociedad, es primordial la concienciación de la ciudadanía
            en relación con los problemas que ocasionan las EEI en la naturaleza."
          ></Card>
          <Card title="Buenas prácticas para la sostenibilidad" 
            description="En este eje de actuación estarán comprendidas todas aquellas actuaciones
            diseñadas para promover conductas más sostenibles en la ciudadanía de la isla. Se incluirán
            actividades que incentiven el consumo responsable de recursos, la eficiencia energética, la
            separación de los residuos, etc."
          ></Card>
      </section>
      <section className="px-8 flex flex-col gap-4">
          <h2 className="text-2xl w-full text-center">INSTRUMENTOS PARA ESTAS LABORES</h2>
          <p className="text-center">
           <b className="font-black	">Programa de Educación Ambiental</b>, promover actividades educativas destinadas a la ciudadania de Gran Canaria mediante el ámbito formal y no formal (centros escolares, colectivos, administraciones locales, etc.), a través de acciones como salidas de campo, campañas de sensibilización, jornadas de voluntariado, etc.
          </p>
          <p className="text-center">
           <b className="font-black	">Programa de Divulgación Ambiental</b>, 
           mediante el que se elaboran materiales divulgativos, promoviendo la difusión de contenidos para el fomento de la concienciación social en determinados ámbitos.
          </p>
      </section>
      <section className="px-8 flex gap-8 flex-col md:flex-row">
        <div className=" md:w-1/2 w-full">
          <h2 className="text-2xl w-full text-center">
            ACTIVIDADES CON LA COMUNIDAD EDUCATIVA
          </h2>
          <div className="bg-gradient-to-r from-[#B0CB21] to-[#83AC50] p-4 rounded-s h-48 relative">
            <p className="text-xl text-white">
              Talleres y Salidas de campo con la Comunidad educativa.
            </p>
            <a href="mailto:educaecoisla@gesplan.es ?subject=Contacto por la web"
              className="text-[#83AC50] bg-white border-2 p-2 flex bottom-4 absolute rounded-md right-4  hover:border-white hover:bg-[#83AC50] hover:text-white"
            >Contactanos</a>
          </div>
        </div>
        <div className=" md:w-1/2 w-full">
          <h2 className="text-2xl w-full text-center">
            OTRAS ACTIVIDADES
          </h2>
          <div className="flex gap-4 md:flex-row flex-col">
            <div className="bg-gradient-to-r from-[#B0CB21] to-[#83AC50] p-4 rounded-s h-48 md:w-1/2 w-full">
              <p className="text-xl text-white">Experiencia EcoIsla.</p>
            </div>
            <div className="flex sm:flex-col flex-row md:w-1/2 gap-2 w-full">
              <div className="bg-[#D9D9D9] p-4 rounded-s h-22 w-full">
                <p>
                  Colaboraciones con Ayuntamientos de la isla, empresas, colectivos de diferente naturaleza, etc.
                </p>
              </div>
              <div className="bg-[#D9D9D9] p-4 rounded-s h-22 w-full">
                <p>
                  Participación en ferias y eventos, con Stand o Carpa EcoIsla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-48"></section>
    </main>
  );
}
