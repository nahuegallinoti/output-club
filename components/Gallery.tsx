import React from "react";
import Slider from "./ui/Slider";

import Arrow from "./ui/Arrow";

const Gallery = () => {
  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
  ];

  return (
    <>
      <h1 className="text-white font-bold text-5xl justify-center items-center flex pb-4 tracking-widest">
        GALLERY
      </h1>
      <section
        id="gallery"
        className="flex items-center justify-center mx-auto md:w-2/3 mb-5"
      >
        <Arrow type="up" style="right-24" animation="animate-bounce" />
        <div className="flex mx-4">
          <Slider images={images} controls={false} height="20vh" width="20vw" />
        </div>
      </section>
    </>
  );
};

export default Gallery;
