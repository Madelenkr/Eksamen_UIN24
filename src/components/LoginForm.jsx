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

            // {/* Skjemaet for innlogging, som kaller handleSubmit når det sendes */}
            <form className= "login-form" onSubmit={handleSubmit}>
                {/*Overskrift*/}
                <h2 className='login-h2'>Brukernavn</h2>
                <label className="form-label">
                    <input className='form-input'
                        //Type er tekst
                        type="text" 
                        //Navn på input feltet, brukernavn
                        name="username"
                        //Vises når feltet er tomt
                        placeholder='Brukernavn'
                        // Setter brukernavn med onChange
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>

                <h2 className='login-h2'>Passord</h2>
                <label className="form-label">
                    <input className='form-input'
                        //Passordfelt
                        type="password"  
                        placeholder='Passord'
                    />
                </label>

                {/* Knapp for å sende skjemaet*/}
                <button className= "login-button"> 
                    Logg inn
                </button>
            </form>
        </section>
    );
};
