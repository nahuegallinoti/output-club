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
          className={`${styles} tracking-wider px-2 hover:cursor-default transition-colors duration-500 ease-in-out`}
          key={i}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default CollapsedMenu;
