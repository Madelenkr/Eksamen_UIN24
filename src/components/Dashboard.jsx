import React, { useState } from 'react';
import "../styles/dashboard.css"; // Importer CSS-modulen
import Layout from './Layout';

export default function Dashboard({setIsLoggedIn}) {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setLocalIsLoggedIn] = useState(false);
  

  const handleSubmit = (e) => { //
    e.preventDefault();
    setIsLoggedIn(true);
    setLocalIsLoggedIn(true);
  };
<<<<<<< Updated upstream

  return (
    <main>
      {!isLoggedIn ? ( 
        <>
          <header>
            <h1>Logg inn</h1>
            <p>Fyll ut feltene for å logge inn!</p>
          </header>

          <form onSubmit={handleSubmit}>
            <section>
              <label htmlFor="bruker">Bruker Navn</label>
              <input
                type="text"
                name="brukernavn"
                id="bruker"
                placeholder="Johan"
                required
                onChange={(e) => setUsername(e.target.value)}
              />

              <label htmlFor="password">Passord</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Johan1234"
                required
              />
            </section>

            <button type="submit">Logg inn</button>
          </form>
        </>
      ) : (
        <section>
          <h1>Min side/Dashboard</h1>
          <p>Velkommen, {username || 'bruker'}!</p>
          <ul>
            <li><a href="#venner">Venner</a></li>
            <li><a href="#kjop">Min kjøp</a></li>
            <li><a href="#onskeliste">Min ønskeliste</a></li>
          </ul>
        </section>
      )}
    </main>
=======
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
>>>>>>> Stashed changes
  );
}
