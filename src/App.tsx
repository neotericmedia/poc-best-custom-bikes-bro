import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Workshop from './pages/Workshop';
import Outlaw from './pages/Outlaw';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/outlaw" element={<Outlaw />} />
      </Routes>
    </Router>
  );
};

export default App;