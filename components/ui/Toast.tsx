"use client";

import React, { useState, useRef } from "react";

type ToastProps = {
  children: React.ReactNode;
  title: string;
  description: string;
};

const Toast = ({ children, title, description }: ToastProps) => {
  const [hovered, setHovered] = useState(false);
  const descriptionRef =
    useRef() as React.MutableRefObject<HTMLParagraphElement>;

  const toastExpanded =
    "sm:h-48 sm:w-96 p-4 h-fit w-fit mx-12 items-center justify-center flex flex-col transition-height duration-300 ease-in-out transition-width duration-300 ease-in-out";
  const toastContracted =
    "h-10 w-24 sm:h-10 sm:w-48 transition-height duration-300 ease-in-out transition-width duration-300 ease-in-out";

  const expandToast = () => {
    // Apply the "typewriter" animation to the description element
    descriptionRef.current.style.animation =
      "typewriter 2s steps(20, end) 1s 1 normal both";
    descriptionRef.current.style.width = "100%";
    setHovered(true);
  };

  const contractToast = () => {
    // Remove the "typewriter" animation from the description element
    descriptionRef.current.style.animation = "";
    setHovered(false);
  };

  return (
    <div className="relative z-0 cursor-pointer">
      {children}
      <div
        className={`overflow-hidden absolute left-4 right-4 bottom-0 top-12 z-10 text-black bg-zinc-300 hover:opacity-90 opacity-30 px-4 font-semibold transition-all ${
          hovered ? toastExpanded : toastContracted
        }`}
        onMouseEnter={expandToast}
        onMouseLeave={contractToast}
      >
        <p className="text-sm text-center flex-grow-0 mt-2">{title}</p>
        <p ref={descriptionRef} className="text-xs mt-5">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Toast;
