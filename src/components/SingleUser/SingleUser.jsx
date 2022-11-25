import React from 'react'
import s from './SingleUser.module.css'

const SingleUser = () => {
    return(

        <div className={s.profileWrapper}>

            <h2> Ваш профиль</h2>
            <div className={s.profileContent}>
                <div className={s.profileAva}>

                </div>
                <div className={s.profileInfo}>
                        <ul className={s.profileInfoList}>
                            <li className={s.profileInfoItem}>ФИО</li>
                            <li className={s.profileInfoItem}>почта</li>
                            <li className={s.profileInfoItem}>телефон</li>
                            <li className={s.profileInfoItem}>Предпочитаемый способ связи:</li>
                            <li className={s.profileInfoItem}>
                                <select>
                                    <option>Почта</option>
                                    <option>Телефон</option>
                                    <option>СМС</option>

                                </select>
                            </li>
                            <li className={s.profileInfoItem}>Название Организации</li>
                            <li className={s.profileInfoItem}>Название отдела</li>
                        </ul>
                </div>
            </div>
        </div>


    );
}

export default SingleUser;