import { ImageWrapper as Image } from "../components/Image";
import { ActivityTarjet } from "../components/ActivityTarject";

export const Actions = () => {
    return (
        <section className="mx-4">

            <h2 className="m-6 text-2xl w-full text-center text-gray-900 font-extrabold">ACTIVIDADES</h2>

            <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-12">

                <ActivityTarjet size={250} text="Talleres en áula" />
                <ActivityTarjet size={250} text="Salidas al campo" />
                <ActivityTarjet size={250} text="Rutas al campo" />
                <ActivityTarjet size={250} text="Ferias" />
                <ActivityTarjet size={250} text="Colaboraciones" />

                <div className="lg:col-span-3 h-auto">
                    
                    <div className="flex justify-center items-center h-[23vw] lg:h-[210px] bg-custom-light-bg bg-opacity-10 rounded-lg">

                        <div className="h-4 w-4 lg:h-8 lg:w-8 bg-custom-light-bg rounded-full mx-1 lg:mx-3"></div>
                        <div className="h-4 w-4 lg:h-8 lg:w-8 bg-custom-light-bg rounded-full mx-1 lg:mx-3"></div>
                        <div className="h-4 w-4 lg:h-8 lg:w-8 bg-custom-light-bg rounded-full mx-1 lg:mx-3"></div>


                    </div>
                    <h3 className="w-full text-center text-xs sm:text-lg md:text-2xl xl:text-3xl mt-1 sm:mt-3 md:mt-[-70px] text-custom-light-bg">Más actividades</h3>
                </div>

            </div>

        </section>
    );




}