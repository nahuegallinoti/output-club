import React from "react";

type Props = {
  tags: string[];
};

const CollapsedMenu = ({ tags }: Props) => {
  return (
    <ul>
      {tags.map((tag: string, i: number) => (
        <li
          className="tracking-wider text-white hover:text-black hover:font-2xl px-4 hover:cursor-default hover:font-bold transition-colors duration-700 ease-in-out"
          key={i}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default CollapsedMenu;
