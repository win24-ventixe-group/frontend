import { Link } from "react-router-dom";

const EventItem = ({event}) => {
    return (
       <Link to={`/events/${event.id}`}>
            <div className="event-card">
                <div>{event.title}</div>
            </div>
       </Link>
    )
}

export default EventItem;