import { Link } from "react-router-dom";
import EventDate from "./EventDate";

const EventItem = ({event}) => {
    
    return (
        <div className="event-card">
            <div className="event-card-image">
                <img src={event.image}  alt={event.title} />
            </div>
            <div className="event-card-body">
            <small className="event-card-date"><EventDate date={event.eventDate} /></small>
                <h2 className="event-card-title">
                    <Link to={`/events/${event.id}`}>
                        {event.title}
                    </Link>
                </h2>
                <p className="event-card-location">{event.location}</p>
                <p className="event-card-price">${event.price}</p>
            </div>
        </div> 
    )
}

export default EventItem;