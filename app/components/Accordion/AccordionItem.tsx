"use client";

import { AccordionItemProps } from "@/app/types/Accordion";
import { useState } from "react";

export const AccordionItem = ({
  title,
  description,
  ...props
}: AccordionItemProps) => {
  const [status, setStatus] = useState(false);

  return (
    <div className="mx-3" {...props}>
      <h2>
        <button
          type="button"
          onClick={() => setStatus(!status)}
          className={`flex text-custom-light-bg items-center justify-between p-5 font-medium rtl:text-right border border-gray-200 
                      hover:bg-custom-light-bg hover:text-white w-full gap-3
                      ${status ? "bg-custom-light-bg text-white" : "text-gray-500"}
                    `}
          aria-labelledby="accordion-collapse-heading-1"
          aria-expanded={status}
        >
          <span>{title}</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={!status ? "hidden" : ""}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-lima dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};