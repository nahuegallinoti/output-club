import Image from "next/image";
import React from "react";
import CollapsedMenu from "./CollapsedMenu";
import Divider from "./Divider";

interface Props {
  content: {
    id: number;
    title: string;
    description: string;
    live: string;
    code: string;
    tags: string[];
    images: string[];
  };
  style?: string;
}

const Card = ({ content, style }: Props) => {
  return (
    <article
      key={content.id}
      className={`h-full grid grid-rows-cardProject gap-4 py-2 rounded-lg border-white/60 border-y-4 border-x-2 items-center bg-black opacity-70 hover:opacity-100 hover:cursor-pointer ${style}
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

      <div className={`flex flex-wrap ${style}`}>
        {content.images.map((image) => (
          <Image
            src={`/images/${image}`}
            width={300}
            height={300}
            alt={""}
            className="opacity-70 hover:opacity-100 rounded-2xl mx-auto hover:scale-105 hover:cursor-pointer hover:shadow-inner hover:shadow-cyan-900 px-4 py-4"
          />
        ))}
      </div>
      <div className="flex rounded-lg bg-black w-fit hover:bg-slate-700 p-2">
        <CollapsedMenu tags={content.tags} />
      </div>
    </article>
  );
};

export default Card;
