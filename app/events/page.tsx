import React from "react";
import Card from "../../components/ui/Card";

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "TRAUMER",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur assumenda similique quas, pariatur et deserunt, ipsam quia explicabo aliquam nam autem doloribus accusamus dolor sit in aperiam. ",
      live: "live",
      code: "code",
      tags: ["Dec-22"],
      images: ["flyers/flyer1.jpg"],
    },
    {
      id: 2,
      title: "Title",
      description: "Description",
      live: "live",
      code: "code",
      tags: ["Dec-29"],
      images: ["2.jpg"],
    },
    {
      id: 3,
      title: "Title",
      description: "Description",
      live: "live",
      code: "code",
      tags: ["Jan-10"],
      images: ["3.jpg"],
    },
    {
      id: 4,
      title: "Title",
      description: "Description",
      live: "live",
      code: "code",
      tags: ["Feb-02"],
      images: ["4.jpg"],
    },
  ];

  return (
    <section className="flex flex-row flex-wrap w-3/4 mx-auto my-20 gap-10 z-10 justify-between">
      {events.map((event) => (
        <Card content={event} articleStyle="grid grid-rows-events" />
      ))}
    </section>
  );
};

export default EventsPage;
