import React from 'react'
import s from "./Friendlist.module.css"
import FriendlistItem from "./FriendlistItem/FriendlistItem";

const Friendlist = () => {
    return(
        <div className={s.friendsList}>
            <FriendlistItem/>
            <FriendlistItem/>
            <FriendlistItem/>
            <FriendlistItem/>
            <FriendlistItem/>
        </div>

    );
}

export default Friendlist;