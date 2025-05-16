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
