import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Weather from './pages/Weather';
import Recipes from './pages/Recipes';
import Finance from './pages/Finance';
import Movies from './pages/Movies';
import News from './pages/News';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 dewy-bg">
      <ScrollToTop />
      <NavigationBar />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
