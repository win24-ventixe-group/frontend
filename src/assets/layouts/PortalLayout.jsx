import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const CenterLayout = () => {
  return (
    <div className='portal-wrapper'>
      <Nav />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default CenterLayout