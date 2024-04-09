import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Ensure this is the updated CSS file with scoped class names

import inventoryIcon from '../assets/inventory.png';
import ordersIcon from '../assets/oandp.png';
import suppliersIcon from '../assets/supplier.webp';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/', { state: { message: 'Logout successful' } });
  };

  return (
    <div className="dashboard-dashboardContainer">
      <button className="dashboard-logoutButton" onClick={handleLogout}>Logout</button>
      <div className="dashboard-flexBoxesContainer">
        <div className="dashboard-flexBox" onClick={() => navigate('/inventory')}>
          <img src={inventoryIcon} alt="Inventory Icon" className="dashboard-icon" />
          <p>INVENTORY</p>
        </div>
        <div className="dashboard-flexBox" onClick={() => navigate('/suppliers')}>
          <img src={suppliersIcon} alt="Suppliers Icon" className="dashboard-icon" />
          <p>Suppliers</p>
        </div>
        <div className="dashboard-flexBox" onClick={() => navigate('/orders')}>
          <img src={ordersIcon} alt="Orders & Purchases Icon" className="dashboard-icon" />
          <p>Orders & Purchases</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
