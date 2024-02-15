import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Box } from '@mui/material'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'

const App = () => {
  return (
    <Box width="400px">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercisse/:id" element={<ExerciseDetail />} />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
