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
    <div className="z-10 bg-black w-screen h-screen relative pt-5 mb-5">
      <section
        id="gallery"
        className="flex items-center justify-center mx-auto w-full z-10 bg-black"
      >
        {/* <div className="invisible lg:visible z-10">
          <Arrow type="up" style="right-24" />
        </div> */}
        <div className="flex mx-4 h-full">
          <Slider images={images} controls={false} height="auto" width="auto" />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
