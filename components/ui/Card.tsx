import Image from "next/image";
import React from "react";
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
  return (
    <article
      key={content.id}
      className={`${articleStyle} hover:shadow-md hover:shadow-white gap-4 py-2 hover:border-white/60 hover:border-y-[1px] hover:border-x-[1px] items-center bg-black opacity-80 hover:opacity-100 hover:cursor-pointer ${style}
    }`}
    >
      {/* <div className="mx-auto">
        <p className="text-white font-extrabold text-xl">{content.title}</p>
      </div> */}
      <div className="flex bg-black w-fit hover:bg-white">
        <CollapsedMenu tags={content.tags} />
      </div>

      <div className={`flex flex-wrap ${style}`}>
        {content.images.map((image) => (
          <Image
            src={`/images/${image}`}
            width={300}
            height={300}
            alt={""}
            className="opacity-60 hover:opacity-100 rounded-2xl hover:cursor-pointer p-5"
          />
        ))}
      </div>
      <Toast
        title={content.title}
        description={content.description}
        style="relative p-2 hover:p-4"
      />
    </article>
  );
};

export default Card;
