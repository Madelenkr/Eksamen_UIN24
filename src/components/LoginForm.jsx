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
                <label htmlFor="username" className="form-label"> Brukernavn</label>
                <input className='form-input'
                type="text" 
                name="username"
                id="username" 
                onChange={(e) => setUsername(e.target.value)}
                required/>

                <label htmlFor="password" className="form-label"> Passord</label>
                <input className='form-input'
                type="password"  
                id="password" 
                required/>
                <button type='submit' className= "login-button"> Logg inn</button>
            </form>
        </section>
    );
}
