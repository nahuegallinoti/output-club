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
      tags: ["hola", "chau"],
    },
    {
      title: "Title",
      description: "Description",
      live: "live",
      code: "code",
      tags: ["hola", "chau"],
    },
    {
      title: "Title",
      description: "Description",
      live: "live",
      code: "code",
      tags: ["hola", "chau"],
    },
    {
      title: "Title",
      description: "Description",
      live: "live",
      code: "code",
      tags: ["hola", "chau"],
    },
  ];

  return (
    <>
      {/* <div className="justify-center mx-10 my-10"> */}
      <section id="streams" className="grid md:grid-cols-2 gap-10">
        {streams.map((stream) => (
          <Card content={stream} />
        ))}
      </section>
      {/* </div> */}
    </>
  );
}

export default StreamsPage;
