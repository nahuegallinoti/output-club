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
  };
}

const Card = ({ content }: Props) => {
  return (
    <article
      className={`grid grid-rows-cardProject gap-4 py-2 rounded-lg  border-white/60 border-y-4 border-x-2 items-center bg-projectBackground my-5
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
      <p className="text-white text-xl px-12 py-6">{content.description}</p>
      <div className="flex overflow-auto mt-10 mx-auto gap-10 text-white">
        <button className="bg-slate-500 rounded-xl px-4 py-2 hover:bg-white hover:text-black hover:font-bold">
          <a href="" target="_blank" rel="noopener noreferrer">
            {content.live}
          </a>
        </button>
        <button className="bg-slate-500 rounded-xl px-4 py-2 hover:bg-white hover:text-black hover:font-bold">
          <a href="" target="_blank" rel="noopener noreferrer">
            {content.code}
          </a>
        </button>
      </div>
      <div className="flex p-1 overflow-auto rounded-lg bg-gray-800/50 w-2/3 justify-center hover:bg-slate-500">
        <CollapsedMenu tags={content.tags} />
      </div>
    </article>
  );
};

export default Card;
