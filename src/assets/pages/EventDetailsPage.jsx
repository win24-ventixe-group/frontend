import {Link, useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import EventDate from "../components/EventDate";

const EventDetailsPage = () => {
   const {id} = useParams() 
   const [event, setEvent] = useState({})
    
   const getEvent = async () => {
       const res = await fetch(`https://ventixe24-ezgpaxahheehd3b0.swedencentral-01.azurewebsites.net/api/Events/${id}`)
       
       if (res.ok) {
           const response = await res.json()
 
           setEvent(response.result)
       }
   }
   
   useEffect(() => {
       getEvent()
   }, [])
    
    return (
        <div className="event-details">
      {event.image && (
        <div className="event-details-image">
          <img src={event.image} alt={event.title} />
        </div>
      )}

      <div className="event-details-content">
        <h2>{event.title}</h2>

        <div className="event-meta">
          <p className="event-meta-date">
            <EventDate date={event.eventDate} />
          </p>
          <p className="event-meta-location">{event.location}</p>
          <p className="event-meta-price">
            Starts from <span>${event.price}</span>
          </p>
        </div>

        <div className="event-description">
          <h4>About Event</h4>
          <p>{event.description}</p>
        </div>

        <Link className="event-booking-link" to={`/events/booking/${id}`}>
          Book Event
        </Link>
      </div>
    </div>
    )
}

export default EventDetailsPage;