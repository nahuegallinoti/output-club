import React from "react";
import Card from "../../components/ui/Card";
import { IEvent } from "../../interfaces/Entities/IEvent";
import { ICardStyles } from "../../interfaces/Styles/ICardStyles";

const EventsPage = () => {
  const events: IEvent[] = [
    {
      id: 1,
      title: "Detroit in effect - Lumiere",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur assumenda similique quas, pariatur et deserunt, ipsam quia explicabo aliquam nam autem doloribus accusamus dolor sit in aperiam. ",
      tags: ["LesEnfants"],
      images: ["flyers/1.jpg"],
      type: "event",
      place: "LesEnfants Barcelona",
    },
    {
      id: 2,
      title: "Apollonia",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti aperiam, velit esse, officia nam asperiores reiciendis repellat molestiae",
      tags: ["NOV - 19"],
      images: ["flyers/2.jpg"],
      type: "event",
      place: "Output Barcelona",
    },
    {
      id: 3,
      title: "Amelie Lens",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti aperiam, velit esse, officia nam asperiores reiciendis repellat molestiae",
      tags: ["NOV - 04"],
      images: ["flyers/3.jpg"],
      type: "event",
      place: "Output Barcelona",
    },
    {
      id: 4,
      title: "Oxia",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti aperiam, velit esse, officia nam asperiores reiciendis repellat molestiae",
      tags: ["NOV - 11"],
      images: ["flyers/4.jpg"],
      type: "event",
      place: "LesEnfants Barcelona",
    },
  ];

  const styles: ICardStyles = {
    defaultStyle: "opacity-70 md:w-1/3",
    hoveredStyles:
      "md:w-3/4 cursor-pointer opacity-100 border-[1px] border-white",
    articleStyle:
      "overflow-hidden transition-all duration-500 mx-5 max-h-fit lg:max-w-2/3 sm:w-2/3 md:p-4",
    sectionStyle: "flex sm:flex-row flex-col",
    descriptionStyles: {
      sectionDescriptionStyle:
        "visible flex flex-col px-10 py-5 justify-evenly",
      titleStyle: "font-bold text-2xl bg-white text-black w-fit px-2 py-2",
      descriptionStyle: "font-semibold text-xl text-white",
    },
  };

  return (
    <section className="flex flex-col mt-10 md:gap-20 gap-10 items-center">
      <h1>
        <span className="text-4xl text-white font-bold hover:cursor-default">
          Events
        </span>
        <span className="text-4xl font-bold text-red-600">.</span>
      </h1>

      {events.map((event) => (
        <>
          <div className="px-5 py-2 text-center hover:animate-pulse hover:cursor-default">
            <h1 className="text-md font-extrabold text-red-600 font-centauri tracking-extra">
              {event.title}
            </h1>
            <h1 className="text-xs text-white font-bold mt-2 font-varino tracking-semiextra">
              @ {event.place}
              <span className="text-xs font-bold text-white">.</span>
            </h1>
          </div>
          <Card content={event} key={event.id} styles={styles} />
        </>
      ))}
    </section>
  );
};

export default EventsPage;
