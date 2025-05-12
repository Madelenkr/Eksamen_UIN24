import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import DashboardView from '../components/DashboardView';
import "../styles/dashboard.css"; // Importer CSS-modulen
import Layout from './Layout';  

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (name) => { //
    setUsername(name);
    setIsLoggedIn(true);
  };

  return (
  
   <>
    {!isLoggedIn ? (
      <LoginForm onLogin={handleLogin} />
    ) : (
      <DashboardView username={username} />
    )}
  </>
  );
}
