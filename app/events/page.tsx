import React from "react";
import Card from "../../components/ui/Card";

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Event 1",
      description: "Description",
      live: "live",
      code: "code",
      tags: ["Dec-22"],
      images: ["1.jpg"],
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
    <>
      <div className="w-5/6 lg:w-2/3 mx-auto my-10 z-10">
        <section>
          {events.map((event) => (
            <Card content={event} style="m-10" />
          ))}
        </section>
      </div>
    </>
  );
};

export default EventsPage;
