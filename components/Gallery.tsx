import React from "react";
import Slider from "./ui/Slider";

import img1 from "../public/images/unsplash1.jpg";
import img2 from "../public/images/unsplash2.jpg";
import img3 from "../public/images/unsplash3.jpg";
import img4 from "../public/images/unsplash4.jpg";
import Arrow from "./ui/Arrow";

const Gallery = () => {
  const images = [img1, img2, img3, img4];

  return (
    <>
      <h1 className="text-white font-bold text-5xl justify-center items-center flex pb-4 tracking-widest">
        GALLERY
      </h1>
      <section
        id="gallery"
        className="flex items-center justify-center mx-auto md:w-2/3 mb-5"
      >
        <Arrow type="up" style="right-24" />
        <div className="flex">
          <Slider images={images} controls={true} height="20vh" width="20vw" />
        </div>
      </section>
    </>
  );
};

export default Gallery;
