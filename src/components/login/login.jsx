import s from './login.module.css';
import React from 'react';
import AuthService from "../../services/auth.service";
import {NavLink} from "react-router-dom";

function handleLogin(e) {
    e.preventDefault()
    let username = document.getElementsByName('username')[0].value
    let password = document.getElementsByName('password')[0].value
    console.log(username)
    AuthService.login(username, password).then(
        () => {
            window.location = '/';
        })
}

const Login = () => {
    return (

        <div className={s.loginCardContainer}>

            <div className={s.loginCard}>

                <div className={s.loginCardHeader}>

                    <h2>Авторизация</h2>

                </div>

                <form className={s.loginCardForm} onSubmit={handleLogin}>

                    <div className={s.formItem}>
                        <input type="text" name='username' placeholder="Имя пользователя" autoFocus required/>
                    </div>
                    <div className={s.formItem}>
                        <input type="password" name='password' placeholder="Пароль" maxLength="6" autoFocus required/>
                    </div>

                    <button className={s.btn} type="submit">Войти</button>
                    <NavLink to={"/registration"}>
                        <a>Зарегистрироваться</a>
                    </NavLink>

                </form>
            </div>
        </div>
    );
}

export default Login;