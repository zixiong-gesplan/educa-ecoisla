import { ActivityTarjet } from "../components/ActivityTarject";
import { MoreActivities } from "../components/MoreActivities";

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

                <MoreActivities text="Más actividades" />

            </div>

        </section>
    );




}