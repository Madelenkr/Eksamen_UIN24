import React, {useState} from 'react';

// Enkelt login-skjema med brukernavn og passord (passordet lagres ikke)
export default function LoginForm({ onLogin }) {
    const [ username, setUsername] = useState('');
    

  // Hindrer sideoppdatering og sender brukernavn tilbake til parent-komponenten
  const handleSubmit = (e) => {
        e.preventDefault(); // Hindrer reload av siden
        onLogin(username);
    };
    return (
        <section className="login-section">

            <form className= "login-form" onSubmit={handleSubmit}>
                <label className="form-label">
                    <input className='form-input'
                    type="text" 
                    name="username"
                    id="username" 
                    placeholder='Brukernavn'
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </label>

                <label className="form-label">
                    <input className='form-input'
                    type="password"  
                    id="password" 
                    placeholder='Passord'
                    required
                    />
                </label>

                <button className= "login-button"> 
                    Logg inn
                </button>
            </form>
        </section>
    );
};
