import React from 'react'
import Cutomer_Routes from './Routes/Cutomer_Routes'
import { Route, Routes } from 'react-router-dom'
import './App.css'
const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/*' element={<Cutomer_Routes />} />
    </Routes>
  </div>
  )
}

export default App