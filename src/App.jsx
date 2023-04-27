import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './component/Home'
import Moviepage from './component/MoviePage'
import ErrorPage from './component/ErrorPage'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movie/:id' element={<Moviepage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
