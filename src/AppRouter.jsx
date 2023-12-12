import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import AddData from './AddData'
import Update from './Update'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='create' element={<AddData />} />
        <Route path='update/:id' element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
