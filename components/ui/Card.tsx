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
      className={`h-full grid grid-rows-cardProject gap-4 py-2 hover:border-white/60 hover:border-y-[1px] hover:border-x-[1px] items-center bg-black opacity-80 hover:opacity-100 hover:cursor-pointer ${style}
    }`}
    >
      <div className="mx-auto my-2 p-2">
        <p className="text-white font-extrabold text-xl">{content.title}</p>
      </div>

      <div className={`flex flex-wrap ${style}`}>
        {content.images.map((image) => (
          <Image
            src={`/images/${image}`}
            width={300}
            height={300}
            alt={""}
            className="opacity-60 hover:opacity-100 rounded-2xl mx-auto hover:scale-105 hover:cursor-pointer px-4 py-4"
          />
        ))}
      </div>
      <div className="flex bg-black w-fit hover:bg-slate-700">
        <CollapsedMenu tags={content.tags} />
      </div>
    </article>
  );
};

export default Card;
