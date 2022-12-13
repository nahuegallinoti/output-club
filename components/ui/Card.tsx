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

  const hoveredStyles = "cursor-pointer opacity-100 w-2/3";

  return (
    <>
      <article
        key={content.id}
        className={`${articleStyle} border-[1px] border-white mx-5 transition-all duration-200
      ${hovered ? hoveredStyles : "opacity-70 w-1/3 overflow-hidden"}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* <section className="text-center w-fit bg-white text-black font-bold -rotate-45 relative top-5 right-7">
          <CollapsedMenu tags={content.tags} />
        </section> */}

        <section className={`${style} flex flex-row`}>
          {content.images.map((image) => (
            <Image
              src={`/images/${image}`}
              width={500}
              height={500}
              alt={content.title}
              key={content.id}
            />
          ))}

          <div className="invisible lg:visible flex flex-col text-white text-left text-2xl px-10 justify-evenly">
            <p className="font-bold bg-white text-black w-fit px-2">
              {content.title}
            </p>
            {hovered ? (
              <p className="font-semibold">{content.description}</p>
            ) : null}
          </div>
        </section>
      </article>
    </>
  );
};

export default Card;
