import React from 'react'
import s from './FriendlistItem.module.css'


const FriendlistItem = (props) => {

    return (

        <div className={s.itemWrapper}>
            <div className={s.itemContent}>
                <div className={s.ava}>
                </div>
                <div className={s.info}>
                    <p>{props.user.fio}</p>
                    <p>{props.user.structures_list[0] ? props.user.structures_list[0].name : "Наименование организации"}</p>
                    <p>{props.user.points}</p>
                </div>
            </div>
        </div>


    );
}
export default FriendlistItem;