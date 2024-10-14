'use client';
import { useState } from "react";

interface AccordionitemProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    title: string,
    description: string,
}

export const AccordionItem = ({title, description, ...props}:AccordionitemProps) => {
    const [open, setOpen] = useState(false);

    return <div className="mx-3 max-w-[90vw]" {...props}>
      <h2 id="accordion-collapse-heading-1">
        <button type="button" 
            onClick={() => setOpen(!open)} 
            className={
                `flex items-center justify-between w-full p-5 font-medium rtl:text-right  border border-gray-200 
             dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400
                hover:bg-custom-light-bg hover:text-white w-full
             dark:hover:bg-gray-800 gap-3
                ${open ? "bg-custom-light-bg text-white" : "text-gray-500"}
                `}
             data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1"
        >
            <span>{title}</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
        </button>
    </h2>
    <div id="accordion-collapse-body-1" className={!open ? "hidden" : ""} aria-labelledby="accordion-collapse-heading-1">
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <p className="mb-2 text-custom-light-bg dark:text-gray-400">{description}</p>
        </div>
    </div>
    </div>
}

export const Accordion = () => {
    return (
    <div id="accordion-collapse" data-accordion="collapse" className="md:hidden w-full flex justify-center flex-col  max-w-screen-md" >
        <AccordionItem
            title="Patrimonio Natural de Gran Canaria"
            description="Tiene como objetivo principal dar a conocer la biodiversidad y geología de Gran Canaria a la
                ciudadanía de la isla, como vía fundamental para promover la conservación del territorio,
                su biodiversidad y geodiversidad."
        />
        <AccordionItem
            title="Conservación de la biodiversidad"
            description="Las especies exóticas invasoras (EEI) constituyen la principal amenaza para la conservación de
                la biodiversidad, principalmente en los territorios insulares, dado que la problemática de estas
                especies implica directamente a la sociedad, es primordial la concienciación de la ciudadanía
                en relación con los problemas que ocasionan las EEI en la naturaleza."
        />
        <AccordionItem
            title="Buenas prácticas para la sostenibilidad"
            description="En este eje de actuación estarán comprendidas todas aquellas actuaciones
                diseñadas para promover conductas más sostenibles en la ciudadanía de la isla. Se incluirán
                actividades que incentiven el consumo responsable de recursos, la eficiencia energética, la
                separación de los residuos, etc."
        />
    </div>

    )
}