"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IEventProps } from "../../interfaces/Pages/IEventProps";

const Card = ({ content, styles }: IEventProps) => {
  const [hovered, setHovered] = useState(false);

  const defaultStyle = `${styles?.defaultStyle}`;
  const hoveredStyle = `${styles?.hoveredStyles}`;
  const articleStyle = `${styles?.articleStyle}`;
  const sectionStyle = `${styles?.sectionStyle}`;

  const sectionDescriptionStyle = `${styles?.descriptionStyles?.sectionDescriptionStyle}`;
  const titleStyle = `${styles?.descriptionStyles?.titleStyle}`;
  const descriptionStyle = `${styles?.descriptionStyles?.descriptionStyle}`;

  const imageStyle = `${styles?.imageStyle}`;

  return (
    <>
      <article
        key={content.id}
        className={`${articleStyle} ${hovered ? hoveredStyle : defaultStyle}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <section className={`${sectionStyle}`}>
          {content.images.map((image) => (
            <Image
              src={`/images/${image}`}
              alt={content.title}
              key={content.id}
              width={450}
              height={500}
              className={`${imageStyle}`}
            />
          ))}

          {hovered && content.type == "event" ? (
            <section className={`${sectionDescriptionStyle}`}>
              <p className={`${titleStyle}`}>{content.title}</p>
              <p className={`${descriptionStyle}`}>{content.description}</p>
            </section>
          ) : null}
        </section>
      </article>
    </>
  );
};

export default Card;
