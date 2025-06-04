import { Link } from "react-router-dom";

const EventItem = ({event}) => {
    return (
        <h2>
            <Link to={`/events/${event.id}`}>
                {event.title}
            </Link>
        </h2>
       
    )
}

export default EventItem;