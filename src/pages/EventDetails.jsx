import {useParams} from "react-router-dom";

const EventDetails = () => {
   const {id} = useParams() 
    
    return (
        <div>Events</div>
    )
}

export default EventDetails;