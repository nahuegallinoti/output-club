import React from "react";
import Card from "../../components/ui/Card";

function StreamsPage() {
  const streams = [
    {
      id: 1,
      title: "Project 1 is the first title",
      description:
        "Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint et consectetur, pariatur architecto dolore obcaecati dolorem sed assumenda voluptates porro ab qui odit sequi ducimus eveniet totam harum officiis nostrum.",
      live: "live",
      code: "code",
      tags: ["Madrid"],
      images: ["1.jpg", "2.jpg", "3.jpg"],
    },
    {
      id: 2,
      title: "Title",
      description: "Description",
      live: "live",
      code: "code",
      tags: ["Barcelona"],
      images: ["4.jpg", "5.jpg"],
    },
    {
      id: 3,
      title: "Title",
      description: "Description",
      live: "live",
      code: "code",
      tags: ["Malaga"],
      images: ["6.jpg"],
    },
    {
      id: 4,
      title: "Title",
      description: "Description",
      live: "live",
      code: "code",
      tags: ["Tenerife"],
      images: ["7.jpg", "8.jpg", "9.jpg", "10.jpg"],
    },
  ];

  return (
    <>
      <section id="streams" className="grid md:grid-cols-2 gap-10 mx-10 my-20">
        {streams.map((stream) => {
          const style = stream.images.length < 3 ? "flex-col" : "";

          return (
            <div className="flex flex-col flex-wrap">
              <Card
                content={stream}
                style={style}
                articleStyle="grid grid-rows-streams"
              />
            </div>
          );
        })}
      </section>
    </>
  );
}

export default StreamsPage;
