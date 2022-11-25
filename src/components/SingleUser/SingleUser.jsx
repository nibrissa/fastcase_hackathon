import React from 'react'
import s from './SingleUser.module.css'
import axios from "axios";
import {API_URL} from "../../services/user.service";
import authHeader from "../../services/auth-header";


function fetch_user() {
    return axios.get(API_URL + 'profile', {headers: authHeader()});
}


const SingleUser = () => {

    let {user} = fetch_user()
    if (!user) {
        user = {
            id: 1,
            fio: "Лукаш Павел Андреевич",
            email: "1789191@sfedu.ru",
            phone: "+790498716574",
            points: 0,
            preferred_communication: 0,
            my_friendlist: [
                {
                    id: 2,
                    fio: "Акинтьева Полина",
                    email: "1789q191@sfedu.ru",
                    phone: "+798498796574",
                    points: 0,
                    preferred_communication: 0,
                    my_friendlist: [],
                    structures_list: []
                }
            ],
            structures_list: []
        }
    }

    return (

        <div className={s.profileWrapper}>

            <h2> Ваш профиль</h2>
            <div className={s.profileContent}>
                <div className={s.profileAva}>

                </div>
                <div className={s.profileInfo}>
                    <ul className={s.profileInfoList}>
                        <li className={s.profileInfoItem}>{user.fio}</li>
                        <li className={s.profileInfoItem}>{user.email}</li>
                        <li className={s.profileInfoItem}>{user.phone}</li>
                        <li className={s.profileInfoItem}>
                            <select className={s.select} defaultValue="Предпочитаемый способ связи:">
                                <option disabled>Предпочитаемый способ связи:</option>
                                <option>Почта</option>
                                <option>Телефон</option>
                                <option>СМС</option>
                            </select>
                        </li>
                        <li className={s.profileInfoItem}>{user.structures_list[0] ? user.structures_list[0].name : "Название организации"}</li>
                        <li className={s.profileInfoItem}>{user.points}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SingleUser;