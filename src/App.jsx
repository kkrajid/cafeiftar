import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Footer from './components/Footer';
import BookStyleMenu from './components/BookStyleMenu';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/menu" element={<Menu />} /> */}
        <Route path="/menu" element={<BookStyleMenu/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
