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
    <div className="mx-3 max-w-[90vw]" {...props}>
      <h2>
        <button
          type="button"
          onClick={() => setStatus(!status)}
          className={`flex items-center justify-between p-5 font-medium rtl:text-right  border border-gray-200 
                  dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400
                      hover:bg-lima hover:text-white w-full
                  dark:hover:bg-gray-800 gap-3
                      ${status ? "bg-lima text-white" : "text-gray-500"}
                      `}
          aria-expanded={`${status}`}
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
        className={!status ? "hidden" : ""}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-lima dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
