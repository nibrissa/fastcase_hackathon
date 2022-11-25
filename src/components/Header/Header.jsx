import React from 'react'
import s from './Header.module.css'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {CgProfile} from "react-icons/all";
import CreateModal from "../CreateModal/CreateModal";
import {NavLink} from "react-router-dom";


const Header = () => {

    return(

        <div className={s.wrapper}>
            <div className={s.content}>
                <ul className={s.headerList}>
                    <li className={s.headerItem}>
                        <div className={s.btnCon}>
                            <button className={s.btn}> <IoMdNotificationsOutline size={42} color={'#8D23F6'}/> </button>
                        </div>
                    </li>
                    <NavLink to={'/my_profile'}>
                        <li className={s.headerItem}>
                            <div className={s.btnCon}>
                                <button className={s.btn}> <CgProfile size={42} color={'#8D23F6'}/> </button>
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to={'/update'}>
                    <li className={s.headerItem}>
                        <div className={s.btnCon}>
                            <button  className={s.btnCreate}> Создать задачу </button>

                        </div>
                    </li>
                    </NavLink>
                </ul>

            </div>
        </div>

    );

}

export default Header;