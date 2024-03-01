import type { Doc } from "../../.contentlayer/generated";
import Link from "next/link";

type Props = {
  doc: Doc;
};

export const Article: React.FC<Props> = ({ doc }) => {
  return (
    <Link href={`${doc.slug}`}>
      <article className="p-4 md:p-8">
        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
          {doc.title}
        </h2>
        <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {doc.description}
        </p>
      </article>
    </Link>
  );
};
