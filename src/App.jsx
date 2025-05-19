import {Route, Routes} from 'react-router-dom';
import './App.css';
import Events from "./assets/pages/Events.jsx";
import Bookings from "./assets/pages/Bookings.jsx";
import Dashboard from "./assets/pages/Dashboard.jsx";
import EventDetails from "./assets/pages/EventDetails.jsx";
import CenterLayout from './assets/layouts/CenterLayout.jsx';
import PortalLayout from './assets/layouts/PortalLayout.jsx';



function App() {
  return (
    <Routes>
      <Route element={<CenterLayout />}>
        {/* Routes like login, register etc can go here */}
      </Route>
      <Route element= {<PortalLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/bookings" element={<Bookings />} />
      </Route>
    </Routes>
  )
}

export default App
