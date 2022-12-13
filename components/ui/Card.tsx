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

  const hoveredStyles = "cursor-pointer text-center";

  return (
    <article
      key={content.id}
      className={`${articleStyle} border-[1px] border-white mx-5 sm:w-2/3
      ${hovered ? hoveredStyles : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered ? (
        <>
          <section className="w-fit bg-white text-black font-bold -rotate-45 relative top-4 right-3">
            <CollapsedMenu tags={content.tags} />
          </section>

          <section className={`${style}`}>
            {content.images.map((image) => (
              <Image
                src={`/images/${image}`}
                width={500}
                height={500}
                alt={content.title}
                key={content.id}
              />
            ))}
          </section>
        </>
      ) : (
        <>
          <section className="w-fit bg-black text-white font-bold">
            <CollapsedMenu tags={content.tags} />
          </section>

          <section className="text-white">
            <p className="font-bold text-xl my-5">{content.title}</p>
            {content.images.map((image) => (
              <div className="flex justify-center" key={content.id}>
                <Image
                  src={`/images/${image}`}
                  width={250}
                  height={250}
                  alt={content.title}
                />
              </div>
            ))}
            <p className="font-semibold text-left px-10 my-5">
              {content.description}
            </p>
          </section>
        </>
      )}
    </article>
  );
};

export default Card;
