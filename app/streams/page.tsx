import React from "react";
import Card from "../../components/ui/Card";

function StreamsPage() {
  const streams = [
    {
      title: "Project 1 is the first title",
      description:
        "Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint et consectetur, pariatur architecto dolore obcaecati dolorem sed assumenda voluptates porro ab qui odit sequi ducimus eveniet totam harum officiis nostrum.",
      live: "live",
      code: "code",
      tags: ["Madrid"],
      image: "1.jpg",
    },
    {
      title: "Title",
      description: "Description",
      live: "live",
      code: "code",
      tags: ["Barcelona"],
      image: "2.jpg",
    },
    {
      title: "Title",
      description: "Description",
      live: "live",
      code: "code",
      tags: ["Malaga"],
      image: "3.jpg",
    },
    {
      title: "Title",
      description: "Description",
      live: "live",
      code: "code",
      tags: ["Tenerife"],
      image: "4.jpg",
    },
  ];

  return (
    <>
      <section id="streams" className="grid md:grid-cols-2 gap-10 mx-10 my-5">
        {streams.map((stream) => (
          <Card content={stream} style="m-4" />
        ))}
      </section>
    </>
  );
}

export default StreamsPage;
