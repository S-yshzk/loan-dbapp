import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Person from './pages/Person'
import CreatePerson from './pages/CreatePerson';
import 'bulma/css/bulma.css';
import './index.css'
function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/person' element={<Person />} />
          <Route path='/createperson' element={<CreatePerson />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
