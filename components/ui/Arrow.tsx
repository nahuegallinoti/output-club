"use client";

import React from "react";

import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

import "animate.css";

interface ArrowProps {
  type: "up" | "down";
  style?: string;
  animation?: "animate-bounce" | "animate-pulse";
}

const Arrow = (props: ArrowProps) => {
  const handleClick = () => {
    if (props.type === "up") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`absolute cursor-pointer text-6xl hover:animate-none text-white hover:text-gray-200 ${props.style} ${props.animation}`}
      onClick={handleClick}
    >
      {props.type === "up" ? (
        <BsFillArrowUpCircleFill />
      ) : (
        <BsFillArrowDownCircleFill />
      )}
    </div>
  );
};

export default Arrow;
