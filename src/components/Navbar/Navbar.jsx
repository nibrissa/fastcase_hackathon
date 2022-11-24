import s from './Navbar.module.css'
import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.navWrapper}>

            <h1 className={s.projectName}>Быстрые задачи</h1>

            <nav className={s.nav}>

                <NavLink to="/tasks">
                    <div className={s.item}>
                        <img src={require('../../img/tasks.png')}/>
                        Задачи
                    </div>
                </NavLink>

                <NavLink to="/statistics">
                    <div className={s.item}>
                        <img src={require('../../img/stat.png')}/>
                        Статистика
                    </div>
                </NavLink>

                <div className={s.item}>
                    <img src={require('../../img/search.png')}/>
                    <a>Поиск</a>
                </div>

                <div className={s.item}>
                    <img src={require('../../img/social.png')}/>
                    <a>Список друзей</a>
                </div>

                <div className={s.item}>
                    <img src={require('../../img/settings.png')}/>
                    <a>Настройки</a>
                </div>

                <div className={s.item}>
                    <img src={require('../../img/help.png')}/>
                    <a>Помощь</a>
                </div>

            </nav>
        </div>


    );


}

export default Navbar;