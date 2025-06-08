import React from "react";
import { useState, useEffect } from "react";
import EventItem from "./EventItem";

const EventList = () => {
  const [events, setEvents] = useState([]);

  const getEvents = async (eventId) => {
    const res = await fetch(
      `https://ventixe24-ezgpaxahheehd3b0.swedencentral-01.azurewebsites.net/api/Events`
    );

    if (res.ok) {
      const response = await res.json();

      setEvents(response.result);
      console.log(response.result);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);
  return (
    <section id="events">
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventList;
