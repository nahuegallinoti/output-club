"use client";

import Image from "next/image";
import React, { useState } from "react";
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
  const [hovered, setHovered] = useState(false);

  const hoveredStyles =
    "md:w-2/3 cursor-pointer opacity-100 border-[1px] border-white";

  return (
    <>
      <article
        key={content.id}
        className={`${articleStyle} shadow-inner shadow-cyan-800 overflow-hidden transition-all duration-500 mx-5
        lg:max-w-2/3 max-h-fit sm:w-2/3 md:w-1/3 md:p-4 
        ${hovered ? hoveredStyles : "opacity-70"}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <section className={`${style} flex sm:flex-row flex-col`}>
          {content.images.map((image) => (
            <Image
              src={`/images/${image}`}
              alt={content.title}
              key={content.id}
              width={450}
              height={500}
            />
          ))}

          {hovered ? (
            <div className="visible flex flex-col px-10 py-5 justify-evenly">
              <p className="font-bold text-2xl bg-white text-black w-fit px-2 py-2">
                {content.title}
              </p>
              <p className="font-semibold text-xl text-white">
                {content.description}
              </p>
            </div>
          ) : null}
        </section>
      </article>
    </>
  );
};

export default Card;
