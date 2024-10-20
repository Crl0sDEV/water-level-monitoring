import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

// Simple spinner component for the loading animation
const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);  // Initial loading state

  // Simulate loading time (e.g., 2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);  // Set loading to false after delay
    }, 2000);  // 2 seconds loading time

    return () => clearTimeout(timer);  // Cleanup the timer
  }, []);

  // Show loading spinner while loading is true
  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <Routes>
        {/* Redirect root ("/") to the login page */}
        <Route path="/" element={<Navigate to="/login" />} />
        {/* Login page route */}
        <Route path="/login" element={<Login />} />
        {/* Dashboard route */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
