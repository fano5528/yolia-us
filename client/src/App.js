import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stays from './pages/Stays';
import Experiences from './pages/Experiences';
import OfferingPage from './pages/OfferingPage';
import ScrollToTop from './components/ScrollToTop';
import './scss/main.scss';

export default function App() {
  return (
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/stays" exact element={<Stays/>} />
        <Route path="/stays/:uid" element={<OfferingPage/>} />
        <Route path="/experiences" element={<Experiences/>} />
      </Routes>
  );
}