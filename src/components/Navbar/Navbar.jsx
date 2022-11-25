import s from './Navbar.module.css'
import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import {BsSearch, CgProfile, FaTasks, FaUserFriends, GrClose, TfiStatsUp} from "react-icons/all";

const Navbar = () => {

    const [nav, setNav] = useState(false);

    return (
        <div className={s.navWrapper}>

            <div className={s.navContent}>

                <div className={s.navLogo}>
                    <h1 className={s.projectName}>Быстрые задачи</h1>
                </div>

                <nav className={nav ? [s.nav, s.active].join(' ') : [s.nav]}>
                    <NavLink to="/my_profile">
                        <div onClick={() => setNav(!nav)} className={s.item}>
                            <div className={s.icons}>
                                <CgProfile size={20}/>
                            </div>
                            Профиль
                        </div>
                    </NavLink>

                    <NavLink to="/tasks">
                        <div onClick={() => setNav(!nav)} className={s.item}>
                            <div className={s.icons}>
                                <FaTasks size={20}/>
                            </div>
                            Задачи
                        </div>
                    </NavLink>

                    <NavLink to="/statistics">
                        <div onClick={() => setNav(!nav)} className={s.item}>
                            <div className={s.icons}>
                                <TfiStatsUp size={20}/>
                            </div>
                            Статистика
                        </div>
                    </NavLink>

                    <NavLink to="/tasks/search">
                        <div onClick={() => setNav(!nav)} className={s.item}>
                            <div className={s.icons}>
                                <BsSearch size={20}/>
                            </div>
                            Поиск
                        </div>
                    </NavLink>

                    <NavLink to="/friendlist">
                        <div onClick={() => setNav(!nav)} className={s.item}>
                            <div className={s.icons}>
                                <FaUserFriends size={20}/>
                            </div>
                            Список друзей
                        </div>
                    </NavLink>

                    <NavLink to="/logout">
                        <div onClick={() => setNav(!nav)} className={s.item}>
                            <div className={s.icons}>
                                <FaUserFriends size={20}/>
                            </div>
                            Выйти
                        </div>
                    </NavLink>

                </nav>

                <div onClick={() => setNav(!nav)} className={s.mobileBtn}>
                    {nav ? <AiOutlineClose size={35} color={'#8D23F6'}/> : <AiOutlineMenu size={35} color={'#8D23F6'}/>}
                </div>

            </div>

        </div>

    );


}

export default Navbar;