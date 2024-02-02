import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Person from './pages/Person'
import CreatePerson from './pages/CreatePerson';
import LoanList from './pages/LoanList';
import 'bulma/css/bulma.css';
import './index.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function App() {
  return (
    <main>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/loan' element={<LoanList />} />
            <Route path='/person' element={<Person />} />
            <Route path='/createperson' element={<CreatePerson />} />
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </main>
  )
}

export default App
