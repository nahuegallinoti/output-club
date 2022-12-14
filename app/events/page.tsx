import React from "react";
import Card from "../../components/ui/Card";

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "LOUD - CONTACT",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur assumenda similique quas, pariatur et deserunt, ipsam quia explicabo aliquam nam autem doloribus accusamus dolor sit in aperiam. ",
      live: "live",
      code: "code",
      tags: ["LesEnfants"],
      images: ["flyers/1.jpg"],
    },
    {
      id: 2,
      title: "APOLLONIA",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti aperiam, velit esse, officia nam asperiores reiciendis repellat molestiae",
      live: "live",
      code: "code",
      tags: ["NOV - 19"],
      images: ["flyers/2.jpg"],
    },
    {
      id: 3,
      title: "AMELIE LENS",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti aperiam, velit esse, officia nam asperiores reiciendis repellat molestiae",
      live: "live",
      code: "code",
      tags: ["NOV - 04"],
      images: ["flyers/3.jpg"],
    },
    {
      id: 4,
      title: "OXIA",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti aperiam, velit esse, officia nam asperiores reiciendis repellat molestiae",
      live: "live",
      code: "code",
      tags: ["NOV - 11"],
      images: ["flyers/4.jpg"],
    },
  ];

  return (
    <section className="flex flex-col my-12 gap-16 z-10 items-center">
      {events.map((event) => (
        <Card content={event} key={event.id} />
      ))}
    </section>
  );
};

export default EventsPage;
