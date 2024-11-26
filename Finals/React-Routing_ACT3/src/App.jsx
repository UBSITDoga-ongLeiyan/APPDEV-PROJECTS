import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import Games from './components/Games'
import Game from './components/Game'

// when importing components ComponentName from frile/hierarchy
// {contexts} -> useState, useParams, BrowserRouter, Link, Route, Routes

function App() {
  
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to = "/">Home</Link>
        </li>
        <li>
          <Link to = "/about">About</Link>
        </li>
        <li>
          <Link to = "/games">Games</Link>
        </li>
      </ul>
    </nav>

    {/* Routes for the application */}
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/about" element = {<About />} />
      <Route path = "/games" >
        <Route index element = {<Games />} />
        <Route path =":gameId" element = {<Game />} />
      </Route>

      <Route path = "*" element = {<NotFound />} />
    </Routes>
    </>
  )
}

export default App
