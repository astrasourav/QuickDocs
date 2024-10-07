import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Myprofile from './components/Myprofile'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <hr></hr>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/About' element={< About />} />
          <Route path='/About' element={< About />} />
          <Route path='/Contact' element={< Contact />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Myprofile' element={<Myprofile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App