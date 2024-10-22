import { AccordionItem } from "./AccordionItem";
import { TARGETS } from "@/app/enums/TARGETS";
export const Accordion = () => {
  return (
    <div
      id="accordion-collapse"
      data-accordion="collapse"
      className="md:hidden w-full flex justify-center flex-col  max-w-screen-md"
    >
      {TARGETS.map(({title,description}, index) => (
        <AccordionItem
          key={index}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
};
