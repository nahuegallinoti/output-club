import React from "react";

type Props = {
  tags: string[];
  styles?: string;
};

const CollapsedMenu = ({ tags, styles }: Props) => {
  return (
    <ul>
      {tags.map((tag: string, i: number) => (
        <li
          className={`${styles} tracking-wider hover:font-2xl px-4 hover:cursor-default hover:font-bold transition-colors duration-700 ease-in-out`}
          key={i}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default CollapsedMenu;
