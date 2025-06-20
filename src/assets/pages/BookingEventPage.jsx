import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookingEventPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [formData, setFormData] = useState({
    eventId: id,
    firstName: "",
    lastName: "",
    email: "",
    streetName: "",
    postalCode: "",
    city: "",
    ticketQuantity : 1
  });

  useEffect(() => {
    getEvent();
  }, []);

  const getEvent = async () => {
    try {
      const res = await fetch(
        `https://ventixe24-ezgpaxahheehd3b0.swedencentral-01.azurewebsites.net/api/Events/${id}`
      );

      if (!res.ok) throw new Error(!"Failed to fetch event");

      const data = await res.json();
      setEvent(data.result);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    
      const res = await fetch(
        `https://bookingserviceventixe24-g7fqecbrcgfpftdv.swedencentral-01.azurewebsites.net/api/booking`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      

      if (!res.ok) {
        console.log("Booking failed");
      } else {
        console.log("Booking successfull");
        navigate("/");
      }
    } catch (err) {
      console.error("Error submitting booking", err);
    }
  };

  return (
    <div className="booking-card">
      <h2 className="booking-title">Book Event - {event.title}</h2>
    
        <form className="booking-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Street Name</label>
            <input
              type="text"
              name="streetName"
              value={formData.streetName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <button className="booking-button" type="submit">Book Now</button>
        </form>
      </div>
    
  );
};

export default BookingEventPage;
