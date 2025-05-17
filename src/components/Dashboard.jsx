import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import DashboardView from '../components/DashboardView';
import "../styles/dashboard.css"; // Importer CSS-modulen

// Hovedkomponent som kontrollerer om bruker er logget inn eller ikke
export default function Dashboard({setIsLoggedIn}) {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setLocalIsLoggedIn] = useState(false);

  // Kalles når bruker logger inn, lagrer brukernavn og oppdaterer login-state
  const handleLogin = (name) => { //
    setUsername(name);
    setIsLoggedIn(true);
    setLocalIsLoggedIn(true);
  };

  // Funksjonen som logger ut brukeren og tilbakestiller tilstand
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
