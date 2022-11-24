import s from './login.module.css';
import React from 'react';

const Login = () =>{
    return(

        <div className={s.loginCardContainer}>

            <div className={s.loginCard}>

                <div className={s.loginCardHeader}>

                    <h2>Авторизация</h2>

                </div>

                <form className={s.loginCardForm}>

                    <div className={s.formItem}>
                        <input type="text" placeholder="ФИО" autoFocus required/>
                    </div>
                    <div className={s.formItem}>
                        <input type="password" placeholder="Пароль" maxLength="6" autoFocus required/>
                    </div>

                    <button className={s.btn} type="submit">Войти</button>


                </form>

            </div>

        </div>
    );


}

export default Login;