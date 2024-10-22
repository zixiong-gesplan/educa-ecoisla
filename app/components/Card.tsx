import { CardProps } from "../types/CardProps,";

export const Card = ({ title, description }: CardProps) => {
  return (
    <div
      className="p-2 sm:p-8 bg-white md:bg-lima text-green md:text-white rounded-md sm:rounded-lg
						sm:min-w-[200px] min-w-[300px]
                         border-green border-2 md:border-none hidden md:block"
    >
      <div className="md:border-b-2 md:pb-4 mb-0 md:mb-4">
        <h3 className="text-lg sm:text-2xl">{title}</h3>
      </div>
      <p className="text-xl ">{description}</p>
    </div>
  );
};
