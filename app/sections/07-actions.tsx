import { ActivityTarget } from "../components/ActivityTarget";
import { MoreActivities } from "../components/MoreActivities";

export const Actions = () => {
    return (
        <section className="mx-4 max-w-screen-xl">

            <h2 className="m-6 text-2xl w-full text-center text-gray-900 font-extrabold">ACTIVIDADES</h2>

            <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 xl:gap-12">

                <ActivityTarget size={250} text="Talleres en áula" />
                <ActivityTarget size={250} text="Salidas al campo" />
                <ActivityTarget size={250} text="Rutas al campo" />
                <ActivityTarget size={250} text="Ferias" />
                <ActivityTarget size={250} text="Colaboraciones" />

                <MoreActivities text="Más actividades" />

            </div>

        </section>
    );

}