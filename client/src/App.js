import React from 'react'
import Body from './components/Body'
import { BrowserRouter } from 'react-router-dom'
import DashboardLayout from './layout/DashboardLayout'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <DashboardLayout />
      </BrowserRouter>
    </div>
  )
}

