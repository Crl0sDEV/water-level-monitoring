import React, { useEffect } from 'react';
import './Dashboard.css';  // Import custom styles

const Dashboard = () => {

    useEffect(() => {
        // Ensure Bootstrap is available globally
        const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.forEach(tooltipTriggerEl => {
          new window.bootstrap.Tooltip(tooltipTriggerEl); // Reference bootstrap from window object
        });
      }, []);

  return (
    <div className="flex-shrink-0 p-3" style={{ width: '280px' }}>
      <a href="/" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
        <span className="fs-5 fw-semibold">Water Level Monitoring</span>
      </a>
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
          <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
            Home
          </button>
          <div className="collapse show" id="home-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="Overview" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
              <li><a href="Updates" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Updates</a></li>
              <li><a href="Reports" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Reports</a></li>
            </ul>
          </div>
        </li>
        <li className="border-top my-3"></li>
        <li className="mb-1">
          <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
            Dashboard
          </button>
          <div className="collapse" id="dashboard-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="Overview" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
              <li><a href="Weekly" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Weekly</a></li>
              <li><a href="Monthly" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Monthly</a></li>
              <li><a href="Annually" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Annually</a></li>
            </ul>
          </div>
        </li>
        <li className="border-top my-3"></li>
        <li className="mb-1">
          <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
            Account
          </button>
          <div className="collapse" id="account-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="New" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New...</a></li>
              <li><a href="Profile" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Profile</a></li>
              <li><a href="Settings" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Settings</a></li>
              <li><a href="Signout" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Sign out</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
