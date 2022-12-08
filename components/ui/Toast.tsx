"use client";

import React, { useState, useRef } from "react";

type ToastProps = {
  children: React.ReactNode;
  title: string;
  description: string;
};

const Toast = ({ children, title, description }: ToastProps) => {
  const [hovered, setHovered] = useState(false);

  const toastExpanded =
    "sm:h-48 sm:w-96 h-fit w-fit px-4 py-4 mx-12 justify-center flex flex-col transition-height duration-300 ease-in-out transition-width duration-300 ease-in-out";
  const toastContracted =
    "sm:w-48 h-12 w-24 transition-height duration-300 ease-in-out transition-width duration-300 ease-in-out";

  const expandToast = () => {
    setHovered(true);
  };

  const contractToast = () => {
    setHovered(false);
  };

  return (
    <div className="relative z-0">
      {children}
      <div
        className={`cursor-pointer overflow-hidden absolute left-4 right-4 bottom-1/4 z-10 text-white bg-black hover:opacity-90 opacity-70 px-4 font-semibold transition-all ${
          hovered ? toastExpanded : toastContracted
        }`}
        onMouseEnter={expandToast}
        onMouseLeave={contractToast}
      >
        <p className="text-sm text-center flex-grow-0 mt-2">{title}</p>
        <p className="text-xs mt-5">{description}</p>
      </div>
    </div>
  );
};

export default Toast;
