import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const PortalLayout = () => {
  const location = useLocation();

  const getTitle = (path) => {
    switch (true) {
      case path === '/':
        return 'All Events';
      case path === '/dashboard':
        return 'Dashboard';
      case path.startsWith('/events/booking'):
        return 'Book Event';
      case path.startsWith('/events/'):
        return 'Event Details';
      default:
        return 'All Events';
    }
  };

  const title = getTitle(location.pathname);

  return (
    <div className='portal-wrapper'>
      <Nav />
      <Header title={title} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default PortalLayout