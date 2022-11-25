import s from './regist.module.css';
import React from 'react';

const Registration = () => {
    return (

        <div className={s.loginCardContainer}>

            <div className={s.loginCard}>

                <div className={s.loginCardHeader}>

                    <h2>Регистрация</h2>

                </div>

                <form className={s.loginCardForm}>

                    <div className={s.formItem}>
                        <input type="text" name='fio' placeholder="Имя пользователя" autoFocus required/>
                    </div>
                    <div className={s.formItem}>
                        <input type="email" name='email' placeholder="Почта" autoFocus required/>
                    </div>
                    <div className={s.formItem}>
                        <input type="text" name='username' placeholder="Логин" autoFocus required/>
                    </div>
                    <div className={s.formItem}>
                        <input type="phone" name='phone' placeholder="Телефон" autoFocus required/>
                    </div>

                    <div className={s.formItem}>
                        <input type="password" name='password' placeholder="Пароль" maxLength="6" autoFocus required/>
                    </div>

                    <button className={s.btn} type="submit">Войти</button>

                </form>
            </div>
        </div>
    );
}

export default Registration;