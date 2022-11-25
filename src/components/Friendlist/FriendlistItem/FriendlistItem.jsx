import React from 'react'
import s from './FriendlistItem.module.css'


const FriendlistItem = () => {

    return(

        <div className={s.itemWrapper}>
            <div className={s.itemContent}>
                <div className={s.ava}>

                </div>
                <div className={s.info}>
                    <p> Иванов Иван Иванович</p>
                    <p>Отдел</p>
                    <p>Баллы</p>


                </div>
            </div>
        </div>


    );
}
export default FriendlistItem;