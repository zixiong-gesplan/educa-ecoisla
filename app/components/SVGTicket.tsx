import { SVG } from "../enums/SVG";

export const SVGTicket = () => {
  return (
    <svg
      className="w-6 h-6 text-lima dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path fillRule="evenodd" d={SVG.TICKET} clipRule="evenodd" />
    </svg>
  );
};
