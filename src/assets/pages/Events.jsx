import {useEffect, useState} from "react";
import EventCard from "../assets/components/EventCard";

const Events = () => {
    const [events, setEvents] = useState([])
    
    const getEvents = async (eventId) => {
        const res = await fetch(``)
        
        if (res.ok) {
            const data = await res.json()
            setEvents(data)
        }
    }
    
    useEffect(() => {
        getEvents()
    }, [])
    
    return (
        <div>
            <h2>Events</h2>
            {
                events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))
            }
        </div>
    )
}

export default Events;