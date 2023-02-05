import React from 'react';
import Home from './Home';
import About from './About';
import Recipes from './Recipes';
import Reviews from './Reviews';
import {Route, Routes, BrowserRouter} from 'react-router-dom';

function Pages() {
  return (
    <BrowserRouter>
    <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/recipes" element={<Recipes />} />
    </Routes>
    </BrowserRouter>
  );
}

export default Pages