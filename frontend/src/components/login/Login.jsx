
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function Login ({onLogin}) {

    const navigate = useNavigate(); 

    const[password, setPassword] = useState('');
    const[email, setEmail] = useState('');

    const handleLogin = (evt) => {
        evt.preventDefault()
        onLogin({password, email})
          .then(() => {
            setPassword('');
            setEmail('');
          })
          .then(() => navigate('/'))
          .catch(console.error)
    }

    return (
        <div className="login">
            <h2 className="login__title">Вход</h2>
            <form className="login__form" 
            name="signin"
            onSubmit={handleLogin}
            >
                <input 
                className="login__input_email" 
                placeholder="Email"
                type="email"
                value={email}
                onChange={({target}) => setEmail(target.value)}
                required
                >
                </input>
                <input 
                className="login__input_password" 
                placeholder="Пароль"
                type="password"
                value={password}
                onChange={({target}) => setPassword(target.value)}
                required
                >  
                </input>
                <button type="submit" className="login__submit">Войти</button>
            </form>
        </div>
    )
}