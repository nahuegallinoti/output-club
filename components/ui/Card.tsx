"use client";

import Image from "next/image";
import React, { useState } from "react";
import CollapsedMenu from "./CollapsedMenu";
import Toast from "./Toast";

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
  articleStyle?: string;
}

const Card = ({ content, style, articleStyle }: Props) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <article
      key={content.id}
      className={`${articleStyle} hover:shadow-md hover:shadow-white gap-4 py-2 hover:border-white/60 hover:border-y-[1px] hover:border-x-[1px] items-center opacity-80 hover:opacity-100 hover:cursor-pointer transition-all w-1/3 h-1/3 ${style}
      ${hovered ? "bg-transparent text-center" : "bg-black"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered ? (
        <div className="flex bg-black w-fit hover:bg-white">
          <CollapsedMenu tags={content.tags} />
        </div>
      ) : null}

      <div className={`flex flex-wrap ${style}`}>
        {content.images.map((image) => (
          <Image
            src={`/images/${image}`}
            width={500}
            height={500}
            alt={content.title}
            className={`${
              hovered ? "invisible" : "visible"
            } hover:opacity-100 rounded-2xl hover:cursor-pointer`}
          />
        ))}
      </div>
      {/* <Toast
        title={content.title}
        description={content.description}
        style="relative"
        styleExpanded="w-60 h-fit"
        styleContracted="w-48 h-4"
      /> */}
      {hovered ? (
        <div className="flex flex-col relative left-0 right-0 text-white">
          <p className="font-bold text-center text-xl">{content.title}</p>
          <p className="font-semibold text-left pl-4 py-4">
            {content.description}
          </p>
        </div>
      ) : null}
    </article>
  );
};

export default Card;
