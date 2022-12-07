"use client";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState, useEffect } from "react";
import img1 from "../../public/images/1.jpg";
import Image from "next/image";

const Slider = (props: any) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const imagesFromProps = props.images || [img1];
  const controls = props.controls || false;

  const nextSlide = () => {
    setActiveSlide(
      activeSlide === imagesFromProps.length - 1 ? 0 : activeSlide + 1
    );
  };

  const prevSlide = () => {
    setActiveSlide(
      activeSlide === 0 ? imagesFromProps.length - 1 : activeSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <section id="slider">
      {imagesFromProps.map((item: any, index: any) => {
        return (
          <div
            key={index}
            className={activeSlide === index ? "flex" : "hidden"}
          >
            {controls && (
              <div className="flex items-center z-10">
                <button
                  className="mr-2 text-5xl border-2 border-white animate-pulse-fast hover:text-black hover:rounded-full rounded-2xl"
                  onClick={() => prevSlide()}
                >
                  <FiChevronLeft color="white" />
                </button>
              </div>
            )}

            <div className="flex sm:h-[85vh]">
              <Image src={item} alt="landscape" />
            </div>

            {controls && (
              <div className="flex items-center z-10">
                <button
                  className="ml-2 text-5xl border-2 border-white animate-pulse-fast hover:text-black hover:rounded-full rounded-2xl"
                  onClick={() => nextSlide()}
                >
                  <FiChevronRight color="white" />
                </button>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
