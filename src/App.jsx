import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <hr></hr>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< Home/>} />
          <Route path='/About' element={< About/>} />
          <Route path='/About' element={< About/>} />
          <Route path='/Contact' element={< Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App