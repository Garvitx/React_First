import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Resources from './components/Resources';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        

        {/* Routes */}
        <Routes> {/* Wrap your routes with Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
