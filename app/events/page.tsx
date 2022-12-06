import React from "react";
import Card from "../../components/ui/Card";

const EventsPage = () => {
  const events = [
    {
      title: "Event 1",
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
      <div className="w-1/2 mx-auto my-10 z-10">
        <section>
          {events.map((event) => (
            <Card content={event} />
          ))}
        </section>
      </div>
    </>
  );
};

export default EventsPage;
