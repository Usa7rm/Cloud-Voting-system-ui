import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Winner from './Pages/winner';
import Results from './Pages/Results';



function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/winner" element={<Winner />} />
          <Route path="/Results" element={<Results />} />
        </Routes>
      </Router>
  );
}

export default App;
