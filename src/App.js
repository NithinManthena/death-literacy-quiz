import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Routes instead of Switch
import Navbar from './Navbar';  // Ensure Navbar is correctly imported

function App() {
  return (
    <Router>
      <Navbar />  {/* Navbar for navigation */}
      <Routes>  {/* Switch has been replaced by Routes in React Router v6 */}
        <Route path="/home" element={<h2>Home Page</h2>} />  {/* Use 'element' instead of 'component' */}
        <Route path="/quiz" element={<h2>Quiz Page</h2>} />  {/* Use 'element' instead of 'component' */}
        <Route path="/report" element={<h2>Report Page</h2>} />  {/* Use 'element' instead of 'component' */}
      </Routes>
    </Router>
  );
}

export default App;