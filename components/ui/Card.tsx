"use client";

import Image from "next/image";
import React from "react";
import CollapsedMenu from "./CollapsedMenu";

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

  const hoveredStyles =
    "hover:shadow-md hover:shadow-white hover:border-white/60 hover:border-y-[1px] hover:border-x-[1px] hover:opacity-100 hover:cursor-pointer";

  return (
    <article
      key={content.id}
      className={`${hoveredStyles} ${style} ${articleStyle} items-center opacity-80 transition-all w-fit h-full
      ${hovered ? "bg-transparent text-center w-1/2 h-full" : "bg-black"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered ? (
        <section className="flex w-fit bg-white text-black font-bold">
          <CollapsedMenu tags={content.tags} />
        </section>
      ) : null}

      <section className={`flex flex-wrap ${style}`}>
        {content.images.map((image) => (
          <Image
            src={`/images/${image}`}
            width={500}
            height={500}
            alt={content.title}
            className={`${hovered ? "invisible" : "visible"}`}
          />
        ))}
      </section>
      {hovered ? (
        <>
          <section className="flex flex-col gap-5 h-[70vh] left-0 right-0 text-white">
            <p className="font-bold text-xl">{content.title}</p>
            <CollapsedMenu tags={content.tags} styles="bg-red-800" />
            {content.images.map((image) => (
              <article className="flex justify-center">
                <Image
                  src={`/images/${image}`}
                  width={250}
                  height={250}
                  alt={content.title}
                />
              </article>
            ))}
            <p className="font-semibold text-left px-10 justify-center items-center">
              {content.description}
            </p>
          </section>
        </>
      ) : null}
    </article>
  );
};

export default Card;
