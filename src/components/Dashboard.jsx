import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import DashboardView from '../components/DashboardView';
import "../styles/dashboard.css"; // Importer CSS-modulen

export default function Dashboard({setIsLoggedIn}) {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setLocalIsLoggedIn] = useState(false);

  const handleLogin = (name) => { //
    setUsername(name);
    setIsLoggedIn(true);
    setLocalIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setLocalIsLoggedIn(false);

    setUsername('');
  };

  return (
   <>
    {!isLoggedIn ? (
      <LoginForm onLogin={handleLogin} />
    ) : (
      <DashboardView username={username} onLogout={handleLogout}/>
    )}
  </>
  );
}
