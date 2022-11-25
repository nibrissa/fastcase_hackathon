import React from 'react'
import s from "./Friendlist.module.css"
import FriendlistItem from "./FriendlistItem/FriendlistItem";
import axios from "axios";
import {API_URL} from "../../services/user.service";
import authHeader from "../../services/auth-header";

function fetch_friends() {
    return axios.get(API_URL + 'friendlist', {headers: authHeader()});
}


const Friendlist = () => {

    let {friendlist} = fetch_friends()

    if (!friendlist) {
        friendlist = [
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
        ]
    }


    return (

        <div className={s.friendsList}>
            {friendlist.map(friend =>
                <FriendlistItem key={friend.id} user={friend}/>
            )}
        </div>

    );
}

export default Friendlist;