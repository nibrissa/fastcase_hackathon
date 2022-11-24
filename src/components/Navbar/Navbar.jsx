import s from './Navbar.module.css'
import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"

const Navbar = () => {

    const [nav, setNav] = useState(false);

    return (
        <div className={s.navWrapper}>

            <div className={s.navContent}>

                <div className={s.navLogo}>
                    <h1 className={s.projectName}>Быстрые задачи</h1>
                </div>

                <nav className={nav ? [s.nav, s.active].join(' ') : [s.nav]}>

                    <NavLink to="/tasks">
                        <div onClick={() => setNav(!nav)} className={s.item}>
                            <img src={require('../../img/tasks.png')}/>
                            Задачи
                        </div>
                    </NavLink>

                    <NavLink to="/statistics">
                        <div onClick={() => setNav(!nav)} className={s.item}>
                            <img src={require('../../img/stat.png')}/>
                            Статистика
                        </div>
                    </NavLink>

                    <div onClick={() => setNav(!nav)} className={s.item}>
                        <img src={require('../../img/search.png')}/>
                        <a>Поиск</a>
                    </div>

                    <div onClick={() => setNav(!nav)} className={s.item}>
                        <img src={require('../../img/social.png')}/>
                        <a>Список друзей</a>
                    </div>

                </nav>

                <div onClick={() => setNav(!nav)} className={s.mobileBtn}>
                    {nav ? <AiOutlineClose size={35}/> : <AiOutlineMenu size={35}/>}
                </div>

            </div>

            </div>




    );


}

export default Navbar;