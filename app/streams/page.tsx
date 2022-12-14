import React from "react";
import Card from "../../components/ui/Card";
import { IStream } from "../../interfaces/Entities/IStream";
import { ICardStyles } from "../../interfaces/Styles/ICardStyles";

function StreamsPage() {
  const streams: IStream[] = [
    {
      id: 1,
      title: "Traumer - Live",
      description:
        "Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint et consectetur, pariatur architecto dolore obcaecati dolorem sed assumenda voluptates porro ab qui odit sequi ducimus eveniet totam harum officiis nostrum.",
      tags: ["Madrid"],
      images: ["1.jpg", "2.jpg", "3.jpg"],
      type: "stream",
      place: "Output Barcelona",
    },
    {
      id: 2,
      title: "Regal",
      description: "Description",
      tags: ["Barcelona"],
      images: ["4.jpg", "5.jpg"],
      type: "stream",
      place: "LesEnfants Barcelona",
    },
    {
      id: 3,
      title: "Bastian Bux",
      description: "Description",
      tags: ["Malaga"],
      images: ["6.jpg", "7.jpg", "8.jpg"],
      type: "stream",
      place: "LesEnfants Barcelona",
    },
    {
      id: 4,
      title: "Ebali",
      description: "Description",
      tags: ["Tenerife"],
      images: ["9.jpg", "10.jpg"],
      type: "stream",
      place: "Output Barcelona",
    },
  ];

  const styles: ICardStyles = {
    defaultStyle: "cursor-pointer w-fit h-fit",
    hoveredStyles: "cursor-pointer",
    articleStyle:
      "mx-5 max-h-fit sm:h-full sm:w-full md:p-4 overflow-hidden transition-all duration-500",
    sectionStyle:
      "flex flex-col sm:flex-row flex-wrap gap-10 justify-center items-center mx-auto",
    descriptionStyles: {
      sectionDescriptionStyle: "flex flex-col px-10 py-5 justify-evenly",
      titleStyle: "font-bold text-2xl bg-white text-black w-fit px-2 py-2",
      descriptionStyle: "font-semibold text-xl text-white",
    },
    imageStyle:
      "transition-all duration-500 hover:scale-110 hover:shadow-md hover:shadow-cyan-700",
  };

  return (
    <section className="flex flex-col mt-10 md:gap-20 gap-10 items-center">
      <h1>
        <span className="text-4xl text-white font-bold">Streams</span>
        <span className="text-4xl font-bold text-blue-500">.</span>
      </h1>

      {streams.map((stream) => (
        <div>
          <h1 className="text-center my-5">
            <span className="text-lg text-white font-bold hover:border-b-[1px] border-red-700">
              {stream.title} @ {stream.place}
            </span>
            <span className="text-2xl font-bold text-red-500">.</span>
          </h1>
          <Card content={stream} key={stream.id} styles={styles} />
        </div>
      ))}
    </section>
  );
}

export default StreamsPage;
