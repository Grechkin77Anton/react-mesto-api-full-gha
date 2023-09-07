import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function Register ({onRegister, setIsError}) {

    const navigate = useNavigate(); 

    const[password, setPassword] = useState('');
    const[email, setEmail] = useState('');


    const handleRegister = (evt) => {
        evt.preventDefault()
        onRegister({password, email})
          .then(() => {
            setPassword('');
            setEmail('');
          })
          .then(() =>
            navigate('/signin'))
          .catch((err) => {
            setIsError(true)
            console.log(err)
          })
    }


    return (
        <div className="registration">
            <h2 className="registration__title">Регистрация</h2>
            <form className="registration__form" 
            name="signup" 
            onSubmit={handleRegister}
            >
                <input 
                className="registration__input_email" 
                placeholder="Email"
                type="email"
                value={email}
                onChange={({target}) => setEmail(target.value)}
                required
                >
                </input>
                <input 
                className="registration__input_password" 
                placeholder="Пароль"
                type="password"
                value={password}
                onChange={({target}) => setPassword(target.value)}
                required
                >  
                </input>
                <button type='submit' className="registration__submit">Зарегистрироваться</button>
            </form>
            <p className="registration__subtitle">Уже зарегистрированы? <Link to='/signin' className='registration__subtitle-link'>Войти</Link></p>
        </div>
    )
}