import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dogs from './components/Dogs';
import DogDetail from './components/DogDetail';
import DogFacts from './components/DogFacts';


const App = () => {
    return (
      <div>
        <a href='/dogs'>Home</a>
        <Router>
          <Routes>
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/dogs/:name" element={<DogDetail />} />
            <Route path="/dogs/:name/facts" element={<DogFacts />} />
          </Routes>
        </Router>
      </div>
    );
  }

export default App;
