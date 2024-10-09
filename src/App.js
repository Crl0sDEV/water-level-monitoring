import React from 'react';
import './App.css'; // We'll use this for custom styling.

function App() {
  return (
    <div className="container-fluid bg-white min-vh-100">
      <header className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand mx-3" href="/">Water Level Monitoring</a>
      </header>

      <main className="container mt-4">
        <h1 className="text-center text-black">Real-Time Water Level Monitoring</h1>
        
        <div className="row justify-content-center mt-4">
          <div className="col-md-6">
            <div className="card shadow-lg border-0 rounded-lg" style={{ backgroundColor: '#ADD8E6' }}>
              <div className="card-body text-center">
                <h2 className="text-black">Current Water Depth: <span className="text-white">3.5 meters</span></h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card shadow border-0 p-3" style={{ backgroundColor: '#ffffff' }}>
              <h4 className="text-center text-black">Water Level History</h4>
              {/* You can integrate a chart here */}
              <div className="chart-placeholder bg-light" style={{ height: '250px', borderRadius: '10px' }}>
                <p className="text-center mt-5">Chart placeholder</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card shadow border-0 p-3" style={{ backgroundColor: '#ffffff' }}>
              <h4 className="text-center text-black">System Status</h4>
              <div className="text-center">
                <p className="mt-3 text-success">Sensor: Active</p>
                <p className="text-success">Connection: Stable</p>
                <button className="btn btn-dark">More Info</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>&copy; 2024 Water Monitoring System</p>
      </footer>
    </div>
  );
}

export default App;
