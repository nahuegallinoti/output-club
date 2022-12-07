import React from "react";
import Slider from "./ui/Slider";

import img1 from "../public/images/1.jpg";
import img2 from "../public/images/2.jpg";
import img3 from "../public/images/3.jpg";
import img4 from "../public/images/4.jpg";
import img5 from "../public/images/5.jpg";
import img6 from "../public/images/6.jpg";
import img7 from "../public/images/7.jpg";
import img8 from "../public/images/8.jpg";
import img9 from "../public/images/9.jpg";
import img10 from "../public/images/10.jpg";

import Arrow from "./ui/Arrow";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

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
        <div className="flex">
          <Slider images={images} controls={false} height="20vh" width="20vw" />
        </div>
      </section>
    </>
  );
};

export default Gallery;
