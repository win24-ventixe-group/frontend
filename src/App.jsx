import {Route, Routes} from 'react-router-dom';
import './App.css';
import EventPage from "./assets/pages/EventPage.jsx";
import Dashboard from "./assets/pages/Dashboard.jsx";
import EventDetailsPage from "./assets/pages/EventDetailsPage.jsx";
import CenterLayout from './assets/layouts/CenterLayout.jsx';
import PortalLayout from './assets/layouts/PortalLayout.jsx';
import BookingEventPage from './assets/pages/BookingEventPage.jsx';


function App() {
  return (
    <Routes>
      <Route element={<CenterLayout />}>
        {/* Routes like login, register etc can go here */}  
      </Route>
      <Route element= {<PortalLayout />}>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/" element={<EventPage />} />
        <Route path="/events/:id" element={<EventDetailsPage />} />
        <Route path="/events/booking/:id" element={<BookingEventPage />} />
      </Route>
    </Routes>
  )
}

export default App
