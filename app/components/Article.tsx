import { ArticleProps } from "../types/ArticleProps";

export const Article = ({ children, direction }: ArticleProps) => {
  return (
    <article
      role="article"
      className={`flex ${direction} justify-between items-center max-w-screen-xl px-0 sm:px-2 lg:gap-8 xl:gap-8 py-4 lg:py-8`}
    >
      {children}
    </article>
  );
};
