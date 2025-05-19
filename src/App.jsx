import {Route, Routes} from 'react-router-dom';
import './App.css';
import Events from "./pages/Events.jsx";
import Bookings from "./pages/Bookings.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import EventDetails from "./pages/EventDetails.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/bookings" element={<Bookings />} />
    </Routes>
  )
}

export default App
