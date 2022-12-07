import Image from "next/image";
import React from "react";
import CollapsedMenu from "./CollapsedMenu";
import Divider from "./Divider";

interface Props {
  content: {
    title: string;
    description: string;
    live: string;
    code: string;
    tags: string[];
    image: string;
  };
  style?: string;
}

const Card = ({ content, style }: Props) => {
  return (
    <article
      className={`grid grid-rows-cardProject gap-4 py-2 rounded-lg border-white/60 border-y-4 border-x-2 items-center bg-projectBackground ${style}
    }`}
    >
      <div className="mx-auto my-2">
        <p className="text-projectTitle font-extrabold text-3xl">
          {content.title}
        </p>
      </div>
      <Divider
        width="w-2/3"
        colorFrom="from-slate-100"
        colorTo="to-slate-500"
      />
      <Image
        src={`/images/${content.image}`}
        width={400}
        height={300}
        alt={""}
        className="rounded-lg shadow-2xl border-white/60 border-2 border-solid mx-auto my-auto mt-2"
      />
      <div className="flex rounded-lg bg-black w-fit hover:bg-slate-700 p-2">
        <CollapsedMenu tags={content.tags} />
      </div>
    </article>
  );
};

export default Card;
