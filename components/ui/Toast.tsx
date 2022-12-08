"use client";

import React, { useState, useRef } from "react";

type ToastProps = {
  title: string;
  description: string;
  style?: string;
  styleExpanded?: string;
};

const Toast = ({ title, description, style, styleExpanded }: ToastProps) => {
  const [hovered, setHovered] = useState(false);

  const toastExpanded = `w-60 h-fit ${styleExpanded}`;
  const toastContracted = `w-48 h-16`;

  const expandToast = () => {
    setHovered(true);
  };

  const contractToast = () => {
    setHovered(false);
  };

  const borders = "border-white hover:border-y-[1px]";
  const transitions = "duration-500 ease-in-out transition-all";
  const props =
    "bg-black text-white font-semibold overflow-hidden z-10 cursor-pointer ";
  const opacity = "hover:opacity-90 opacity-50";

  return (
    <article
      className={`${style} ${borders} ${transitions}  
        ${props} ${opacity} ${hovered ? toastExpanded : toastContracted}`}
      onMouseEnter={expandToast}
      onMouseLeave={contractToast}
    >
      <p className="text-sm mb-2">{title}</p>
      <p className="text-xs">{description}</p>
    </article>
  );
};

export default Toast;
