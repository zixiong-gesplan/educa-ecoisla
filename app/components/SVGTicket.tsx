import { SVGCodes } from "../enums/SVG-codes";

export const SVGTicket = () => {
  return (
    <svg data-testid="ticket" className="w-6 h-6 text-custom-light-bg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d={SVGCodes.Ticket} clipRule="evenodd" />
    </svg>
  );
}