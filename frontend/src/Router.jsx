import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CarDetail from './pages/CarDetail'
import TestDrive from './pages/TestDrive'
import VibPokupka from './pages/VibPokupka'
import MashModeli from './pages/MashModeli'
import Form from './pages/TestDriveForm'
import Dealers from './pages/Dealers'
import MirKia from './pages/MirKia'
import TipVlad from './pages/TipVlad'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/car/:id' element={<CarDetail />} />
                <Route path='/test-drive' element={<TestDrive />} />
                <Route path='/pokupka' element={<VibPokupka />} />
                <Route path='/models' element={<MashModeli />} /> 
                <Route path='/forma' element={<Form />} /> 
                <Route path='/dileri' element={<Dealers />} /> 
                <Route path='/mir' element={<MirKia />} /> 
                <Route path='/vlad' element={<TipVlad />} /> 
            </Routes>
        </BrowserRouter>
    )
}
