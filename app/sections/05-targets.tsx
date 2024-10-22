import { Accordion } from "../components/Accordion";
import { Card } from "../components/Card";
import { TARGETS } from "../enums/TARGETS";

export const Targets = () => {
  return (
    <section id="ejes" className="w-full">
      <h3 className="text-center text-2xl sm:text-3xl text-lima bg-opacity-10 rounded-lg mx-3 bg-white font-bold mt-8 p-3 ">
        EJES DE ACTUACIÓN
      </h3>
      <Accordion />
      <div className="mt-2 py-4 lg:px-14 px-4 md:px-12 gap-3 md:gap-8 grid md:grid-cols-1 xl:grid-cols-3">
        {
          TARGETS.map(({ title, description }, index) => (
            <Card key={index} title={title} description={description} />
          ))
        }
      </div>
    </section>
  );
};
