import React, {useState} from 'react';

export default function LoginForm({ onLogin }) {
    const [ username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username);
    };
    return (
        <section className="login-section">

            <form className= "login-form" onSubmit={handleSubmit}>
                <label className="form-label">
                     Brukernavn
                    <input className='form-input'
                    type="text" 
                    name="username"
                    id="username" 
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </label>

                <label className="form-label">
                     Passord
                    <input className='form-input'
                    type="password"  
                    id="password" 
                    />
                </label>

                <button className= "login-button"> 
                    Logg inn
                </button>
            </form>
        </section>
    );
};
